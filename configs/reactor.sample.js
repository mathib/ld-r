// This file was modified from its original version by Mathias Bonduel on 30th of May 2018

export default {
    // config = scope + spec
    // scope is one the 15 combination of dataset, resource, property and object
    config: {
        //---------depth 1------------
        dataset: {
            'generic': {
                //resourceFocusType: ['https://w3id.org/bot#Zone','https://w3id.org/bot#Element','https://w3id.org/bot#Interface'],
                //only allow to view data -> disable edit
                readOnly: 1,
                //used for pagination in resource list
                maxNumberOfResourcesOnPage: 10,
                datasetReactor: ['Dataset'],
                datasetViewer: ['BasicResourceList'],
                // MB: moved to top level
                allowPropertyNew: 0,
                allowPropertyDelete: 0,
                
                //allowResourceClone: 1,
                allowResourceNew: 1,
            },
            //authentication graph
            'http://ld-r.org/users': {
                readOnly: 0,
                resourceFocusType: ['https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#User'],
                resourceLabelProperty: ['http://xmlns.com/foaf/0.1/accountName'],
                allowPropertyNew: 1
            },
            'http://ld-r.org/configurations': {
                readOnly: 0,
                allowResourceClone: 1,
                allowPropertyDelete: 1,
                allowResourceNew: 1,
                allowPropertyNew: 1,
                allowNewValue: 1,
                resourceFocusType: ['https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#ReactorConfig', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#ServerConfig','https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#FacetsPropertyConfig', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#FacetsConfig', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#EnvState'],
                datasetLabel: ['LD-R Configurations'],
                resourceLabelProperty: ['http://www.w3.org/2000/01/rdf-schema#label']
            },
            //MB
            'http://localhost:5820/demo-buildingTopology': {
                readOnly: 0,
                allowInlineConfig: 0, // MB: ???
                resourceFocusType: ['https://w3id.org/bot#Site','https://w3id.org/bot#Building','https://w3id.org/bot#Storey','https://w3id.org/bot#Space','https://w3id.org/bot#Element'],
                datasetLabel: ['Building topology graph using the BOT ontology'],
                //MB: uses (online) image for dataset visualiation while selecting
                //resourceImageProperty: ['http://xmlns.com/foaf/0.1/depiction'],
                allowPropertyNew: 1, // MB: new properties can be added from scratch
                allowPropertyDelete: 1,
                maxNumberOfResourcesOnPage: 30,
            }
        },
        resource: {
            'generic': {
                //if enabled, will categorize properties in different tabs based on property categories
                usePropertyCategories: 0,
                propertyCategories: [],
                //used when creating random resources // MB: dynamic config
                //dynamicResourceDomain: ['http://test.org'], // MB: dynamic config
                resourceReactor: ['Resource'],
                //allowResourceNew: 1, // MB: ???
                allowPropertyNew: 1,
                allowPropertyDelete: 1,
            },
            'https://w3id.org/bot#Zone':{
                usePropertyCategories: 1,
                propertyCategories: ['General properties', 'Regular BOT relations','bot:containsXXX relations'],
                treatAsResourceType: 1, // MB: the resources treated are all the ones of type bot:Zone
            },
            'https://w3id.org/bot#Element':{
                usePropertyCategories: 1,
                propertyCategories: ['General properties', 'Regular BOT relations','bot:containsXXX relations'],
                treatAsResourceType: 1, // MB: the resources treated are all the ones of type bot:Element
            },
            'https://w3id.org/bot#Interface':{
                usePropertyCategories: 1,
                propertyCategories: ['General properties', 'Regular BOT relations','bot:containsXXX relations'],
                treatAsResourceType: 1, // MB: the resources treated are all the ones of type bot:Element
            },
        },
        property: {
            'generic': {
                propertyReactor: ['IndividualProperty'],
                //following are object-based scope:
                objectReactor: ['IndividualObject'],
                //to view/edit individual object values
                objectIViewer: ['BasicIndividualView'],
                objectIEditor: ['BasicIndividualInput'],
                extendedOEditor: ['BasicIndividualDetailEdit'],
                extendedOViewer: ['BasicIndividualDetailView'],
                shortenURI: 0, // MB: shortens URI of object value // MB: dynamic config
                category: ['General properties'], // MB: default category for all properties
                allowNewValue: 1, // MB: might be necessary to override on lower levels for dynamic config
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#cloneOf': {
                readOnlyProperty: 1,
                allowPropertyDelete: 0
            },
            'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                allowPropertyDelete: 0,
                label: ['rdf:type'], // MB: replaces prop URI
                hint: ['The type of an instance refers to its class, which is described in an ontology'],
                objectIViewer: ['PrefixBasedView'], // MB: overrides 'BasicIndividualView'
                objectIEditor: ['PrefixBasedInput'], // MB: overrides 'BasicIndividualInput'
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataType': {
                allowPropertyDelete: 0,
                objectIViewer: ['PrefixBasedView'],
                objectIEditor: ['PrefixBasedInput']
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#createdBy' : {
                isHidden: 0,
                allowNewValue: 0,
                allowPropertyDelete: 0,
                readOnlyProperty: 1,
                objectIViewer: ['BasicLinkedIndividualView'], // MB: overrides 'BasicIndividualView'
                containerDatasetURI: ['http://ld-r.org/users']
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#createdOn' : {
                isHidden: 0,
                allowNewValue: 0,
                allowPropertyDelete: 0,
                readOnlyProperty: 1,
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resourceQuery' : {
                decodeURIComponent: 1
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#selection' : {
                decodeURIComponent: 1
            },
            //MB: next properties are for the native BOT app
            'http://www.w3.org/2000/01/rdf-schema#label': {
                label: ['rdfs:label'], // MB: replaces prop URI
                hint: ['A human readable label for the instance. It will be used by LD-R as name of the subject in the dataset'],
            },
            'http://www.w3.org/2000/01/rdf-schema#comment': {
                objectIEditor: ['BasicTextareaInput'],
                label: ['rdfs:comment'], // MB: replaces prop URI
                hint: ['A human readable description of the instance'],
            },
            'http://www.w3.org/2000/01/rdf-schema#seeAlso': {
                defaultValue: ['http://dbpedia.org/resource/Gravensteen'],
                objectIViewer: ['PrefixBasedView'],
                objectIEditor: ['DBpediaInput'], // MB: use dbpedia lookup service
                label: ['rdfs:seeAlso'], // MB: replaces prop URI
                hint: ['This property can be used to refer to external Linked Data URI\'s (e.g. from dbpedia)'],
            },
            'https://w3id.org/bot#hasBuilding': {
                label: ['bot:hasBuilding'], // MB: replaces prop URI
                hint: ['A site can have one or multiple buildings'], // MB: tooltip when hovering over the prop	
                defaultValue: ['https://mycompanydomain.org/project1/buildingA'],
                //shortenURI: 1,

                // MB: issues with aggregate viewer: no links to correct LD-R page to modify a certain building (error: econnrefused)
                //propertyReactor: ['AggregateProperty'],
                //objectReactor: ['AggregateObject'], 
                //objectAViewer: ['basicAggregateView'],
                //objectAEditor: ['basicAggregateEditor'],
                //objectAEditor: ['BasicAggregateInput'],

                category: ['Regular BOT relations'],
                //objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/bot#hasStorey': {
                label: ['bot:hasStorey'], // MB: replaces prop URI
                hint: ['A building can have one or multiple storeys'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/storeyA'],	
                category: ['Regular BOT relations'],
                //objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/bot#hasSpace': {
                label: ['bot:hasSpace'], // MB: replaces prop URI
                hint: ['A storey can have one or multiple spaces'], // MB: tooltip when hovering over the prop
                //defaultValue: ['https://mycompanydomain.org/project1/spaceA'],
                defaultValue: ['http://example.org/spaceXYZ'],
                category: ['Regular BOT relations'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/bot#adjacentZone': {
                label: ['bot:adjacentZone'], // MB: replaces prop URI
                hint: ['A certain zone can have one or more other adjacent zones'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/someZoneA'],
                category: ['Regular BOT relations'],	
                //objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/bot#interfaceOf': { // MB: domain is bot:Interface
                label: ['bot:interfaceOf'], // MB: replaces prop URI
                hint: ['A relationship between an interface and an adjacent zone or element'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/someZoneOrElement'],
                category: ['Regular BOT relations'],	
                //objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/bot#aggregates': {
                label: ['bot:aggregates'], // MB: replaces prop URI
                hint: ['A relation between an element and its subelements'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/subElementA'],	
                category: ['Regular BOT relations'],
                //objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/bot#hostsElement': {
                label: ['bot:hostsElement'], // MB: replaces prop URI
                hint: ['A relation between an element A and an element B that is hosted by element A'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/hostedElementA'],	
                category: ['Regular BOT relations'],
                //objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/bot#adjacentElement': {
                label: ['bot:adjacentElement'], // MB: replaces prop URI
                hint: ['A relation between an element A its neighboring element B'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/neighboringElementA'],
                category: ['Regular BOT relations'],	
                //objectIEditor: ['PrefixBasedInput'],
            },
            'http://xmlns.com/foaf/0.1/depiction': {
                label: ['foaf:depiction'], // MB: replaces prop URI
                hint: ['A depiction of a certain physical thing (e.g. an image)'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://farm2.staticflickr.com/1383/1464531407_9c6fe6d41a_b.jpg'],	
                objectIViewer: ['BasicImageView'],
            },
            'http://xmlns.com/foaf/0.1/isPrimaryTopicOf': {
                label: ['foaf:isPrimaryTopicOf'], // MB: replaces prop URI
                hint: ['A relation between a certain physical thing and a document describing it (e.g. a webpage or a text document)'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://gravensteen.stad.gent/'],	
                objectIViewer: ['PrefixBasedView'],
            },
            'https://w3id.org/bot#containsZone': {
                category: ['bot:containsXXX relations'],
                //objectIEditor: ['PrefixBasedInput'],
                defaultValue: ['Please use bot:hasBuilding/bot:hasStorey/bot:hasSpace as this is a generic superproperty that is typically inferred'],
                label: ['bot:containsZone'], // MB: replaces prop URI
                hint: ['A certain zone can contain one or more other zones - this property is always inferred so use its subproperties bot:hasBuilding/bot:hasStorey/bot:hasSpace instead'], // MB: tooltip when hovering over the prop	
            },
            'https://w3id.org/bot#containsElement': {
                category: ['bot:containsXXX relations'],
                //objectIEditor: ['PrefixBasedInput'],
                defaultValue: ['https://mycompanydomain.org/project1/elementA'],
                label: ['bot:containsElement'], // MB: replaces prop URI
                hint: ['A certain zone can contain one or more elements - use the most specific zone as possible'], // MB: tooltip when hovering over the prop	
            },
            'https://w3id.org/props#elevation_simple': {
                allowNewValue: 0,
                label: ['props:elevation_simple'], // MB: replaces prop URI
                hint: ['The start height of a storey in meter'], // MB: tooltip when hovering over the prop	
            },
            'https://w3id.org/props#name_simple': {
                allowNewValue: 0,
                label: ['props:name_simple'], // MB: replaces prop URI
                hint: ['The name of a storey or space'], // MB: tooltip when hovering over the prop	
            },
            'https://w3id.org/props#number_simple': {
                allowNewValue: 0,
                label: ['props:number_simple'], // MB: replaces prop URI
                hint: ['The number of a space'], // MB: tooltip when hovering over the prop	
            },
            // MB: does not yet exist as output of IFCtoLBD converter
            'https://w3id.org/props#location': {
                allowNewValue: 1,
                noFocus: 0,
                objectIViewer: ['BasicMapView'], // MB: triples should be in geosparql WKT and only WGS84 CRS is supported
                // example value: POINT(-77.03524 38.889468) => long lat
                //objectIEditor: [''], // MB: does not exist?
                label: ['props:location'], // MB: replaces prop URI
                hint: ['The geographic location (long-lat) of a bot:Zone or bot:Element in POINT (e.g. \"POINT(-77.03524 38.889468)\") or \"POLYGON(-77 38, -78 38, -78 37, -77 37)\"'], // MB: tooltip when hovering over the prop	
            },
        },
        //---------depth 2------------
 
        dataset_resource: {
            'http://ld-r.org/users': {
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#User': {
                    treatAsResourceType: 1,
                    resourceReactor: ['UserResource']
                }
            }
        },
        dataset_property: {
            //for configuration manager
            'http://ld-r.org/configurations': {
                'http://www.w3.org/2000/01/rdf-schema#label': {
                    allowPropertyDelete: 0,
                    label: ['Description'],
                    allowNewValue: 0
                },
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    isHidden: 0,
                    shortenURI: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope': {
                    hint: ['Determines the type of scope in LD-R'],
                    objectIEditor: ['BasicOptionInput'],
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
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset': {
                    shortenURI: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    objectIEditor: ['PrefixBasedInput']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    objectIEditor: ['PrefixBasedInput']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resourceFocusType': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    objectIEditor: ['PrefixBasedInput']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resourceLabelProperty': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    objectIEditor: ['PrefixBasedInput']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#config': {
                    label: ['Configuration'],
                    allowExtension: 1,
                    hasBlankNode: 1,
                    extensions: [
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#label',
                                instances: [{value: 'Label', valueType: 'literal'}]
                            },
                            config: {
                                label: ['Label']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                                instances: [{value: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#FacetsPropertyConfig', valueType: 'uri'}]
                            },
                            config: {
                                label: ['Type'],
                                objectIViewer: ['PrefixBasedView'],
                                objectIEditor: ['PrefixBasedInput']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property',
                                instances: [{value: 'http://example.com/prop1', valueType: 'uri'}]
                            },
                            config: {
                                label: ['Property'],
                                objectIViewer: ['PrefixBasedView'],
                                objectIEditor: ['PrefixBasedInput']
                            }
                        }
                    ]
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#constraint': {
                    label: ['Constraint'],
                    allowExtension: 1,
                    hasBlankNode: 1,
                    extensions: [
                        {
                            spec: {
                                propertyURI: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                                instances: [{value: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#Constraint', valueType: 'uri'}]
                            },
                            config: {
                                label: ['Type'],
                                objectIViewer: ['PrefixBasedView'],
                                objectIEditor: ['PrefixBasedInput']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property',
                                instances: [{value: 'http://exampleProperty.com', valueType: 'uri'}]
                            },
                            config: {
                                label: ['Property'],
                                objectIViewer: ['PrefixBasedView'],
                                objectIEditor: ['PrefixBasedInput']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#object',
                                instances: [{value: 'value', valueType: 'literal'}]
                            },
                            config: {
                                label: ['Object Value']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#enabled',
                                instances: [{value: '1', valueType: 'literal'}]
                            },
                            config: {
                                label: ['Enabled'],
                                objectIViewer:['ToggleView'],
                                objectIEditor:['ToggleEdit'],
                                onValue: ['1'],
                                offValue: ['0'],
                            }
                        },
                    ]
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#list': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    objectIEditor: ['PrefixBasedInput']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#treatAsResourceType': {
                    label: ['Treat as Resource Type'],
                    hint: ['If set to true, will consider resource URI as type URI for resource'],
                    objectIViewer:['ToggleView'],
                    objectIEditor:['ToggleEdit'],
                    onValue: ['1'],
                    offValue: ['0'],
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#useReasoning': {
                    label: ['Use Reasoning?'],
                    objectIViewer:['ToggleView'],
                    objectIEditor:['ToggleEdit'],
                    onValue: ['1'],
                    offValue: ['0'],
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#host': {
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#port': {
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#path': {
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#graphName': {
                    label: ['Graph Name'],
                    hint: ['use "default" to consider all graph names'],
                    allowNewValue: 0
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#endpointType': {
                    label: ['Endpoint Type'],
                    allowNewValue: 0,
                    objectIEditor: ['BasicOptionInput'],
                    objectIViewer: ['BasicOptionView'],
                    allowUserDefinedValue: 1,
                    options: [
                        {label: 'ClioPatria', value: 'cliopatria'},
                        {label: 'Virtuoso', value: 'virtuoso'},
                        {label: 'Stardog', value: 'stardog'},
                        {label: 'Blazegraph', value: 'blazegraph'},
                        {label: 'Sesame', value: 'sesame'}
                    ]
                }
            },
            //for user page
            'http://ld-r.org/users': {
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    //isHidden: 1 // MB: unhidden
                },
                'http://xmlns.com/foaf/0.1/accountName': {
                    label: ['Username'],
                    readOnlyProperty: 1
                },
                'http://xmlns.com/foaf/0.1/member': {
                    label: ['Member of'],
                    objectIEditor: ['BasicOptionInput'],
                    objectIViewer: ['BasicOptionView'],
                    options: [
                        {label: 'Normal User', value: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#NormalUser'},
                        {label: 'Special User', value: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#SpecialUser'}
                    ],
                    allowNewValue: 1
                },
                'http://xmlns.com/foaf/0.1/firstName': {
                    label: ['First Name'],
                    allowNewValue: 0,
                    allowPropertyDelete: 0,
                },
                'http://xmlns.com/foaf/0.1/lastName': {
                    label: ['Last Name'],
                    allowNewValue: 0,
                    allowPropertyDelete: 0,
                },
                'http://purl.org/dc/terms/created': {
                    label: ['Created at'],
                    readOnlyProperty: 1
                },
                'http://xmlns.com/foaf/0.1/mbox': {
                    label: ['Email Address'],
                    readOnlyProperty: 1
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#password': {
                    label: ['Password'],
                    objectIViewer: ['PasswordView'],
                    objectIEditor: ['PasswordInput'],
                    allowNewValue: 0,
                    allowPropertyDelete: 0,
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#editorOf': {
                    label: ['Editor of Scope'],
                    allowNewValue: 1,
                    allowExtension: 1,
                    hasBlankNode: 1,
                    extensions: [
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope',
                                instances: [{value: 'D', valueType: 'literal'}]
                            },
                            config: {
                                hint: ['Scope of access: e.g. D, DP, R, RP, P , etc.'],
                                label: ['Scope'],
                                objectIEditor: ['BasicOptionInput'],
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
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset',
                                instances: [{value: 'http://exampleDataset.org', valueType: 'uri'}]
                            },
                            config: {
                                hint: ['Dataset URI under which the property is exposed.'],
                                label: ['Dataset']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource',
                                instances: [{value: 'http://exampleResource.org', valueType: 'uri'}]
                            },
                            config: {
                                hint: ['Resource URI under which the property is exposed.'],
                                label: ['Resource'],
                                objectIEditor: ['PrefixBasedInput'],
                                objectIViewer: ['PrefixBasedView']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property',
                                instances: [{value: 'http://exampleProperty.org', valueType: 'uri'}]
                            },
                            config: {
                                hint: ['Property URI'],
                                label: ['Property'],
                                objectIEditor: ['PrefixBasedInput'],
                                objectIViewer: ['PrefixBasedView']
                            }
                        }
                    ]
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#viewerOf': {
                    label: ['Viewer of Scope'],
                    allowNewValue: 1,
                    allowExtension: 1,
                    hasBlankNode: 1,
                    extensions: [
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope',
                                instances: [{value: 'D', valueType: 'literal'}]
                            },
                            config: {
                                hint: ['Scope of access: e.g. D, DP, R, RP, P , etc.'],
                                label: ['Scope'],
                                objectIEditor: ['BasicOptionInput'],
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
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset',
                                instances: [{value: 'http://exampleDataset.org', valueType: 'uri'}]
                            },
                            config: {
                                hint: ['Dataset URI under which the property is exposed.'],
                                label: ['Dataset']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource',
                                instances: [{value: 'http://exampleResource.org', valueType: 'uri'}]
                            },
                            config: {
                                hint: ['Resource URI under which the property is exposed.'],
                                label: ['Resource'],
                                objectIEditor: ['PrefixBasedInput'],
                                objectIViewer: ['PrefixBasedView']
                            }
                        },
                        {
                            spec: {
                                propertyURI: 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property',
                                instances: [{value: 'http://exampleProperty.org', valueType: 'uri'}]
                            },
                            config: {
                                hint: ['Property URI'],
                                label: ['Property'],
                                objectIEditor: ['PrefixBasedInput'],
                                objectIViewer: ['PrefixBasedView']
                            }
                        }
                    ]
                },
                'http://xmlns.com/foaf/0.1/organization': {
                    label: ['Organization'],
                    allowNewValue: 1,
                    objectIViewer: ['BasicDBpediaView'],
                    objectIEditor: ['DBpediaInput']
                }
            }
        },
        resource_property: {
            'https://w3id.org/bot#Element': {
                treatAsResourceType: 1, // MB: the resources treated are all the ones of type bot:Element
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    //allowPropertyDelete: 0,
                    //label: ['rdf:type'], // MB: replaces prop URI
                    //hint: ['The type of an instance refers to its class, which is described in an ontology'],
                    //objectIViewer: ['PrefixBasedView'], // MB: overrides 'BasicIndividualView'
                    //objectIEditor: ['PrefixBasedInput'], // MB: overrides 'BasicIndividualInput'
                    objectIEditor: ['BasicOptionInput'],
                    options: [ // MB: alternative: use autocomplete list => classes
                        {label: 'product:Wall', value: 'https://w3id.org/product/Wall'},
                        {label: 'product:Window', value: 'https://w3id.org/product/Window'},
                        {label: 'product:Door', value: 'https://w3id.org/product/Door'},
                        {label: 'product:Beam', value: 'https://w3id.org/product/Beam'},
                        {label: 'product:Chimney', value: 'https://w3id.org/product/Chimney'},
                        {label: 'product:Heater', value: 'https://w3id.org/product/Heater'},
                        {label: 'product:Column', value: 'https://w3id.org/product/Column'},
                        {label: 'product:CurtainWall', value: 'https://w3id.org/product/CurtainWall'},
                        {label: 'product:Floor', value: 'https://w3id.org/product/Floor'},
                        {label: 'product:Slab', value: 'https://w3id.org/product/Slab'},
                        {label: 'product:Railling', value: 'https://w3id.org/product/Railing'},
                        {label: 'product:Ramp', value: 'https://w3id.org/product/Ramp'},
                        {label: 'product:Roof', value: 'https://w3id.org/product/Roof'},
                        {label: 'product:ShadingDevice', value: 'https://w3id.org/product/ShadingDevice'},
                        {label: 'product:Stair', value: 'https://w3id.org/product/Stair'},
                        {label: 'product:Chair', value: 'https://w3id.org/product/Chair'},
                        {label: 'product:Table', value: 'https://w3id.org/product/Table'},
                        {label: 'product:Couch', value: 'https://w3id.org/product/Couch'},
                        {label: 'product:Closet', value: 'https://w3id.org/product/Closet'},
                    ],
                    allowUserDefinedValue: 1,                    
                }
            }
        },
        //---------depth 3------------
        dataset_resource_property: {

        }
    }
};
