'use strict';
import {getEndpointParameters, getHTTPQuery} from './utils/helpers';
import {defaultGraphName, enableLogs, enableAuthentication, authGraphName} from '../configs/general';
import ResourceQuery from './sparql/ResourceQuery';
import ResourceUtil from './utils/ResourceUtil';
import Configurator from './utils/Configurator';
import rp from 'request-promise';
import fs from 'fs';
import Log from 'log';
/*-------------log updates-------------*/
let log;
let user, accessLevel;
if(enableLogs){
    let currentDate = new Date().toDateString().replace(/\s/g, '-');
    let logPath = './logs/' + currentDate + '.log';
    if (fs.existsSync(logPath)) {
        //create a new file when restarting the server
        logPath = './logs/' + currentDate + '_' + Date.now() + '.log';
    }
    log = new Log('debug', fs.createWriteStream(logPath));
}
/*-------------config-------------*/
const outputFormat = 'application/sparql-results+json';
/*-----------------------------------*/
let endpointParameters, category, graphName, propertyURI, resourceURI, objectURI, objectValue, query, queryObject, utilObject, configurator, propertyPath;
queryObject = new ResourceQuery();
utilObject = new ResourceUtil();
configurator = new Configurator();

export default {
    name: 'resource',
    // At least one of the CRUD methods is Required
    read: (req, resource, params, config, callback) => {
        if (resource === 'resource.properties') {
            category = params.category;
            //SPARQL QUERY
            graphName = (params.dataset !== '0' ? decodeURIComponent(params.dataset) : 0);
            resourceURI = params.resource;
            propertyPath = decodeURIComponent(params.propertyPath);
            if(propertyPath.length > 1){
                propertyPath = propertyPath.split(',');
            }
            //config handler
            let rconfig = configurator.prepareResourceConfig(graphName, resourceURI);
            //control access on authentication
            if(enableAuthentication){
                if(!req.user){
                    callback(null, {graphName: graphName, resourceURI: resourceURI, resourceType: '', currentCategory: 0, propertyPath: [], properties: [], config: rconfig});
                    return 0;
                }else{
                    user = req.user;
                }
            }else{
                user = {accountName: 'open'};
            }
            query = queryObject.getPrefixes() + queryObject.getProperties(graphName, resourceURI);
            // console.log(query);
            //build http uri
            endpointParameters = getEndpointParameters(graphName);
            //send request
            rp.get({uri: getHTTPQuery('read', query, endpointParameters, outputFormat)}).then(function(res){
                //exceptional case for user properties: we hide some admin props from normal users
                let {props, title, resourceType} = utilObject.parseProperties(res, graphName, resourceURI, category, propertyPath, rconfig.usePropertyCategories, rconfig.propertyCategories);
                if(graphName === authGraphName[0] && !parseInt(user.isSuperUser)){
                    props = utilObject.deleteAdminProperties(props);
                }
                //------------------------------------
                callback(null, {
                    graphName: graphName,
                    resourceURI: resourceURI,
                    resourceType: resourceType,
                    title: title,
                    currentCategory: category,
                    propertyPath: propertyPath,
                    properties: props,
                    config: rconfig
                });
            }).catch(function (err) {
                console.log(err);
                if(enableLogs){
                    log.error('\n User: ' + user.accountName + '\n Status Code: \n' + err.statusCode + '\n Error Msg: \n' + err.message);
                }
                callback(null, {graphName: graphName, resourceURI: resourceURI, resourceType: '', title: '', currentCategory: 0, propertyPath: [], properties: [], config: rconfig});
            });
        } else if (resource === 'resource.objectProperties') {
            graphName = params.dataset;
            objectURI = params.objectURI;
            propertyURI = params.propertyURI;
            resourceURI = params.resourceURI;
            //control access on authentication
            if(enableAuthentication){
                if(!req.user){
                    callback(null, {objectURI: objectURI, objectType: '', properties: []});
                    return 0;
                }else{
                    user = req.user;
                }
            }else{
                user = {accountName: 'open'};
            }
            query = queryObject.getPrefixes() + queryObject.getProperties(graphName, objectURI);
            //build http uri
            endpointParameters = getEndpointParameters(graphName);
            //send request
            rp.get({uri: getHTTPQuery('read', query, endpointParameters, outputFormat)}).then(function(res){
                let {props, objectType} = utilObject.parseObjectProperties(res, graphName, resourceURI, propertyURI);
                callback(null, {
                    objectURI: objectURI,
                    objectType: objectType,
                    properties: props
                });
            }).catch(function (err) {
                console.log(err);
                if(enableLogs){
                    log.error('\n User: ' + user.accountName + '\n Status Code: \n' + err.statusCode + '\n Error Msg: \n' + err.message);
                }
                callback(null, {objectURI: objectURI, objectType: '', properties: []});
            });
        }

    },
    // other methods
     create: (req, resource, params, body, config, callback) => {
         if (resource === 'resource.individualObject') {
             //control access on authentication
             if(enableAuthentication){
                 if(!req.user){
                     callback(null, {category: params.category});
                     return 0;
                 }else{
                     //check if user permitted to do the update action
                     user = req.user;
                     accessLevel = utilObject.checkAccess(user, params.dataset, params.resourceURI, params.propertyURI);
                     if(!accessLevel.access){
                         //action not allowed!
                         callback(null, {category: params.category});
                         return 0;
                     }
                 }
             }else{
                 user = {accountName: 'open'};
             }
             query = queryObject.getPrefixes() + queryObject.addTriple(params.dataset, params.resourceURI, params.propertyURI, params.objectValue, params.valueType, params.dataType);
             //build http uri
             endpointParameters = getEndpointParameters(params.dataset);
             //send request
             rp.get({uri: getHTTPQuery('update', query, endpointParameters, outputFormat)}).then(function(res){
                 if(enableLogs){
                     log.info('\n User: ' + user.accountName + ' \n Query: \n' + query);
                 }
                 callback(null, {category: params.category});
             }).catch(function (err) {
                 console.log(err);
                 if(enableLogs){
                     log.error('\n User: ' + user.accountName + '\n Status Code: \n' + err.statusCode + '\n Error Msg: \n' + err.message);
                 }
                 callback(null, {category: params.category});
             });
         } else if (resource === 'resource.individualObjectDetail') {
             //control access on authentication
             if(enableAuthentication){
                 if(!req.user){
                     callback(null, {category: params.category});
                     return 0;
                 }else{
                     user = req.user;
                     accessLevel = utilObject.checkAccess(user, params.dataset, params.resourceURI, params.propertyURI);
                     if(!accessLevel.access){
                         //action not allowed!
                         callback(null, {category: params.category});
                         return 0;
                     }
                 }
             }else{
                 user = {accountName: 'open'};
             }
             //we should add this resource into user's profile too
             query = queryObject.getPrefixes() + queryObject.updateObjectTriples(params.dataset, params.resourceURI, params.propertyURI, params.oldObjectValue, params.newObjectValue, params.valueType, params.dataType, params.detailData) + queryObject.addTriple(authGraphName, user.id, 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#editorOfResource', params.newObjectValue, 'uri', '');
             //build http uri
             endpointParameters = getEndpointParameters(params.dataset);
             //send request
             rp.get({uri: getHTTPQuery('update', query, endpointParameters, outputFormat)}).then(function(res){
                 if(enableLogs){
                     log.info('\n User: ' + user.accountName + ' \n Query: \n' + query);
                 }
                 callback(null, {category: params.category});
             }).catch(function (err) {
                 console.log(err);
                 if(enableLogs){
                     log.error('\n User: ' + user.accountName + '\n Status Code: \n' + err.statusCode + '\n Error Msg: \n' + err.message);
                 }
                 callback(null, {category: params.category});
             });
         }
     },
    update: (req, resource, params, body, config, callback) => {
        if (resource === 'resource.individualObject') {
            //control access on authentication
            if(enableAuthentication){
                if(!req.user){
                    callback(null, {category: params.category});
                    return 0;
                }else{
                    user = req.user;
                    accessLevel = utilObject.checkAccess(user, params.dataset, params.resourceURI, params.propertyURI);
                    if(!accessLevel.access){
                        //action not allowed!
                        callback(null, {category: params.category});
                        return 0;
                    }
                }
            }else{
                user = {accountName: 'open'};
            }
            endpointParameters = getEndpointParameters(params.dataset);
            query = queryObject.getPrefixes() + queryObject.getUpdateTripleQuery(endpointParameters.endpointType, params.dataset, params.resourceURI, params.propertyURI, params.oldObjectValue, params.newObjectValue, params.valueType, params.dataType);
            //build http uri
            //send request
            rp.get({uri: getHTTPQuery('update', query, endpointParameters, outputFormat)}).then(function(res){
                if(enableLogs){
                    log.info('\n User: ' + user.accountName + ' \n Query: \n' + query);
                }
                callback(null, {category: params.category});
            }).catch(function (err) {
                console.log(err);
                if(enableLogs){
                    log.error('\n User: ' + user.accountName + '\n Status Code: \n' + err.statusCode + '\n Error Msg: \n' + err.message);
                }
                callback(null, {category: params.category});
            });
        } else if(resource === 'resource.individualObjectDetail'){
            //control access on authentication
            if(enableAuthentication){
                if(!req.user){
                    callback(null, {category: params.category});
                    return 0;
                }else{
                    user = req.user;
                    accessLevel = utilObject.checkAccess(user, params.dataset, params.resourceURI, params.propertyURI);
                    if(!accessLevel.access){
                        //action not allowed!
                        callback(null, {category: params.category});
                        return 0;
                    }
                    //check access for detail object
                    accessLevel = utilObject.checkAccess(user, params.dataset, params.oldObjectValue, '');
                    if(!accessLevel.access){
                        //action not allowed!
                        callback(null, {category: params.category});
                        return 0;
                    }
                }
            }else{
                user = {accountName: 'open'};
            }
            query = queryObject.getPrefixes() + queryObject.updateObjectTriples(params.dataset, params.resourceURI, params.propertyURI, params.oldObjectValue, params.newObjectValue, params.valueType, params.dataType, params.detailData);
            //build http uri
            endpointParameters = getEndpointParameters(params.dataset);
            //send request
            rp.get({uri: getHTTPQuery('update', query, endpointParameters, outputFormat)}).then(function(res){
                if(enableLogs){
                    log.info('\n User: ' + user.accountName + ' \n Query: \n' + query);
                }
                callback(null, {category: params.category});
            }).catch(function (err) {
                console.log(err);
                if(enableLogs){
                    log.error('\n User: ' + user.accountName + '\n Status Code: \n' + err.statusCode + '\n Error Msg: \n' + err.message);
                }
                callback(null, {category: params.category});
            });
        } else if(resource === 'resource.aggObject'){
            //control access on authentication
            if(enableAuthentication){
                if(!req.user){
                    callback(null, {category: params.category});
                    return 0;
                }else{
                    user = req.user;
                    accessLevel = utilObject.checkAccess(user, params.dataset, params.resourceURI, params.propertyURI);
                    if(!accessLevel.access){
                        //action not allowed!
                        callback(null, {category: params.category});
                        return 0;
                    }
                }
            }else{
                user = {accountName: 'open'};
            }
            query = queryObject.getPrefixes() + queryObject.updateTriples(params.dataset, params.resourceURI, params.propertyURI, params.changes);
            //build http uri
            endpointParameters = getEndpointParameters(params.dataset);
            //send request
            rp.get({uri: getHTTPQuery('update', query, endpointParameters, outputFormat)}).then(function(res){
                if(enableLogs){
                    log.info('\n User: ' + user.accountName + ' \n Query: \n' + query);
                }
                callback(null, {category: params.category});
            }).catch(function (err) {
                console.log(err);
                if(enableLogs){
                    log.error('\n User: ' + user.accountName + '\n Status Code: \n' + err.statusCode + '\n Error Msg: \n' + err.message);
                }
                callback(null, {category: params.category});
            });
        }
    },
    delete: (req, resource, params, config, callback) => {
        if (resource === 'resource.individualObject') {
            //control access on authentication
            if(enableAuthentication){
                if(!req.user){
                    callback(null, {category: params.category});
                    return 0;
                }else{
                    user = req.user;
                    accessLevel = utilObject.checkAccess(user, params.dataset, params.resourceURI, params.propertyURI);
                    if(!accessLevel.access){
                        //action not allowed!
                        callback(null, {category: params.category});
                        return 0;
                    }
                }
            }else{
                user = {accountName: 'open'};
            }
            query = queryObject.getPrefixes() + queryObject.deleteTriple(params.dataset, params.resourceURI, params.propertyURI, params.objectValue, params.valueType, params.dataType);
            //build http uri
            endpointParameters = getEndpointParameters(params.dataset);
            //send request
            rp.get({uri: getHTTPQuery('update', query, endpointParameters, outputFormat)}).then(function(res){
                if(enableLogs){
                    log.info('\n User: ' + user.accountName + ' \n Query: \n' + query);
                }
                callback(null, {category: params.category});
            }).catch(function (err) {
                console.log(err);
                if(enableLogs){
                    log.error('\n User: ' + user.accountName + '\n Status Code: \n' + err.statusCode + '\n Error Msg: \n' + err.message);
                }
                callback(null, {category: params.category});
            });
        } else if(resource === 'resource.aggObject') {
            //control access on authentication
            if(enableAuthentication){
                if(!req.user){
                    callback(null, {category: params.category});
                }else{
                    user = req.user;
                    accessLevel = utilObject.checkAccess(user, params.dataset, params.resourceURI, params.propertyURI);
                    if(!accessLevel.access){
                        //action not allowed!
                        callback(null, {category: params.category});
                    }
                }
            }else{
                user = {accountName: 'open'};
            }
            query = queryObject.getPrefixes() + queryObject.deleteTriples(params.dataset, params.resourceURI, params.propertyURI, params.changes);
            //build http uri
            endpointParameters = getEndpointParameters(params.dataset);
            //send request
            rp.get({uri: getHTTPQuery('update', query, endpointParameters, outputFormat)}).then(function(res){
                if(enableLogs){
                    log.info('\n User: ' + user.accountName + ' \n Query: \n' + query);
                }
                callback(null, {category: params.category});
            }).catch(function (err) {
                console.log(err);
                if(enableLogs){
                    log.error('\n User: ' + user.accountName + '\n Status Code: \n' + err.statusCode + '\n Error Msg: \n' + err.message);
                }
                callback(null, {category: params.category});
            });
        }
    }
};
