// This file was modified from its original version by Mathias Bonduel on 30th of May 2018

export default {
    facets: {
        'generic': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
            ],
            config: {

            }
        },
        //Configuration Manager: change the graph name if you use another name in your general.js config
        'http://ld-r.org/configurations': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#endpointType',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#createdBy->[http://ld-r.org/users]http://xmlns.com/foaf/0.1/accountName'
            ],
            config: {
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    objectBrowser: ['TagListBrowser'],
                    position: 1
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset': {
                    shortenURI: 0,
                    position: 3
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    position: 4
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    position: 5
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope': {
                    objectIViewer: ['BasicOptionView'],
                    options: [
                        {label: 'Dataset', value: 'D'},
                        {label: 'Resource', value: 'R'},
                        {label: 'Property', value: 'P'},
                        {label: 'Dataset-Resource', value: 'DR'},
                        {label: 'Dataset-Property', value: 'DP'},
                        {label: 'Resource-Property', value: 'RP'},
                        {label: 'Dataset-Resource-Property', value: 'DRP'},
                    ],
                    position: 2
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#endpointType': {
                    position: 6
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#createdBy->[http://ld-r.org/users]http://xmlns.com/foaf/0.1/accountName': {
                    label: ['Creator'],
                    position: 7
                }
            }
        },
        //MB: added faceted search
        'http://localhost:5820/demo-buildingTopology': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type','https://w3id.org/props#elevation_simple', 'https://w3id.org/props#name_simple', 'https://w3id.org/props#number_simple','http://xmlns.com/foaf/0.1/isPrimaryTopicOf','http://xmlns.com/foaf/0.1/depiction',
                'https://w3id.org/bot#hasBuilding', 'https://w3id.org/bot#hasStorey', 'https://w3id.org/bot#hasSpace', 'https://w3id.org/bot#adjacentZone','https://w3id.org/bot#adjacentElement','https://w3id.org/bot#interfaceOf','https://w3id.org/bot#aggregates','https://w3id.org/bot#hostsElement',
                'https://w3id.org/bot#containsZone', 'https://w3id.org/bot#containsElement',
                'https://w3id.org/bot#containsElement->http://www.w3.org/1999/02/22-rdf-syntax-ns#type','https://w3id.org/bot#adjacentElement->http://www.w3.org/1999/02/22-rdf-syntax-ns#type','https://w3id.org/bot#containsZone->http://www.w3.org/1999/02/22-rdf-syntax-ns#type','https://w3id.org/bot#adjacentZone->http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                //'http://www.w3.org/2000/01/rdf-schema#seeAlso->[http://dbpedia.org/sparql>>default]http://purl.org/linguistics/gold/hypernym',
            ],
            //displayQueries: 1,
            config: {
                // MB: category 1
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type':{
                    category: ['General properties'],
                    objectBrowser: ['TagListBrowser'],
                    //objectIViewer: ['PrefixBasedView'],
                    //position: 1, MB: has no effect in categories
                    label: ['rdf:type'],
                },
                'https://w3id.org/props#elevation_simple': {
                    category: ['General properties'],
                    label: ['props:elevation_simple'],
                },
                'https://w3id.org/props#name_simple': {
                    category: ['General properties'],
                    label: ['props:name_simple'],
                },
                'https://w3id.org/props#number_simple': {
                    category: ['General properties'],
                    label: ['props:number_simple'],
                },
                'http://xmlns.com/foaf/0.1/isPrimaryTopicOf': {
                    category: ['General properties'],
                    label: ['foaf:isPrimaryTopicOf'],
                },
                'http://xmlns.com/foaf/0.1/depiction': {
                    category: ['General properties'],
                    label: ['foaf:depiction'],
                    objectIViewer: ['BasicImageView'],
                },
                // category 2
                'https://w3id.org/bot#hasBuilding': {
                    category: ['Regular BOT relations'],
                    label: ['bot:hasBuilding'],
                },
                'https://w3id.org/bot#hasStorey': {
                    category: ['Regular BOT relations'],
                    label: ['bot:hasStorey'],
                },
                'https://w3id.org/bot#hasSpace': {
                    category: ['Regular BOT relations'],
                    label: ['bot:hasSpace'],
                }, 
                'https://w3id.org/bot#adjacentZone': {
                    category: ['Regular BOT relations'],
                    label: ['bot:adjacentZone'],
                },
                'https://w3id.org/bot#adjacentElement': {
                    category: ['Regular BOT relations'],
                    label: ['bot:adjacentElement'],
                    //pivotDataset: ['http://localhost:5820/annex/bot-dev/sparql/query2']
                },
                'https://w3id.org/bot#interfaceOf': {
                    category: ['Regular BOT relations'],
                    label: ['bot:interfaceOf'],
                },
                'https://w3id.org/bot#aggregates': {
                    category: ['Regular BOT relations'],
                    label: ['bot:aggregates'],
                },
                'https://w3id.org/bot#hostsElement': {
                    category: ['Regular BOT relations'],
                    label: ['bot:hostsElement'],
                },
                //MB: category 3
                'https://w3id.org/bot#containsZone': {
                    category: ['bot:containsXXX relations'],
                    label: ['bot:containsZone'],
                },  
                'https://w3id.org/bot#containsElement': {
                    category: ['bot:containsXXX relations'],
                    label: ['bot:containsElement'],
                }, 
                //MB: category 4 => property chains
                'https://w3id.org/bot#containsElement->http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    category: ['Property chains'],
                    objectBrowser: ['TagListBrowser'],
                    //objectIViewer: ['PrefixBasedView'],
                    label: ['bot:containsElement => rdf:type'],
                },
                'https://w3id.org/bot#adjacentElement->http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    category: ['Property chains'],
                    objectBrowser: ['TagListBrowser'],
                    //objectIViewer: ['PrefixBasedView'],
                    label: ['bot:adjacentElement => rdf:type'],
                },
                'https://w3id.org/bot#adjacentZone->http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    category: ['Property chains'],
                    objectBrowser: ['TagListBrowser'],
                    //objectIViewer: ['PrefixBasedView'],
                    label: ['bot:adjacentZone => rdf:type'],
                },
                'https://w3id.org/bot#containsZone->http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    category: ['Property chains'],
                    objectBrowser: ['TagListBrowser'],
                    //objectIViewer: ['PrefixBasedView'],
                    label: ['bot:containsZone => rdf:type'],
                },
                //
                                   
            }
        }
    }
};
