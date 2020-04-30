// This file was modified from its original version by Mathias Bonduel on 30th of April 2020

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
            'http://ld-r.org/mappings': {
                readOnly: 0,
                resourceFocusType: ['https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#CSVMapping'],
                datasetLabel: ['LD-R Mapping Configurations'],
                resourceLabelProperty: ['http://www.w3.org/2000/01/rdf-schema#label']
            },
            //example reactor config
            'http://dbpedia.org/sparql': {
                readOnly: 1,
                allowInlineConfig: 0,
                resourceFocusType: ['http://dbpedia.org/ontology/University'],
                resourceLabelProperty: ['http://xmlns.com/foaf/0.1/name'],
                datasetLabel: ['DBpedia Universities']
            },
            //MB
            'https://modeling.building.org/mainData': {
                readOnly: 0,
                allowInlineConfig: 0, // MB: ???
                resourceFocusType: ['https://w3id.org/bot#Zone','https://w3id.org/bot#Element','https://w3id.org/bot#Interface','https://w3id.org/dot#Damage','https://w3id.org/dot#Causation','https://w3id.org/dot#Documentation','https://w3id.org/dot#Inspection','https://w3id.org/dot#Inspector','https://w3id.org/omg#Geometry','https://w3id.org/omg#GeometryState','https://w3id.org/fog#ReferencedContent'], // MB: lef out dot:DamagePattern and GOM
                datasetLabel: ['my building described using Linked Building Data'],
                //MB: uses (online) image for dataset visualiation while selecting
                //resourceImageProperty: ['http://xmlns.com/foaf/0.1/depiction'],
                allowPropertyNew: 1, // MB: new properties can be added from scratch
                allowPropertyDelete: 1,
                maxNumberOfResourcesOnPage: 30,
                resourceLabelProperty: ['http://none'], // MB: trick to always show full URI when focusing on a resource
                resourceLanguageTag: ['en'], // MB: show English label in resource list
            },
            // MB: dataset for extending the MDCS taxonomy (MDCS stored in the named graph https://mynamedgraph/mdcs)
            'https://mynamedgraph/mdcs': {
                readOnly: 0,
                allowInlineConfig: 0, // MB: ???
                resourceFocusType: ['http://www.w3.org/2002/07/owl#Class'],
                datasetLabel: ['LD-R dataset to extend the MDCS taxonomy'],
                allowPropertyNew: 1, // MB: new properties can be added from scratch
                allowPropertyDelete: 1,
                maxNumberOfResourcesOnPage: 30,
                resourceLabelProperty: ['http://none'], // MB: trick to always show full URI when focusing on a resource
                resourceLanguageTag: ['en'], // MB: show English label in resource list
                templateResource: ['https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration'], // MB: example resource for MDCS
            },
            // MB: dataset for extending the BEO taxonomy (BEO stored in the named graph https://mynamedgraph/beo)
            'https://mynamedgraph/beo': {
                readOnly: 0,
                allowInlineConfig: 0, // MB: ???
                resourceFocusType: ['http://www.w3.org/2002/07/owl#Class'],
                datasetLabel: ['LD-R dataset to extend the BEO taxonomy'],
                allowPropertyNew: 1, // MB: new properties can be added from scratch
                allowPropertyDelete: 1,
                maxNumberOfResourcesOnPage: 30,
                resourceLabelProperty: ['http://none'], // MB: trick to always show full URI when focusing on a resource
                resourceLanguageTag: ['en'], // MB: show English label in resource list
                templateResource: ['http://pi.pauwel.be/voc/buildingelement#Wall'], // MB: example resource for BEO
            },
        },
        resource: {
            'generic': {
                //if enabled, will categorize properties in different tabs based on property categories
                usePropertyCategories: 0,
                propertyCategories: [],
                //used when creating random resources // MB: dynamic config
                //dynamicResourceDomain: ['http://test.org'], // MB: dynamic config
                resourceReactor: ['Resource'],
                // allowResourceNew: 0, // MB: doesn't change anything if on or off...
                allowPropertyNew: 1,
                allowPropertyDelete: 1,
            },
            // MB: classes for MDCS and BEO editing dataset
            'http://www.w3.org/2002/07/owl#Class': {
                treatAsResourceType: 1,
            },
            // MB: classes for main dataset
            'https://w3id.org/bot#Zone':{
                usePropertyCategories: 1,
                propertyCategories: ['General properties','Regular BOT relations','bot:containsXXX relations','Regular DOT relations','OMG-FOG geometries'],
                treatAsResourceType: 1, // MB: the resources treated are all the ones of type bot:Zone
            },
            'https://w3id.org/bot#Element':{
                usePropertyCategories: 1,
                propertyCategories: ['General properties','Regular BOT relations','bot:containsXXX relations','Regular DOT relations','OMG-FOG geometries'],
                treatAsResourceType: 1, // MB: the resources treated are all the ones of type bot:Element
            },
            'https://w3id.org/bot#Interface':{
                usePropertyCategories: 1,
                propertyCategories: ['General properties','Regular BOT relations','OMG-FOG geometries'],
                treatAsResourceType: 1, // MB: the resources treated are all the ones of type bot:Interface
            },
            'https://w3id.org/dot#Damage':{
                usePropertyCategories: 1,
                propertyCategories: ['General properties','Regular DOT relations','OMG-FOG geometries'],
                treatAsResourceType: 1, // MB: the resources treated are all the ones of type bot:Interface
            },
            'https://w3id.org/dot#Causation':{
                usePropertyCategories: 1,
                propertyCategories: ['General properties'],
                treatAsResourceType: 1, // MB: the resources treated are all the ones of type bot:Interface
            },
            'https://w3id.org/dot#Documentation':{
                usePropertyCategories: 1,
                propertyCategories: ['General properties'],
                treatAsResourceType: 1, // MB: the resources treated are all the ones of type bot:Interface
            },
            'https://w3id.org/dot#Inspection':{
                usePropertyCategories: 1,
                propertyCategories: ['General properties'],
                treatAsResourceType: 1, // MB: the resources treated are all the ones of type bot:Interface
            },
            'https://w3id.org/dot#Inspector':{
                usePropertyCategories: 1,
                propertyCategories: ['General properties'],
                treatAsResourceType: 1, // MB: the resources treated are all the ones of type bot:Interface
            },
            'https://w3id.org/omg#Geometry':{
                usePropertyCategories: 1,
                propertyCategories: ['General properties','OMG-FOG geometries'],
                treatAsResourceType: 1, // MB: the resources treated are all the ones of type bot:Interface
            },
            'https://w3id.org/omg#GeometryState':{
                usePropertyCategories: 1,
                propertyCategories: ['General properties','OMG-FOG geometries'],
                treatAsResourceType: 1, // MB: the resources treated are all the ones of type bot:Interface
            },
            'https://w3id.org/fog#ReferencedContent':{
                usePropertyCategories: 1,
                propertyCategories: ['General properties','OMG-FOG geometries'],
                treatAsResourceType: 1, // MB: the resources treated are all the ones of type bot:Interface
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
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#password': {
                allowNewValue: 0,
                label: ['Password'],
                objectIViewer: ['PasswordView'],
                objectIEditor: ['PasswordInput'],
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#cloneOf': {
                readOnlyProperty: 1,
                allowPropertyDelete: 0,
            },
            'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                allowPropertyDelete: 0,
                label: ['rdf:type'], // MB: replaces prop URI
                hint: ['The type of an instance refers to its class, which is described in an ontology'],
                objectIViewer: ['PrefixBasedView'], // MB: overrides 'BasicIndividualView' to allow options (dropdown)
                objectIEditor: ['PrefixBasedInput'], // MB: overrides 'BasicIndividualInput' to allow options (dropdown)
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataType': {
                allowPropertyDelete: 0,
                objectIViewer: ['PrefixBasedView'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#createdBy' : {
                isHidden: 0,
                readOnlyProperty: 1,
                allowPropertyDelete: 0,
                allowNewValue: 0,
                objectIViewer: ['BasicLinkedIndividualView'], // MB: overrides 'BasicIndividualView'
                containerDatasetURI: ['http://ld-r.org/users'],
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#createdOn' : {
                isHidden: 0,
                readOnlyProperty: 1,
                allowPropertyDelete: 0,
                allowNewValue: 0,
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resourceQuery' : {
                decodeURIComponent: 1,
            },
            'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#selection' : {
                decodeURIComponent: 1,
            },
            //MB: next properties are for the native BOT app
            'http://www.w3.org/2002/07/owl#sameAs': { // MB: added as some inference engines infer that a resource is identical to itself
                isHidden: 1,
            },
            'http://purl.org/dc/terms/description': { // MB: inferred as superproperty of dot:descriptionContent
                isHidden: 1,
            },
            'http://www.w3.org/2000/01/rdf-schema#label': {
                allowNewValue: 0, // MB: max one value
                label: ['rdfs:label'], // MB: replaces prop URI
                hint: ['A human readable label for the instance. It will be used by LD-R as name of the subject in the dataset'],
                objectIViewer: ['BasicHTMLContentView'], // MB: alternative MarkdownView => no LD-R resource (but single http becomes link)
                objectIEditor: ['BasicTextareaInput'],
            },
            'http://www.w3.org/2000/01/rdf-schema#comment': {
                allowNewValue: 0, // MB: max one value
                label: ['rdfs:comment'], // MB: replaces prop URI
                hint: ['A human readable description of the instance, longer than an rdfs:label'],
                objectIViewer: ['BasicHTMLContentView'], // MB: alternative MarkdownView => no LD-R resource (but single http becomes link)
                objectIEditor: ['BasicTextareaInput'],
            },
            'http://www.w3.org/2000/01/rdf-schema#seeAlso': {
                label: ['rdfs:seeAlso'], // MB: replaces prop URI
                hint: ['This property can be used to refer to external Linked Data URI\'s (e.g. from dbpedia) but also local or online documents.'],
                defaultValue: ['http://dbpedia.org/resource/Gravensteen'],
                objectIViewer: ['PrefixBasedView'],
                objectIEditor: ['DBpediaInput'], // MB: use dbpedia lookup service
            },
            // MB: only for BEO and MDCS editing
            'http://www.w3.org/2000/01/rdf-schema#subClassOf':{
                label: ['rdfs:subClassOf'],
                hint: ['Use this property to refer back to an existing BEO/MDCS class that this class extends'],
                allowPropertyDelete: 0, // MB: inferred so cannot be deleted 
                allowNewValue: 0, // MB: inferred so should not be extended manually
            },
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // BOT properties
            'https://w3id.org/bot#hasBuilding': {
                label: ['bot:hasBuilding'], // MB: replaces prop URI
                hint: ['A site can have one or multiple buildings'], // MB: tooltip when hovering over the prop	
                defaultValue: ['https://mycompanydomain.org/project1/buildingA'],
                //shortenURI: 1,

                // multi edit and delete
                // objectAEditor: ['BasicAggregateInput'], // no example => others BasicIndividualInput, PrefixBasedInput (probably not yet implemented)
                // //propertyReactor: ['AggregateProperty'], // in http://ld-r.org/docs/configReactors.html
                // objectReactor: ['AggregateObject'], // in autocomplete
                // objectAViewer: ['BasicAggregateView'], // in autocomplete + http://ld-r.org/docs/configReactors.html => not possible to navigate to element (https://github.com/ali1k/ld-r/issues/34)

                category: ['Regular BOT relations'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/bot#hasStorey': {
                label: ['bot:hasStorey'], // MB: replaces prop URI
                hint: ['A building can have one or multiple storeys'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/storeyA'],	
                category: ['Regular BOT relations'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/bot#hasSpace': {
                label: ['bot:hasSpace'], // MB: replaces prop URI
                hint: ['A storey can have one or multiple spaces'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/spaceXYZ'],
                category: ['Regular BOT relations'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/bot#adjacentZone': {
                label: ['bot:adjacentZone'], // MB: replaces prop URI
                hint: ['A certain zone can have one or more other adjacent zones'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/someZoneA'],
                category: ['Regular BOT relations'],	
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/bot#containsZone': {
                allowPropertyDelete: 0, // MB: inferred so cannot be deleted 
                allowNewValue: 0, // MB: inferred so should not be extended manually
                label: ['bot:containsZone'], // MB: replaces prop URI
                hint: ['A certain zone can contain one or more other zones - this property is always inferred so use its subproperties bot:hasBuilding/bot:hasStorey/bot:hasSpace instead'], // MB: tooltip when hovering over the prop	
                defaultValue: ['Please use bot:hasBuilding/bot:hasStorey/bot:hasSpace as this is a generic superproperty that is typically inferred'],
                category: ['bot:containsXXX relations'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/bot#intersectsZone': {
                label: ['bot:intersectsZone'], // MB: replaces prop URI
                hint: ['A certain zone can intersect with another zone if it is not entirely contained by the other zone (e.g. a stairwell space can intersect with multiple storeys)'], // MB: tooltip when hovering over the prop	
                defaultValue: ['https://mycompanydomain.org/project1/someZoneA'],
                category: ['Regular BOT relations'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/bot#hasElement': {
                allowPropertyDelete: 0, // MB: inferred so cannot be deleted 
                allowNewValue: 0, // MB: inferred so should not be extended manually
                label: ['bot:hasElement'], // MB: replaces prop URI
                hint: ['A certain zone can have one or more building elements - this property is always inferred so use its subproperties bot:containsElement/bot:adjacentElement/bot:intersectingElement instead'], // MB: tooltip when hovering over the prop	
                defaultValue: ['Please use bot:containsElement/bot:adjacentElement/bot:intersectingElement as this is a generic superproperty that is typically inferred'],
                category: ['bot:containsXXX relations'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/bot#adjacentElement': {
                label: ['bot:adjacentElement'], // MB: replaces prop URI
                hint: ['A relation between an element A its neighboring element B'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/neighboringElementA'],
                category: ['Regular BOT relations'],	
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/bot#containsElement': {
                label: ['bot:containsElement'], // MB: replaces prop URI
                hint: ['A certain zone can contain one or more elements - use the most specific zone as possible'], // MB: tooltip when hovering over the prop	
                defaultValue: ['https://mycompanydomain.org/project1/elementA'],
                category: ['bot:containsXXX relations'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/bot#intersectingElement': {
                label: ['bot:intersectingElement'], // MB: replaces prop URI
                hint: ['An zone can intersect with an element if the element is not entirely contained by the zone (e.g. storey zones are intersected by a stair element)'], // MB: tooltip when hovering over the prop	
                defaultValue: ['https://mycompanydomain.org/project1/elementA'],
                category: ['Regular BOT relations'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/bot#hasSubElement': {
                label: ['bot:hasSubElement'], // MB: replaces prop URI
                hint: ['A relation between an element and its subelement or an element A and another element B hosted by A'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/subElementA'],	
                category: ['Regular BOT relations'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/bot#interfaceOf': { // MB: domain is bot:Interface
                label: ['bot:interfaceOf'], // MB: replaces prop URI
                hint: ['A relationship between an interface and an adjacent zone or element'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/someZoneOrElement'],
                category: ['Regular BOT relations'],	
                objectIEditor: ['PrefixBasedInput'],
            },
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // other properties
            'http://www.arpenteur.org/ontology/Arpenteur.owl#hasFullFileName': { // the link to the online content of an arp:Photograph
                label: ['arp:hasFullFileName (photo)'], // MB: replaces prop URI
                hint: ['the actual photograph of an arp:Photograph instance'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://farm2.staticflickr.com/1383/1464531407_9c6fe6d41a_b.jpg'],	
                objectIViewer: ['BasicImageView'],
            },
            'http://purl.org/vocab/vann/example': { // the link to the online content of an arp:Photograph
                label: ['vann:example'], // MB: replaces prop URI
                hint: ['an example related to the class or property'], // MB: tooltip when hovering over the prop
                hasBlankNode: 0,
                autoLoadDetails: 0,
            },
            // 'http://xmlns.com/foaf/0.1/isPrimaryTopicOf': {
            //     label: ['foaf:isPrimaryTopicOf'], // MB: replaces prop URI
            //     hint: ['A relation between a certain physical thing and a document describing it (e.g. a webpage or a text document)'], // MB: tooltip when hovering over the prop
            //     defaultValue: ['https://gravensteen.stad.gent/'],	
            //     objectIViewer: ['PrefixBasedView'],
            // },
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // PROPS properties
            'https://w3id.org/props#storeyElevation': {
                allowNewValue: 0, // MB: max one value
                label: ['props:storeyElevation'], // MB: replaces prop URI
                hint: ['The start height of a storey in meter'], // MB: tooltip when hovering over the prop	
            },
            'https://w3id.org/props#storeyNumber': {
                allowNewValue: 0, // MB: max one value
                label: ['props:storeyNumber'], // MB: replaces prop URI
                hint: ['The number of a storey (zero is for ground floor)'], // MB: tooltip when hovering over the prop	
            },
            'https://w3id.org/props#spaceNumber': {
                allowNewValue: 0, // MB: max one value
                label: ['props:spaceNumber'], // MB: replaces prop URI
                hint: ['The number of a space'], // MB: tooltip when hovering over the prop	
            },
            'https://w3id.org/props#hasMaterial': {
                allowNewValue: 1, // MB: max one value
                label: ['props:hasMaterial'], // MB: replaces prop URI
                hint: ['A material used in the building element'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://w3id.org/props#mat-wood'], // MB: individuals
                objectIEditor: ['BasicOptionInput'], // prefixes cannot be used for user defined value
                objectIViewer: ['BasicOptionView'],
                allowUserDefinedValue: 1,
                options: [ // MB: copy paste auto generated list below (most specific BEO classes) // currently loosely inspired by https://wisib.de/ontologie/bmat
                    { label: 'props:mat-wood' , value: 'https://w3id.org/props#mat-wood' },
                    { label: 'props:mat-naturalStone' , value: 'https://w3id.org/props#mat-naturalStone' },
                    { label: 'props:mat-mortar' , value: 'https://w3id.org/props#mat-mortar' },
                    { label: 'props:mat-bakedClay' , value: 'https://w3id.org/props#mat-bakedClay' }, // MB/ roof tiles and bricks
                    { label: 'props:mat-slate' , value: 'https://w3id.org/props#mat-slate' }, // MB/ roof tiles/shingles
                    { label: 'props:mat-reinforcedConcrete' , value: 'https://w3id.org/props#mat-reinforcedConcrete' },
                    { label: 'props:mat-unreinforcedConcrete' , value: 'https://w3id.org/props#mat-unreinforcedConcrete' },
                    { label: 'props:mat-aluminium' , value: 'https://w3id.org/props#mat-aluminium' },
                    { label: 'props:mat-copper' , value: 'https://w3id.org/props#mat-copper' },
                    { label: 'props:mat-steel' , value: 'https://w3id.org/props#mat-steel' },
                    { label: 'props:mat-lead' , value: 'https://w3id.org/props#mat-lead' },
                    { label: 'props:mat-plaster' , value: 'https://w3id.org/props#mat-plaster' },
                    { label: 'props:mat-glass' , value: 'https://w3id.org/props#mat-glass' },
                    { label: 'props:mat-plastic' , value: 'https://w3id.org/props#mat-plastic' },
                    { label: 'props:mat-asphalt' , value: 'https://w3id.org/props#mat-asphalt' },
                ],
            },
            // MB: does not yet exist as output of IFCtoLBD converter
            // 'https://w3id.org/props#location': {
            //     allowNewValue: 1,
            //     noFocus: 0,
            //     objectIViewer: ['BasicMapView'], // MB: triples should be in geosparql WKT and only WGS84 CRS is supported
            //     // example value: POINT(-77.03524 38.889468) => long lat
            //     //objectIEditor: [''], // MB: does not exist?
            //     label: ['props:location'], // MB: replaces prop URI
            //     hint: ['The geographic location (long-lat) of a bot:Zone or bot:Element in POINT (e.g. \"POINT(-77.03524 38.889468)\") or \"POLYGON(-77 38, -78 38, -78 37, -77 37)\"'], // MB: tooltip when hovering over the prop	
            // },
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // DOT properties
            'https://w3id.org/dot#hasDamageArea': {
                label: ['dot:hasDamageArea'], // MB: replaces prop URI
                hint: ['A damage area (e.g. mold) connected to a building element or zone'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/damageArea1'],	
                category: ['Regular DOT relations'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/dot#hasDamageElement': {
                label: ['dot:hasDamageElement'], // MB: replaces prop URI
                hint: ['A damage element (e.g. crack) connected to a building element or zone'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/damageElement1'],	
                category: ['Regular DOT relations'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/dot#hasDamage': {
                allowPropertyDelete: 0, // MB: inferred so cannot be deleted 
                allowNewValue: 0, // MB: inferred so should not be extended manually
                label: ['dot:hasDamage'], // MB: replaces prop URI
                hint: ['building damage connected to a building zone or element - this property is always inferred so use its subproperties dot:hasDamageElement/dot:hasDamageArea instead'], // MB: tooltip when hovering over the prop	
                defaultValue: ['Please use dot:hasDamageElement/dot:hasDamageArea as this is a generic superproperty that is typically inferred'],
                category: ['Regular DOT relations'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/dot#aggregatesDamageElement': {
                label: ['dot:aggregatesDamageElement'], // MB: replaces prop URI
                hint: ['A damage element connected to a damage area that contains it'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/damageElement1'],	
                category: ['Regular DOT relations'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/dot#adjacentDamageElement': {
                label: ['dot:adjacentDamageElement'], // MB: replaces prop URI
                hint: ['A damage element physically connected to another damage element'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/damageElement1'],	
                category: ['Regular DOT relations'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/dot#hasDocumentation': {
                label: ['dot:hasDocumentation'], // MB: replaces prop URI
                hint: ['Connects a damage inspection to the resulting documentation of the inspected building damage, building element or zone'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/subElementA'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/dot#documentationFromInspection': {
                allowNewValue: 0, // MB: max 1 
                label: ['dot:documentationFromInspection'], // MB: replaces prop URI
                hint: ['Connects the damage documentation of a building damage or building element to an inspection referred to by the documentation'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/inspectionA'],	
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/dot#descriptionContent': {
                allowNewValue: 0, // MB: max 1 
                label: ['dot:descriptionContent'], // MB: replaces prop URI
                hint: ['Textual content of a building damage or building element description'], // MB: tooltip when hovering over the prop
                objectIViewer: ['BasicHTMLContentView'], // MB: alternative MarkdownView => no LD-R resource (but single http becomes link)
                objectIEditor: ['BasicTextareaInput'],
            },
            'https://w3id.org/dot#filePath': {
                label: ['dot:filePath'], // MB: replaces prop URI
                hint: ['External file covering the description of a building damage or building element'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://nicefileserver.org/document123.txt'],	
                objectIViewer: ['BasicHTMLContentView'], // MB: alternative MarkdownView => no LD-R resource (but single http becomes link)
                // MB: not ideal since LD-R will always make 'http(s)://'/'file:///' a resource URI (no literal) => inconsistencies with DOT ontology?
                objectIEditor: ['BasicTextareaInput'], // MB: FileInput cannot be used as it only allows local files and creates a new resource URI for it
                // MB: no correct datatype (xsd:anyURI) can be attached currently
            },
            'https://w3id.org/dot#coveredByInspection': {
                label: ['dot:coveredByInspection'], // MB: replaces prop URI
                hint: ['An inspection dealing with a building damage, building element or building zone'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/inspectionA'],	
                category: ['Regular DOT relations'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/dot#coveredInDocumentation': {
                label: ['dot:coveredInDocumentation'], // MB: replaces prop URI
                hint: ['The damage-related documentation of an inspected building damage, building element or building zone'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/documentationA'],
                category: ['Regular DOT relations'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/dot#hasInspector': {
                label: ['dot:hasInspector'], // MB: replaces prop URI
                hint: ['Links a damage inspection to its inspector (person)'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/inspectorA'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/dot#hasCausation': {
                label: ['dot:hasCausation'], // MB: replaces prop URI
                hint: ['Links a building damage to its causation'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/causationA'],
                category: ['Regular DOT relations'],
                objectIEditor: ['PrefixBasedInput'],
            },
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // OMG/FOG geometry properties
            'https://w3id.org/omg#hasGeometry': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['omg:hasGeometry'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage to a geometry node (OMG L2 or 3)'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/geometry1'],	
                category: ['OMG-FOG geometries'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/omg#hasGeometryState': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['omg:hasGeometryState'], // MB: replaces prop URI
                hint: ['connects a omg:Geometry to a geometry state node (OMG L3)'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/geometryState1'],
                category: ['OMG-FOG geometries'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/omg#hasSimpleGeometryDescription': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['omg:hasSimpleGeometryDescription'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
            'https://w3id.org/omg#isPartOfGeometry': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['omg:isPartOfGeometry'], // MB: replaces prop URI
                hint: ['connects an omg:Geometry node to a referenced omg:Geometry node containing a larger geometry description'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mycompanydomain.org/project1/geometry1'],	
                category: ['OMG-FOG geometries'],
                objectIEditor: ['PrefixBasedInput'],
            },
            'https://w3id.org/omg#hasReferencedGeometryId': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['omg:hasReferencedGeometryId'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a literal containing the ID of the geometry referenced by a larger geometry description'], // MB: tooltip when hovering over the prop
                defaultValue: ['F6E01514-3264-4598-8A07-A58BFE739C38'],	
                category: ['OMG-FOG geometries'],
            },
            'https://w3id.org/fog#hasReferencedContent': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:hasReferencedContent'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to content (material, texture, etc.) referenced by a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIEditor: ['PrefixBasedInput'],
            },
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // other OMG and GOM properties

            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // FOG properties: only show leaves of property taxonomy (subproperties of omg:hasReferencedGeometryId)
            'https://w3id.org/fog#hasIfcId-guid': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:hasIfcId-guid'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a literal containing the ID of the geometry referenced by a larger geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
            },
            'https://w3id.org/fog#hasObjId-group': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:hasObjId-group'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a literal containing the ID of the geometry referenced by a larger geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
            },
            'https://w3id.org/fog#hasObjId-object': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:hasObjId-object'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a literal containing the ID of the geometry referenced by a larger geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
            },
            'https://w3id.org/fog#hasRevitId-element': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:hasRevitId-element'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a literal containing the ID of the geometry referenced by a larger geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
            },
            'https://w3id.org/fog#hasRevitId-uniqueId': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:hasRevitId-uniqueId'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a literal containing the ID of the geometry referenced by a larger geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
            },
            'https://w3id.org/fog#hasRhinoId-object': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:hasRhinoId-object'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a literal containing the ID of the geometry referenced by a larger geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
            },
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // FOG properties: only show leaves of property taxonomy (subproperties of omg:hasSimpleGeometryDescription)
            'https://w3id.org/fog#asCollada_v1.4.1': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asCollada_v1.4.1'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asCollada_v1.5.0': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asCollada_v1.5.0'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asDwg_v2010': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asDwg_v2010'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asDwg_v2013': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asDwg_v2013'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asDwg_v2018': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asDwg_v2018'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asE57_v1.0': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asE57_v1.0'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asGeojson_v2008': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asGeojson_v2008'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asGeojson_v2016': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asGeojson_v2016'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asGltf_v1.0-bin': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asGltf_v1.0-bin'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asGltf_v1.0-glsl': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asGltf_v1.0-glsl'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asGltf_v1.0-gltf': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asGltf_v1.0-gltf'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asGltf_v1.0-texture': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asGltf_v1.0-texture'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asGltf_v2.0-bin': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asGltf_v2.0-bin'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asGltf_v2.0-glb': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asGltf_v2.0-glb'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asGltf_v2.0-gltf': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asGltf_v2.0-gltf'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asGltf_v2.0-texture': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asGltf_v2.0-texture'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asGml_v3.1.1': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asGml_v3.1.1'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asGml_v3.2.1': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asGml_v3.2.1'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asGml_v3.2.2': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asGml_v3.2.2'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asGml_v3.3.0': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asGml_v3.3.0'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asIfc_v2x3-ifc': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asIfc_v2x3-ifc'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asIfc_v2x3-ifcxml': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asIfc_v2x3-ifcxml'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asIfc_v2x3tc1-ifc': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asIfc_v2x3tc1-ifc'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asIfc_v2x3tc1-ifcxml': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asIfc_v2x3tc1-ifcxml'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asIfc_v2x4-ifc': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asIfc_v2x4-ifc'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asIfc_v2x4-ifcxml': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asIfc_v2x4-ifcxml'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asIfc_v2x4add1-ifc': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asIfc_v2x4add1-ifc'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asIfc_v2x4add1-ifcxml': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asIfc_v2x4add1-ifcxml'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asIfc_v2x4add2-ifc': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asIfc_v2x4add2-ifc'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asIfc_v2x4add2-ifcxml': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asIfc_v2x4add2-ifcxml'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asIges_v5.3': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asIges_v5.3'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asLas_v1.4-las': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asLas_v1.4-las'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asLas_v1.4-laz': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asLas_v1.4-laz'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asNexus_v4.2-nxs': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asNexus_v4.2-nxs'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asNexus_v4.2-nxz': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asNexus_v4.2-nxz'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asObj_v3.0-mtl': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asObj_v3.0-mtl'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asObj_v3.0-obj': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asObj_v3.0-obj'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asObj_v3.0-texture': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asObj_v3.0-texture'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asPcd_v0.7-ascii': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asPcd_v0.7-ascii'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asPcd_v0.7-binary': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asPcd_v0.7-binary'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asPly_v1.0-ascii': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asPly_v1.0-ascii'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asPly_v1.0-binaryBE': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asPly_v1.0-binaryBE'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asPly_v1.0-binaryLE': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asPly_v1.0-binaryLE'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asRevit_v2017': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asRevit_v2017'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asRevit_v2018': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asRevit_v2018'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asRevit_v2019': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asRevit_v2019'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asRevit_v2020': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asRevit_v2020'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asRhino_v5': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asRhino_v5'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asRhino_v6': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asRhino_v6'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asSfa_v1-wkt': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asSfa_v1-wkt'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asSfa_v2-wkb': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asSfa_v2-wkb'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asSfa_v2-wkt': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asSfa_v2-wkt'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asShapefile-dbf': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asShapefile-dbf'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asShapefile-prj': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asShapefile-prj'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asShapefile-shp': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asShapefile-shp'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asShapefile-shx': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asShapefile-shx'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asSketchUp_v2017': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asSketchUp_v2017'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asSketchUp_v2018': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asSketchUp_v2018'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asSketchUp_v2019': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asSketchUp_v2019'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asStep_ap214': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asStep_ap214'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asStep_ap242': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asStep_ap242'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asStl_v1.0-ascii': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asStl_v1.0-ascii'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asStl_v1.0-binary': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asStl_v1.0-binary'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asSvg_v1.0': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asSvg_v1.0'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asSvg_v1.1': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asSvg_v1.1'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asSvg_v2.0': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asSvg_v2.0'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asX3d_v3.3-binary': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asX3d_v3.3-binary'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asX3d_v3.3-vrml': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asX3d_v3.3-vrml'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
        
            'https://w3id.org/fog#asX3d_v3.3-xml': {
                allowNewValue: 0, // MB: set off because this is not done manually in LD-R but using an external application
                label: ['fog:asX3d_v3.3-xml'], // MB: replaces prop URI
                hint: ['connects a building element, zone or damage (OMG L1) / omg:Geometry (OMG L2) / omg:GeometryState (OMG L3) to a geometry description'], // MB: tooltip when hovering over the prop
                category: ['OMG-FOG geometries'],
                objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals
                objectIEditor: ['BasicTextareaInput'],
            },
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // FOG properties: hide non-leaf properties, subproperties of omg:hasReferencedId (not possible to hide when in detail view => also provide passwordview and label)
            'https://w3id.org/fog#hasIfcId': {
                isHidden: 1,
            },

            'https://w3id.org/fog#hasObjId': {
                isHidden: 1,
            },

            'https://w3id.org/fog#hasRevitId': {
                isHidden: 1,
            },

            'https://w3id.org/fog#hasRhinoId': {
                isHidden: 1,
            },
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // FOG properties: hide non-leaf properties, subproperties of omg:hasSimpleGeometryDescription (not possible to hide when in detail view => also provide passwordview and label)
            'https://w3id.org/fog#asCollada': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asDwg': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asE57': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asGeojson': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asGltf': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asGltf_v1.0': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asGltf_v2.0': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asGml': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asIfc': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asIfc_v2x3': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asIfc_v2x3tc1': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asIfc_v2x4': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asIfc_v2x4add1': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asIfc_v2x4add2': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asIges': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asLas': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asLas_v1.4': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asNexus': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asNexus_v4.2': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asObj': {
                isHidden: 1,
                // objectIViewer: ['PasswordView'], // MB: trick to maintain overview of large RDF literals if shown in details
                // objectIEditor: ['BasicTextareaInput'],
            },

            'https://w3id.org/fog#asObj_v3.0': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asPcd': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asPcd_v0.7': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asPly': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asPly_v1.0': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asRevit': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asRhino': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asSfa': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asSfa_v1': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asSfa_v2': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asShapefile': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asSketchUp': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asStep': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asStl': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asStl_v1.0': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asSvg': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asX3d': {
                isHidden: 1,
            },

            'https://w3id.org/fog#asX3d_v3.3': {
                isHidden: 1,
            },

        
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // MB: options list for BEO
            'https://w3id.org/beo-extension#type': { // subproperty of rdf:type
                allowNewValue: 1, // MB: a certain 
                label: ['ext-beo:type'], // MB: replaces prop URI
                hint: ['Use this property to classify a bot:Element using BEO (prefixes cannot be used for userdefined URIs)'], // MB: tooltip when hovering over the prop
                defaultValue: ['http://pi.pauwel.be/voc/buildingelement#Wall-STANDARD'],
                objectIEditor: ['BasicOptionInput'], // prefixes cannot be used for user defined value
                objectIViewer: ['BasicOptionView'],
                allowUserDefinedValue: 1,
                options: [ // MB: copy paste auto generated list below (most specific BEO classes)
                    { label: 'beo:Beam-BEAM' , value: 'http://pi.pauwel.be/voc/buildingelement#Beam-BEAM' },
                    { label: 'beo:Beam-HOLLOWCORE' , value: 'http://pi.pauwel.be/voc/buildingelement#Beam-HOLLOWCORE' },
                    { label: 'beo:Beam-JOIST' , value: 'http://pi.pauwel.be/voc/buildingelement#Beam-JOIST' },
                    { label: 'beo:Beam-LINTEL' , value: 'http://pi.pauwel.be/voc/buildingelement#Beam-LINTEL' },
                    { label: 'beo:Beam-SPANDREL' , value: 'http://pi.pauwel.be/voc/buildingelement#Beam-SPANDREL' },
                    { label: 'beo:Beam-T_BEAM' , value: 'http://pi.pauwel.be/voc/buildingelement#Beam-T_BEAM' },
                    { label: 'beo:BuildingElementPart-INSULATION' , value: 'http://pi.pauwel.be/voc/buildingelement#BuildingElementPart-INSULATION' },
                    { label: 'beo:BuildingElementPart-PRECASTPANEL' , value: 'http://pi.pauwel.be/voc/buildingelement#BuildingElementPart-PRECASTPANEL' },
                    { label: 'beo:Chimney' , value: 'http://pi.pauwel.be/voc/buildingelement#Chimney' },
                    { label: 'beo:Column-COLUMN' , value: 'http://pi.pauwel.be/voc/buildingelement#Column-COLUMN' },
                    { label: 'beo:Column-PILASTER' , value: 'http://pi.pauwel.be/voc/buildingelement#Column-PILASTER' },
                    { label: 'beo:Covering-CEILING' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-CEILING' },
                    { label: 'beo:Covering-CLADDING' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-CLADDING' },
                    { label: 'beo:Covering-FLOORING' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-FLOORING' },
                    { label: 'beo:Covering-INSULATION' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-INSULATION' },
                    { label: 'beo:Covering-MEMBRANE' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-MEMBRANE' },
                    { label: 'beo:Covering-MOLDING' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-MOLDING' },
                    { label: 'beo:Covering-ROOFING' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-ROOFING' },
                    { label: 'beo:Covering-SKIRTINGBOARD' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-SKIRTINGBOARD' },
                    { label: 'beo:Covering-SLEEVING' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-SLEEVING' },
                    { label: 'beo:Covering-WRAPPING' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-WRAPPING' },
                    { label: 'beo:CurtainWall' , value: 'http://pi.pauwel.be/voc/buildingelement#CurtainWall' },
                    { label: 'beo:DiscreteAccessory-ANCHORPLATE' , value: 'http://pi.pauwel.be/voc/buildingelement#DiscreteAccessory-ANCHORPLATE' },
                    { label: 'beo:DiscreteAccessory-BRACKET' , value: 'http://pi.pauwel.be/voc/buildingelement#DiscreteAccessory-BRACKET' },
                    { label: 'beo:DiscreteAccessory-SHOE' , value: 'http://pi.pauwel.be/voc/buildingelement#DiscreteAccessory-SHOE' },
                    { label: 'beo:Door-DOOR' , value: 'http://pi.pauwel.be/voc/buildingelement#Door-DOOR' },
                    { label: 'beo:Door-GATE' , value: 'http://pi.pauwel.be/voc/buildingelement#Door-GATE' },
                    { label: 'beo:Door-TRAPDOOR' , value: 'http://pi.pauwel.be/voc/buildingelement#Door-TRAPDOOR' },
                    { label: 'beo:Fastener-GLUE' , value: 'http://pi.pauwel.be/voc/buildingelement#Fastener-GLUE' },
                    { label: 'beo:Fastener-MORTAR' , value: 'http://pi.pauwel.be/voc/buildingelement#Fastener-MORTAR' },
                    { label: 'beo:Fastener-WELD' , value: 'http://pi.pauwel.be/voc/buildingelement#Fastener-WELD' },
                    { label: 'beo:Footing-CAISSON_FOUNDATION' , value: 'http://pi.pauwel.be/voc/buildingelement#Footing-CAISSON_FOUNDATION' },
                    { label: 'beo:Footing-FOOTING_BEAM' , value: 'http://pi.pauwel.be/voc/buildingelement#Footing-FOOTING_BEAM' },
                    { label: 'beo:Footing-PAD_FOOTING' , value: 'http://pi.pauwel.be/voc/buildingelement#Footing-PAD_FOOTING' },
                    { label: 'beo:Footing-PILE_CAP' , value: 'http://pi.pauwel.be/voc/buildingelement#Footing-PILE_CAP' },
                    { label: 'beo:Footing-STRIP_FOOTING' , value: 'http://pi.pauwel.be/voc/buildingelement#Footing-STRIP_FOOTING' },
                    { label: 'beo:MechanicalFastener-ANCHORBOLT' , value: 'http://pi.pauwel.be/voc/buildingelement#MechanicalFastener-ANCHORBOLT' },
                    { label: 'beo:MechanicalFastener-BOLT' , value: 'http://pi.pauwel.be/voc/buildingelement#MechanicalFastener-BOLT' },
                    { label: 'beo:MechanicalFastener-DOWEL' , value: 'http://pi.pauwel.be/voc/buildingelement#MechanicalFastener-DOWEL' },
                    { label: 'beo:MechanicalFastener-NAIL' , value: 'http://pi.pauwel.be/voc/buildingelement#MechanicalFastener-NAIL' },
                    { label: 'beo:MechanicalFastener-NAILPLATE' , value: 'http://pi.pauwel.be/voc/buildingelement#MechanicalFastener-NAILPLATE' },
                    { label: 'beo:MechanicalFastener-RIVET' , value: 'http://pi.pauwel.be/voc/buildingelement#MechanicalFastener-RIVET' },
                    { label: 'beo:MechanicalFastener-SCREW' , value: 'http://pi.pauwel.be/voc/buildingelement#MechanicalFastener-SCREW' },
                    { label: 'beo:MechanicalFastener-SHEARCONNECTOR' , value: 'http://pi.pauwel.be/voc/buildingelement#MechanicalFastener-SHEARCONNECTOR' },
                    { label: 'beo:MechanicalFastener-STAPLE' , value: 'http://pi.pauwel.be/voc/buildingelement#MechanicalFastener-STAPLE' },
                    { label: 'beo:MechanicalFastener-STUDSHEARCONNECTOR' , value: 'http://pi.pauwel.be/voc/buildingelement#MechanicalFastener-STUDSHEARCONNECTOR' },
                    { label: 'beo:Member-BRACE' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-BRACE' },
                    { label: 'beo:Member-CHORD' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-CHORD' },
                    { label: 'beo:Member-COLLAR' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-COLLAR' },
                    { label: 'beo:Member-MEMBER' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-MEMBER' },
                    { label: 'beo:Member-MULLION' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-MULLION' },
                    { label: 'beo:Member-PLATE' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-PLATE' },
                    { label: 'beo:Member-POST' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-POST' },
                    { label: 'beo:Member-PURLIN' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-PURLIN' },
                    { label: 'beo:Member-RAFTER' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-RAFTER' },
                    { label: 'beo:Member-STRINGER' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-STRINGER' },
                    { label: 'beo:Member-STRUT' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-STRUT' },
                    { label: 'beo:Member-STUD' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-STUD' },
                    { label: 'beo:Pile-BORED' , value: 'http://pi.pauwel.be/voc/buildingelement#Pile-BORED' },
                    { label: 'beo:Pile-COHESION' , value: 'http://pi.pauwel.be/voc/buildingelement#Pile-COHESION' },
                    { label: 'beo:Pile-DRIVEN' , value: 'http://pi.pauwel.be/voc/buildingelement#Pile-DRIVEN' },
                    { label: 'beo:Pile-FRICTION' , value: 'http://pi.pauwel.be/voc/buildingelement#Pile-FRICTION' },
                    { label: 'beo:Pile-JETGROUTING' , value: 'http://pi.pauwel.be/voc/buildingelement#Pile-JETGROUTING' },
                    { label: 'beo:Pile-SUPPORT' , value: 'http://pi.pauwel.be/voc/buildingelement#Pile-SUPPORT' },
                    { label: 'beo:Plate-CURTAIN_PANEL' , value: 'http://pi.pauwel.be/voc/buildingelement#Plate-CURTAIN_PANEL' },
                    { label: 'beo:Plate-SHEET' , value: 'http://pi.pauwel.be/voc/buildingelement#Plate-SHEET' },
                    { label: 'beo:Railing-BALUSTRADE' , value: 'http://pi.pauwel.be/voc/buildingelement#Railing-BALUSTRADE' },
                    { label: 'beo:Railing-GUARDRAIL' , value: 'http://pi.pauwel.be/voc/buildingelement#Railing-GUARDRAIL' },
                    { label: 'beo:Railing-HANDRAIL' , value: 'http://pi.pauwel.be/voc/buildingelement#Railing-HANDRAIL' },
                    { label: 'beo:Ramp-HALF_TURN_RAMP' , value: 'http://pi.pauwel.be/voc/buildingelement#Ramp-HALF_TURN_RAMP' },
                    { label: 'beo:Ramp-QUARTER_TURN_RAMP' , value: 'http://pi.pauwel.be/voc/buildingelement#Ramp-QUARTER_TURN_RAMP' },
                    { label: 'beo:Ramp-SPIRAL_RAMP' , value: 'http://pi.pauwel.be/voc/buildingelement#Ramp-SPIRAL_RAMP' },
                    { label: 'beo:Ramp-STRAIGHT_RUN_RAMP' , value: 'http://pi.pauwel.be/voc/buildingelement#Ramp-STRAIGHT_RUN_RAMP' },
                    { label: 'beo:Ramp-TWO_QUARTER_TURN_RAMP' , value: 'http://pi.pauwel.be/voc/buildingelement#Ramp-TWO_QUARTER_TURN_RAMP' },
                    { label: 'beo:Ramp-TWO_STRAIGHT_RUN_RAMP' , value: 'http://pi.pauwel.be/voc/buildingelement#Ramp-TWO_STRAIGHT_RUN_RAMP' },
                    { label: 'beo:RampFlight-SPIRAL' , value: 'http://pi.pauwel.be/voc/buildingelement#RampFlight-SPIRAL' },
                    { label: 'beo:RampFlight-STRAIGHT' , value: 'http://pi.pauwel.be/voc/buildingelement#RampFlight-STRAIGHT' },
                    { label: 'beo:ReinforcingBar-ANCHORING' , value: 'http://pi.pauwel.be/voc/buildingelement#ReinforcingBar-ANCHORING' },
                    { label: 'beo:ReinforcingBar-EDGE' , value: 'http://pi.pauwel.be/voc/buildingelement#ReinforcingBar-EDGE' },
                    { label: 'beo:ReinforcingBar-LIGATURE' , value: 'http://pi.pauwel.be/voc/buildingelement#ReinforcingBar-LIGATURE' },
                    { label: 'beo:ReinforcingBar-MAIN' , value: 'http://pi.pauwel.be/voc/buildingelement#ReinforcingBar-MAIN' },
                    { label: 'beo:ReinforcingBar-PUNCHING' , value: 'http://pi.pauwel.be/voc/buildingelement#ReinforcingBar-PUNCHING' },
                    { label: 'beo:ReinforcingBar-RING' , value: 'http://pi.pauwel.be/voc/buildingelement#ReinforcingBar-RING' },
                    { label: 'beo:ReinforcingBar-SHEAR' , value: 'http://pi.pauwel.be/voc/buildingelement#ReinforcingBar-SHEAR' },
                    { label: 'beo:ReinforcingBar-STUD' , value: 'http://pi.pauwel.be/voc/buildingelement#ReinforcingBar-STUD' },
                    { label: 'beo:ReinforcingMesh' , value: 'http://pi.pauwel.be/voc/buildingelement#ReinforcingMesh' },
                    { label: 'beo:Roof-BARREL_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-BARREL_ROOF' },
                    { label: 'beo:Roof-BUTTERFLY_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-BUTTERFLY_ROOF' },
                    { label: 'beo:Roof-DOME_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-DOME_ROOF' },
                    { label: 'beo:Roof-FLAT_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-FLAT_ROOF' },
                    { label: 'beo:Roof-FREEFORM' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-FREEFORM' },
                    { label: 'beo:Roof-GABLE_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-GABLE_ROOF' },
                    { label: 'beo:Roof-GAMBREL_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-GAMBREL_ROOF' },
                    { label: 'beo:Roof-HIPPED_GABLE_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-HIPPED_GABLE_ROOF' },
                    { label: 'beo:Roof-HIP_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-HIP_ROOF' },
                    { label: 'beo:Roof-MANSARD_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-MANSARD_ROOF' },
                    { label: 'beo:Roof-PAVILION_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-PAVILION_ROOF' },
                    { label: 'beo:Roof-RAINBOW_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-RAINBOW_ROOF' },
                    { label: 'beo:Roof-SHED_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-SHED_ROOF' },
                    { label: 'beo:ShadingDevice-AWNING' , value: 'http://pi.pauwel.be/voc/buildingelement#ShadingDevice-AWNING' },
                    { label: 'beo:ShadingDevice-JALOUSIE' , value: 'http://pi.pauwel.be/voc/buildingelement#ShadingDevice-JALOUSIE' },
                    { label: 'beo:ShadingDevice-SHUTTER' , value: 'http://pi.pauwel.be/voc/buildingelement#ShadingDevice-SHUTTER' },
                    { label: 'beo:Slab-BASESLAB' , value: 'http://pi.pauwel.be/voc/buildingelement#Slab-BASESLAB' },
                    { label: 'beo:Slab-FLOOR' , value: 'http://pi.pauwel.be/voc/buildingelement#Slab-FLOOR' },
                    { label: 'beo:Slab-LANDING' , value: 'http://pi.pauwel.be/voc/buildingelement#Slab-LANDING' },
                    { label: 'beo:Slab-ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Slab-ROOF' },
                    { label: 'beo:Stair-CURVED_RUN_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-CURVED_RUN_STAIR' },
                    { label: 'beo:Stair-DOUBLE_RETURN_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-DOUBLE_RETURN_STAIR' },
                    { label: 'beo:Stair-HALF_TURN_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-HALF_TURN_STAIR' },
                    { label: 'beo:Stair-HALF_WINDING_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-HALF_WINDING_STAIR' },
                    { label: 'beo:Stair-QUARTER_TURN_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-QUARTER_TURN_STAIR' },
                    { label: 'beo:Stair-QUARTER_WINDING_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-QUARTER_WINDING_STAIR' },
                    { label: 'beo:Stair-SPIRAL_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-SPIRAL_STAIR' },
                    { label: 'beo:Stair-STRAIGHT_RUN_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-STRAIGHT_RUN_STAIR' },
                    { label: 'beo:Stair-THREE_QUARTER_TURN_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-THREE_QUARTER_TURN_STAIR' },
                    { label: 'beo:Stair-THREE_QUARTER_WINDING_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-THREE_QUARTER_WINDING_STAIR' },
                    { label: 'beo:Stair-TWO_CURVED_RUN_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-TWO_CURVED_RUN_STAIR' },
                    { label: 'beo:Stair-TWO_QUARTER_TURN_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-TWO_QUARTER_TURN_STAIR' },
                    { label: 'beo:Stair-TWO_QUARTER_WINDING_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-TWO_QUARTER_WINDING_STAIR' },
                    { label: 'beo:Stair-TWO_STRAIGHT_RUN_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-TWO_STRAIGHT_RUN_STAIR' },
                    { label: 'beo:StairFlight-CURVED' , value: 'http://pi.pauwel.be/voc/buildingelement#StairFlight-CURVED' },
                    { label: 'beo:StairFlight-FREEFORM' , value: 'http://pi.pauwel.be/voc/buildingelement#StairFlight-FREEFORM' },
                    { label: 'beo:StairFlight-SPIRAL' , value: 'http://pi.pauwel.be/voc/buildingelement#StairFlight-SPIRAL' },
                    { label: 'beo:StairFlight-STRAIGHT' , value: 'http://pi.pauwel.be/voc/buildingelement#StairFlight-STRAIGHT' },
                    { label: 'beo:StairFlight-WINDER' , value: 'http://pi.pauwel.be/voc/buildingelement#StairFlight-WINDER' },
                    { label: 'beo:Tendon-BAR' , value: 'http://pi.pauwel.be/voc/buildingelement#Tendon-BAR' },
                    { label: 'beo:Tendon-COATED' , value: 'http://pi.pauwel.be/voc/buildingelement#Tendon-COATED' },
                    { label: 'beo:Tendon-STRAND' , value: 'http://pi.pauwel.be/voc/buildingelement#Tendon-STRAND' },
                    { label: 'beo:Tendon-WIRE' , value: 'http://pi.pauwel.be/voc/buildingelement#Tendon-WIRE' },
                    { label: 'beo:TendonAnchor-COUPLER' , value: 'http://pi.pauwel.be/voc/buildingelement#TendonAnchor-COUPLER' },
                    { label: 'beo:TendonAnchor-FIXED_END' , value: 'http://pi.pauwel.be/voc/buildingelement#TendonAnchor-FIXED_END' },
                    { label: 'beo:TendonAnchor-TENSIONING_END' , value: 'http://pi.pauwel.be/voc/buildingelement#TendonAnchor-TENSIONING_END' },
                    { label: 'beo:TransportElement-CRANEWAY' , value: 'http://pi.pauwel.be/voc/buildingelement#TransportElement-CRANEWAY' },
                    { label: 'beo:TransportElement-ELEVATOR' , value: 'http://pi.pauwel.be/voc/buildingelement#TransportElement-ELEVATOR' },
                    { label: 'beo:TransportElement-ESCALATOR' , value: 'http://pi.pauwel.be/voc/buildingelement#TransportElement-ESCALATOR' },
                    { label: 'beo:TransportElement-LIFTINGGEAR' , value: 'http://pi.pauwel.be/voc/buildingelement#TransportElement-LIFTINGGEAR' },
                    { label: 'beo:TransportElement-MOVINGWALKWAY' , value: 'http://pi.pauwel.be/voc/buildingelement#TransportElement-MOVINGWALKWAY' },
                    { label: 'beo:VibrationIsolator-COMPRESSION' , value: 'http://pi.pauwel.be/voc/buildingelement#VibrationIsolator-COMPRESSION' },
                    { label: 'beo:VibrationIsolator-SPRING' , value: 'http://pi.pauwel.be/voc/buildingelement#VibrationIsolator-SPRING' },
                    { label: 'beo:Wall-ELEMENTEDWALL' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall-ELEMENTEDWALL' },
                    { label: 'beo:Wall-MOVABLE' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall-MOVABLE' },
                    { label: 'beo:Wall-PARAPET' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall-PARAPET' },
                    { label: 'beo:Wall-PARTITIONING' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall-PARTITIONING' },
                    { label: 'beo:Wall-PLUMBINGWALL' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall-PLUMBINGWALL' },
                    { label: 'beo:Wall-POLYGONAL' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall-POLYGONAL' },
                    { label: 'beo:Wall-SHEAR' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall-SHEAR' },
                    { label: 'beo:Wall-SOLIDWALL' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall-SOLIDWALL' },
                    { label: 'beo:Wall-STANDARD' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall-STANDARD' },
                    { label: 'beo:WallElementedCase' , value: 'http://pi.pauwel.be/voc/buildingelement#WallElementedCase' },
                    { label: 'beo:Window-LIGHTDOME' , value: 'http://pi.pauwel.be/voc/buildingelement#Window-LIGHTDOME' },
                    { label: 'beo:Window-SKYLIGHT' , value: 'http://pi.pauwel.be/voc/buildingelement#Window-SKYLIGHT' },
                    { label: 'beo:Window-WINDOW' , value: 'http://pi.pauwel.be/voc/buildingelement#Window-WINDOW' },
                ]
            },
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // MB: options list for MDCS
            'https://w3id.org/mdcs-extension#type': { // subproperty of rdf:type
                allowNewValue: 1, // MB: a certain 
                label: ['ext-mdcs:type'], // MB: replaces prop URI
                hint: ['Use this property to classify a dot:Damage using MDCS (prefixes cannot be used for user defined URIs)'], // MB: tooltip when hovering over the prop
                defaultValue: ['https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Cracking_Hair-crack'],
                objectIEditor: ['BasicOptionInput'], // prefixes cannot be used for user defined value
                objectIViewer: ['BasicOptionView'],
                allowUserDefinedValue: 1,
                options: [ // MB: copy paste auto generated list below (most specific MDCS classes)
                    { label: 'mdcs:Brick-damage_Biological-growth_Algae' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Biological-growth_Algae' },
                    { label: 'mdcs:Brick-damage_Biological-growth_Higher-plants' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Biological-growth_Higher-plants' },
                    { label: 'mdcs:Brick-damage_Biological-growth_Lichens' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Biological-growth_Lichens' },
                    { label: 'mdcs:Brick-damage_Biological-growth_Liverworts' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Biological-growth_Liverworts' },
                    { label: 'mdcs:Brick-damage_Biological-growth_Mosses' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Biological-growth_Mosses' },
                    { label: 'mdcs:Brick-damage_Biological-growth_Moulds' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Biological-growth_Moulds' },
                    { label: 'mdcs:Brick-damage_Cracking_Crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Cracking_Crack' },
                    { label: 'mdcs:Brick-damage_Cracking_CrazingCraquele' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Cracking_CrazingCraquele' },
                    { label: 'mdcs:Brick-damage_Cracking_Hair-crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Cracking_Hair-crack' },
                    { label: 'mdcs:Brick-damage_Cracking_Star-crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Cracking_Star-crack' },
                    { label: 'mdcs:Brick-damage_Deformation_Bending' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Deformation_Bending' },
                    { label: 'mdcs:Brick-damage_Deformation_Bulging' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Deformation_Bulging' },
                    { label: 'mdcs:Brick-damage_Deformation_Displacement' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Deformation_Displacement' },
                    { label: 'mdcs:Brick-damage_Deformation_Misalignment' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Deformation_Misalignment' },
                    { label: 'mdcs:Brick-damage_Deformation_Vertical-deviation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Deformation_Vertical-deviation' },
                    { label: 'mdcs:Brick-damage_Disintegration_Detachment_Blistering-paint-coating' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Detachment_Blistering-paint-coating' },
                    { label: 'mdcs:Brick-damage_Disintegration_Detachment_Loss-of-adhesion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Detachment_Loss-of-adhesion' },
                    { label: 'mdcs:Brick-damage_Disintegration_Detachment_Peeling-paint' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Detachment_Peeling-paint' },
                    { label: 'mdcs:Brick-damage_Disintegration_Layering_Delamination' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Layering_Delamination' },
                    { label: 'mdcs:Brick-damage_Disintegration_Layering_Exfoliation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Layering_Exfoliation' },
                    { label: 'mdcs:Brick-damage_Disintegration_Layering_Scaling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Layering_Scaling' },
                    { label: 'mdcs:Brick-damage_Disintegration_Layering_Spalling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Layering_Spalling' },
                    { label: 'mdcs:Brick-damage_Disintegration_Loss-of-cohesion_Alveolization' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Loss-of-cohesion_Alveolization' },
                    { label: 'mdcs:Brick-damage_Disintegration_Loss-of-cohesion_Brick-blistering' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Loss-of-cohesion_Brick-blistering' },
                    { label: 'mdcs:Brick-damage_Disintegration_Loss-of-cohesion_Cratering' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Loss-of-cohesion_Cratering' },
                    { label: 'mdcs:Brick-damage_Disintegration_Loss-of-cohesion_Crumbling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Loss-of-cohesion_Crumbling' },
                    { label: 'mdcs:Brick-damage_Disintegration_Loss-of-cohesion_Erosion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Loss-of-cohesion_Erosion' },
                    { label: 'mdcs:Brick-damage_Disintegration_Loss-of-cohesion_Powdering' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Loss-of-cohesion_Powdering' },
                    { label: 'mdcs:Brick-damage_Lacuna' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Lacuna' },
                    { label: 'mdcs:Brick-damage_Mechanical-damage_Chipping' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Mechanical-damage_Chipping' },
                    { label: 'mdcs:Brick-damage_Mechanical-damage_Cut-incision' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Mechanical-damage_Cut-incision' },
                    { label: 'mdcs:Brick-damage_Mechanical-damage_Mechanical-damage-general' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Mechanical-damage_Mechanical-damage-general' },
                    { label: 'mdcs:Brick-damage_Mechanical-damage_Perforation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Mechanical-damage_Perforation' },
                    { label: 'mdcs:Brick-damage_Mechanical-damage_Scratch' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Mechanical-damage_Scratch' },
                    { label: 'mdcs:Brick-damage_Mechanical-damage_Splitting' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Mechanical-damage_Splitting' },
                    { label: 'mdcs:Brick-damage_Surface-change_Chromatic-alteration_Moist-spots-or-moist-zones' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Chromatic-alteration_Moist-spots-or-moist-zones' },
                    { label: 'mdcs:Brick-damage_Surface-change_Chromatic-alteration_Staining' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Chromatic-alteration_Staining' },
                    { label: 'mdcs:Brick-damage_Surface-change_Deposit_Crypto-florescence' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Deposit_Crypto-florescence' },
                    { label: 'mdcs:Brick-damage_Surface-change_Deposit_Efflorescence' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Deposit_Efflorescence' },
                    { label: 'mdcs:Brick-damage_Surface-change_Deposit_Encrustation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Deposit_Encrustation' },
                    { label: 'mdcs:Brick-damage_Surface-change_Deposit_Graffiti' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Deposit_Graffiti' },
                    { label: 'mdcs:Brick-damage_Surface-change_Deposit_Soiling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Deposit_Soiling' },
                    { label: 'mdcs:Brick-damage_Surface-change_Transformation_Crust' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Transformation_Crust' },
                    { label: 'mdcs:Brick-damage_Surface-change_Transformation_Patina' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Transformation_Patina' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Biological-growth_Algae' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Biological-growth_Algae' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Biological-growth_Biofilm' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Biological-growth_Biofilm' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Biological-growth_Higher-plants' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Biological-growth_Higher-plants' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Biological-growth_Lichens' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Biological-growth_Lichens' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Biological-growth_Liverworts' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Biological-growth_Liverworts' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Biological-growth_Mosses' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Biological-growth_Mosses' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Biological-growth_Moulds' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Biological-growth_Moulds' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Cracks_Interconnected-cracks_Crazing' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Cracks_Interconnected-cracks_Crazing' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Cracks_Interconnected-cracks_Geometric-pattern' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Cracks_Interconnected-cracks_Geometric-pattern' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Cracks_Interconnected-cracks_Map-cracking' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Cracks_Interconnected-cracks_Map-cracking' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Cracks_Non-connected-cracks_Individual-crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Cracks_Non-connected-cracks_Individual-crack' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Cracks_Non-connected-cracks_Parallel-cracks' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Cracks_Non-connected-cracks_Parallel-cracks' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Deformation_Bending' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Deformation_Bending' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Deformation_Displacement' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Deformation_Displacement' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Disintegration_Layering_Exfoliation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Disintegration_Layering_Exfoliation' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Disintegration_Layering_Scaling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Disintegration_Layering_Scaling' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Disintegration_Layering_Spalling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Disintegration_Layering_Spalling' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Disintegration_Loss-of-cohesion_Crumbling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Disintegration_Loss-of-cohesion_Crumbling' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Disintegration_Loss-of-cohesion_Dusting' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Disintegration_Loss-of-cohesion_Dusting' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Disintegration_Loss-of-cohesion_Erosion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Disintegration_Loss-of-cohesion_Erosion' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Disintegration_Loss-of-cohesion_Pop-outs' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Disintegration_Loss-of-cohesion_Pop-outs' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Mechanical-damage-general' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Mechanical-damage-general' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Chromatic-alteration_Discolouration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Chromatic-alteration_Discolouration' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Chromatic-alteration_Fading' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Chromatic-alteration_Fading' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Chromatic-alteration_Linear-colour-change' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Chromatic-alteration_Linear-colour-change' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Chromatic-alteration_Moist-spots' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Chromatic-alteration_Moist-spots' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Efflorescence' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Efflorescence' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Encrustation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Encrustation' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Graffiti' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Graffiti' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Soiling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Soiling' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Staining' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Staining' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Superficial-Irregularities_Inhomogeneity' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Superficial-Irregularities_Inhomogeneity' },
                    { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Superficial-Irregularities_Voids' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Superficial-Irregularities_Voids' },
                    { label: 'mdcs:Concrete-damage_Damage-to-reinforcement_Corrosion-of-reinforcement_Loss-of-rebar-diameter' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-reinforcement_Corrosion-of-reinforcement_Loss-of-rebar-diameter' },
                    { label: 'mdcs:Concrete-damage_Damage-to-reinforcement_Corrosion-of-reinforcement_Pitting' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-reinforcement_Corrosion-of-reinforcement_Pitting' },
                    { label: 'mdcs:Concrete-damage_Damage-to-reinforcement_Corrosion-of-reinforcement_Rust-layers' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-reinforcement_Corrosion-of-reinforcement_Rust-layers' },
                    { label: 'mdcs:Concrete-damage_Damage-to-reinforcement_Deformation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-reinforcement_Deformation' },
                    { label: 'mdcs:Concrete-damage_Lacuna' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Lacuna' },
                    { label: 'mdcs:Mortar-damage_Biological-growth_Algae' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Biological-growth_Algae' },
                    { label: 'mdcs:Mortar-damage_Biological-growth_Higher-plants' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Biological-growth_Higher-plants' },
                    { label: 'mdcs:Mortar-damage_Biological-growth_Lichens' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Biological-growth_Lichens' },
                    { label: 'mdcs:Mortar-damage_Biological-growth_Liverworts' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Biological-growth_Liverworts' },
                    { label: 'mdcs:Mortar-damage_Biological-growth_Mosses' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Biological-growth_Mosses' },
                    { label: 'mdcs:Mortar-damage_Cracking_Crazing-Craquele' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Cracking_Crazing-Craquele' },
                    { label: 'mdcs:Mortar-damage_Cracking_Hair-crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Cracking_Hair-crack' },
                    { label: 'mdcs:Mortar-damage_Disintegration_Detachement_Blistering-paint-coating' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Detachement_Blistering-paint-coating' },
                    { label: 'mdcs:Mortar-damage_Disintegration_Detachement_Loss-of-adhesion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Detachement_Loss-of-adhesion' },
                    { label: 'mdcs:Mortar-damage_Disintegration_Detachement_Peeling-paint-coating' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Detachement_Peeling-paint-coating' },
                    { label: 'mdcs:Mortar-damage_Disintegration_Detachement_Push-out-pointing' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Detachement_Push-out-pointing' },
                    { label: 'mdcs:Mortar-damage_Disintegration_Layering_Exfoliation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Layering_Exfoliation' },
                    { label: 'mdcs:Mortar-damage_Disintegration_Loss-of-cohesion_Alveolisation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Loss-of-cohesion_Alveolisation' },
                    { label: 'mdcs:Mortar-damage_Disintegration_Loss-of-cohesion_Bursting' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Loss-of-cohesion_Bursting' },
                    { label: 'mdcs:Mortar-damage_Disintegration_Loss-of-cohesion_Crumbling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Loss-of-cohesion_Crumbling' },
                    { label: 'mdcs:Mortar-damage_Disintegration_Loss-of-cohesion_Erosion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Loss-of-cohesion_Erosion' },
                    { label: 'mdcs:Mortar-damage_Disintegration_Loss-of-cohesion_Powdering' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Loss-of-cohesion_Powdering' },
                    { label: 'mdcs:Mortar-damage_Disintegration_Loss-of-cohesion_Sanding' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Loss-of-cohesion_Sanding' },
                    { label: 'mdcs:Mortar-damage_Disintegration_Loss-of-cohesion_Voids' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Loss-of-cohesion_Voids' },
                    { label: 'mdcs:Mortar-damage_Lacuna' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Lacuna' },
                    { label: 'mdcs:Mortar-damage_Mechanical-damage_Cut-incision' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Mechanical-damage_Cut-incision' },
                    { label: 'mdcs:Mortar-damage_Mechanical-damage_Perforation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Mechanical-damage_Perforation' },
                    { label: 'mdcs:Mortar-damage_Mechanical-damage_Scratch' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Mechanical-damage_Scratch' },
                    { label: 'mdcs:Mortar-damage_Surface-change_Chromatic-alteration_Discoloration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Chromatic-alteration_Discoloration' },
                    { label: 'mdcs:Mortar-damage_Surface-change_Chromatic-alteration_Moist-spots' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Chromatic-alteration_Moist-spots' },
                    { label: 'mdcs:Mortar-damage_Surface-change_Chromatic-alteration_Staining' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Chromatic-alteration_Staining' },
                    { label: 'mdcs:Mortar-damage_Surface-change_Deposit_Crypto-florescence' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Deposit_Crypto-florescence' },
                    { label: 'mdcs:Mortar-damage_Surface-change_Deposit_Efflorescence' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Deposit_Efflorescence' },
                    { label: 'mdcs:Mortar-damage_Surface-change_Deposit_Encrustration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Deposit_Encrustration' },
                    { label: 'mdcs:Mortar-damage_Surface-change_Deposit_Graffiti' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Deposit_Graffiti' },
                    { label: 'mdcs:Mortar-damage_Surface-change_Deposit_Soiling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Deposit_Soiling' },
                    { label: 'mdcs:Mortar-damage_Surface-change_Transformation_Crust' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Transformation_Crust' },
                    { label: 'mdcs:Mortar-damage_Surface-change_Transformation_Patina' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Transformation_Patina' },
                    { label: 'mdcs:Natural-stone-damage_Biological-growth_Algae' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Biological-growth_Algae' },
                    { label: 'mdcs:Natural-stone-damage_Biological-growth_Higher-plants' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Biological-growth_Higher-plants' },
                    { label: 'mdcs:Natural-stone-damage_Biological-growth_Lichens' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Biological-growth_Lichens' },
                    { label: 'mdcs:Natural-stone-damage_Biological-growth_Liverworts' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Biological-growth_Liverworts' },
                    { label: 'mdcs:Natural-stone-damage_Biological-growth_Mosses' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Biological-growth_Mosses' },
                    { label: 'mdcs:Natural-stone-damage_Biological-growth_Moulds' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Biological-growth_Moulds' },
                    { label: 'mdcs:Natural-stone-damage_Cracking_Crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Cracking_Crack' },
                    { label: 'mdcs:Natural-stone-damage_Cracking_Crazing-Craquele' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Cracking_Crazing-Craquele' },
                    { label: 'mdcs:Natural-stone-damage_Cracking_Diaclase' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Cracking_Diaclase' },
                    { label: 'mdcs:Natural-stone-damage_Cracking_Hair-crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Cracking_Hair-crack' },
                    { label: 'mdcs:Natural-stone-damage_Cracking_Star-crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Cracking_Star-crack' },
                    { label: 'mdcs:Natural-stone-damage_Deformation_Bending' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Deformation_Bending' },
                    { label: 'mdcs:Natural-stone-damage_Disintegration_Detachment_Blistering-paint-coating' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Detachment_Blistering-paint-coating' },
                    { label: 'mdcs:Natural-stone-damage_Disintegration_Detachment_Loss-of-adhesion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Detachment_Loss-of-adhesion' },
                    { label: 'mdcs:Natural-stone-damage_Disintegration_Detachment_Peeling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Detachment_Peeling' },
                    { label: 'mdcs:Natural-stone-damage_Disintegration_Detachment_Push-out-pointing' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Detachment_Push-out-pointing' },
                    { label: 'mdcs:Natural-stone-damage_Disintegration_Layering_Delamination' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Layering_Delamination' },
                    { label: 'mdcs:Natural-stone-damage_Disintegration_Layering_Exfoliation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Layering_Exfoliation' },
                    { label: 'mdcs:Natural-stone-damage_Disintegration_Layering_Scaling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Layering_Scaling' },
                    { label: 'mdcs:Natural-stone-damage_Disintegration_Layering_Spalling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Layering_Spalling' },
                    { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Chalking' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Chalking' },
                    { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Crumbling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Crumbling' },
                    { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Erosion_Alveolization' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Erosion_Alveolization' },
                    { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Erosion_Selective-weathering' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Erosion_Selective-weathering' },
                    { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Erosion_Wearing' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Erosion_Wearing' },
                    { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Powdering' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Powdering' },
                    { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Sanding' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Sanding' },
                    { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Stylolites' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Stylolites' },
                    { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Sugaring' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Sugaring' },
                    { label: 'mdcs:Natural-stone-damage_Lacuna' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Lacuna' },
                    { label: 'mdcs:Natural-stone-damage_Mechanical-damage_Chipping' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Mechanical-damage_Chipping' },
                    { label: 'mdcs:Natural-stone-damage_Mechanical-damage_Cut-incision' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Mechanical-damage_Cut-incision' },
                    { label: 'mdcs:Natural-stone-damage_Mechanical-damage_Mechanical-damage-general' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Mechanical-damage_Mechanical-damage-general' },
                    { label: 'mdcs:Natural-stone-damage_Mechanical-damage_Perforation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Mechanical-damage_Perforation' },
                    { label: 'mdcs:Natural-stone-damage_Mechanical-damage_Scratch' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Mechanical-damage_Scratch' },
                    { label: 'mdcs:Natural-stone-damage_Mechanical-damage_Splitting' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Mechanical-damage_Splitting' },
                    { label: 'mdcs:Natural-stone-damage_Surface-change_Chromatic-alteration_Fading' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Chromatic-alteration_Fading' },
                    { label: 'mdcs:Natural-stone-damage_Surface-change_Chromatic-alteration_Moist-spots-or-moist-zones' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Chromatic-alteration_Moist-spots-or-moist-zones' },
                    { label: 'mdcs:Natural-stone-damage_Surface-change_Chromatic-alteration_Staining' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Chromatic-alteration_Staining' },
                    { label: 'mdcs:Natural-stone-damage_Surface-change_Deposit_Crypto-florescence' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Deposit_Crypto-florescence' },
                    { label: 'mdcs:Natural-stone-damage_Surface-change_Deposit_Efflorescence' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Deposit_Efflorescence' },
                    { label: 'mdcs:Natural-stone-damage_Surface-change_Deposit_Encrustration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Deposit_Encrustration' },
                    { label: 'mdcs:Natural-stone-damage_Surface-change_Deposit_Graffiti' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Deposit_Graffiti' },
                    { label: 'mdcs:Natural-stone-damage_Surface-change_Deposit_Soiling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Deposit_Soiling' },
                    { label: 'mdcs:Natural-stone-damage_Surface-change_Transformation_Crust' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Transformation_Crust' },
                    { label: 'mdcs:Natural-stone-damage_Surface-change_Transformation_Patina' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Transformation_Patina' },
                    { label: 'mdcs:Plaster-damage_Biological-growth_Algae' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Biological-growth_Algae' },
                    { label: 'mdcs:Plaster-damage_Biological-growth_Lichens' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Biological-growth_Lichens' },
                    { label: 'mdcs:Plaster-damage_Biological-growth_Mosses' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Biological-growth_Mosses' },
                    { label: 'mdcs:Plaster-damage_Biological-growth_Moulds' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Biological-growth_Moulds' },
                    { label: 'mdcs:Plaster-damage_Cracking_Crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Cracking_Crack' },
                    { label: 'mdcs:Plaster-damage_Cracking_Crazing-Craquele' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Cracking_Crazing-Craquele' },
                    { label: 'mdcs:Plaster-damage_Cracking_Hair-crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Cracking_Hair-crack' },
                    { label: 'mdcs:Plaster-damage_Cracking_Star-crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Cracking_Star-crack' },
                    { label: 'mdcs:Plaster-damage_Deformation_Bulging' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Deformation_Bulging' },
                    { label: 'mdcs:Plaster-damage_Disintegration_Detachment_Blistering-paint' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Detachment_Blistering-paint' },
                    { label: 'mdcs:Plaster-damage_Disintegration_Detachment_Loss-of-adhesion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Detachment_Loss-of-adhesion' },
                    { label: 'mdcs:Plaster-damage_Disintegration_Detachment_Peeling-of-paint-coating' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Detachment_Peeling-of-paint-coating' },
                    { label: 'mdcs:Plaster-damage_Disintegration_Layering_Delamination' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Layering_Delamination' },
                    { label: 'mdcs:Plaster-damage_Disintegration_Layering_Exfoliation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Layering_Exfoliation' },
                    { label: 'mdcs:Plaster-damage_Disintegration_Layering_Scaling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Layering_Scaling' },
                    { label: 'mdcs:Plaster-damage_Disintegration_Layering_Spalling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Layering_Spalling' },
                    { label: 'mdcs:Plaster-damage_Disintegration_Loss-of-cohesion_Alveolization' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Loss-of-cohesion_Alveolization' },
                    { label: 'mdcs:Plaster-damage_Disintegration_Loss-of-cohesion_Bursting' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Loss-of-cohesion_Bursting' },
                    { label: 'mdcs:Plaster-damage_Disintegration_Loss-of-cohesion_Chalking' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Loss-of-cohesion_Chalking' },
                    { label: 'mdcs:Plaster-damage_Disintegration_Loss-of-cohesion_Cratering-paint' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Loss-of-cohesion_Cratering-paint' },
                    { label: 'mdcs:Plaster-damage_Disintegration_Loss-of-cohesion_Crumbling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Loss-of-cohesion_Crumbling' },
                    { label: 'mdcs:Plaster-damage_Disintegration_Loss-of-cohesion_Erosion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Loss-of-cohesion_Erosion' },
                    { label: 'mdcs:Plaster-damage_Disintegration_Loss-of-cohesion_Sanding' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Loss-of-cohesion_Sanding' },
                    { label: 'mdcs:Plaster-damage_Lacuna' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Lacuna' },
                    { label: 'mdcs:Plaster-damage_Mechanical-damage_Mechanical-damage-general' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Mechanical-damage_Mechanical-damage-general' },
                    { label: 'mdcs:Plaster-damage_Mechanical-damage_Perforation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Mechanical-damage_Perforation' },
                    { label: 'mdcs:Plaster-damage_Surface-change_Chromatic-alteration_Discoloration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Chromatic-alteration_Discoloration' },
                    { label: 'mdcs:Plaster-damage_Surface-change_Chromatic-alteration_Fading' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Chromatic-alteration_Fading' },
                    { label: 'mdcs:Plaster-damage_Surface-change_Chromatic-alteration_Moist-spots' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Chromatic-alteration_Moist-spots' },
                    { label: 'mdcs:Plaster-damage_Surface-change_Chromatic-alteration_Staining' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Chromatic-alteration_Staining' },
                    { label: 'mdcs:Plaster-damage_Surface-change_Deposit_Crypto-florescence' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Deposit_Crypto-florescence' },
                    { label: 'mdcs:Plaster-damage_Surface-change_Deposit_Efflorescence' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Deposit_Efflorescence' },
                    { label: 'mdcs:Plaster-damage_Surface-change_Deposit_Encrustation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Deposit_Encrustation' },
                    { label: 'mdcs:Plaster-damage_Surface-change_Deposit_Graffiti' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Deposit_Graffiti' },
                    { label: 'mdcs:Plaster-damage_Surface-change_Deposit_Soiling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Deposit_Soiling' },
                    { label: 'mdcs:Plaster-damage_Surface-change_Transformation_Crust' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Transformation_Crust' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-10' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-10' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-11' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-11' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-12' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-12' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-13' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-13' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-14' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-14' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-3' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-3' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-4' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-4' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-5' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-5' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-6' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-6' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-7' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-7' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-8' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-8' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-9' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-9' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-36' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-36' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-37' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-37' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-38' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-38' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-39' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-39' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-40' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-40' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-41' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-41' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-42' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-42' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-43' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-43' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-44' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-44' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-45' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-45' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-46' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-46' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-47' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-47' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-48' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-48' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-49' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-49' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-50' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-50' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-51' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-51' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-30' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-30' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-31' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-31' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-32' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-32' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-33' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-33' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-34' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-34' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-35' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-35' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Horizontal-crack_Horizontal-Crack-pattern-18' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Horizontal-crack_Horizontal-Crack-pattern-18' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Horizontal-crack_Horizontal-Crack-pattern-19' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Horizontal-crack_Horizontal-Crack-pattern-19' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Horizontal-crack_Horizontal-Crack-pattern-20' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Horizontal-crack_Horizontal-Crack-pattern-20' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Horizontal-crack_Horizontal-Crack-pattern-21' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Horizontal-crack_Horizontal-Crack-pattern-21' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Crack-pattern-22' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Crack-pattern-22' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Crack-pattern-23' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Crack-pattern-23' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Crack-pattern-24' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Crack-pattern-24' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Crack-pattern-28' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Crack-pattern-28' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Cracks-pattern-25' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Cracks-pattern-25' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Cracks-pattern-26' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Cracks-pattern-26' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Cracks-pattern-27' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Cracks-pattern-27' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Cracks-pattern-29' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Cracks-pattern-29' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-cross-vault-or-dome_Crack-pattern-15' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-cross-vault-or-dome_Crack-pattern-15' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-cross-vault-or-dome_Crack-pattern-16' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-cross-vault-or-dome_Crack-pattern-16' },
                    { label: 'mdcs:Structural-damage_Cracking_Cracking-in-cross-vault-or-dome_Crack-pattern-17' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-cross-vault-or-dome_Crack-pattern-17' },
                    { label: 'mdcs:Structural-damage_Cracking_Phenomena-looking-like-cracks_Cracking-in-joint-crack-pattern-2' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Phenomena-looking-like-cracks_Cracking-in-joint-crack-pattern-2' },
                    { label: 'mdcs:Structural-damage_Cracking_Phenomena-looking-like-cracks_Cracking-in-unit-crack-pattern-1' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Phenomena-looking-like-cracks_Cracking-in-unit-crack-pattern-1' },
                    { label: 'mdcs:Structural-damage_Deformation_Deformation-in-arch-vault-or-dome-pattern-58' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-in-arch-vault-or-dome-pattern-58' },
                    { label: 'mdcs:Structural-damage_Deformation_Deformation-in-arch-vault-or-dome-pattern-59' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-in-arch-vault-or-dome-pattern-59' },
                    { label: 'mdcs:Structural-damage_Deformation_Deformation-in-plane-from-horizontal-pattern-53' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-in-plane-from-horizontal-pattern-53' },
                    { label: 'mdcs:Structural-damage_Deformation_Deformation-in-plane-from-horizontal-pattern-54' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-in-plane-from-horizontal-pattern-54' },
                    { label: 'mdcs:Structural-damage_Deformation_Deformation-in-plane-from-horizontal-pattern-55' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-in-plane-from-horizontal-pattern-55' },
                    { label: 'mdcs:Structural-damage_Deformation_Deformation-in-plane-from-horizontal-pattern-56' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-in-plane-from-horizontal-pattern-56' },
                    { label: 'mdcs:Structural-damage_Deformation_Deformation-in-plane-from-vertical-pattern-52' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-in-plane-from-vertical-pattern-52' },
                    { label: 'mdcs:Structural-damage_Deformation_Deformation-in-plane-from-vertical-pattern-53' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-in-plane-from-vertical-pattern-53' },
                    { label: 'mdcs:Structural-damage_Deformation_Deformation-out-of-plane-at-bottom-pattern-57' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-out-of-plane-at-bottom-pattern-57' },
                    { label: 'mdcs:Structural-damage_Deformation_Deformation-out-of-plane-halfway-height-pattern-55' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-out-of-plane-halfway-height-pattern-55' },
                    { label: 'mdcs:Structural-damage_Deformation_Deformation-out-of-plane-inward-pattern-56' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-out-of-plane-inward-pattern-56' },
                    { label: 'mdcs:Structural-damage_Deformation_Deformation-out-of-plane-pattern-54' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-out-of-plane-pattern-54' },
                    { label: 'mdcs:Structural-damage_Tilt' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Tilt' },                    
                ]
            },
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        },
        //---------depth 2------------

        dataset_resource: {
            'http://ld-r.org/users': {
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#User': {
                    treatAsResourceType: 1,
                    resourceReactor: ['UserResource']
                }
			},
            'http://ld-r.org/mappings': {
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#CSVMapping' :{
                    treatAsResourceType: 1,
                    resourceReactor: ['CSVMappingResource']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#CustomMapping' :{
                    treatAsResourceType: 1,
                    objectIEditor: ['PrefixBasedInput'],
                    objectIViewer: ['PrefixBasedView']
                }
            }
        },
        dataset_property: {
            // MB: added for MDCS dataset
            'https://mynamedgraph/mdcs': {
                //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                // MB: only for MDCS editing
                'http://www.w3.org/2000/01/rdf-schema#subClassOf': {
                    label: ['rdfs:subClassOf'],
                    hint: ['Use this property to refer back to an existing MDCS class that this class extends'],
                    allowPropertyDelete: 0, // MB: inferred so cannot be deleted 
                    allowNewValue: 0, // MB: inferred so should not be extended manually
                    objectIEditor: ['BasicOptionInput'], // prefixes cannot be used for user defined value
                    objectIViewer: ['BasicOptionView'],
                    allowUserDefinedValue: 0, //  MB: no, it should be one from the list, no other
                    options: [ // MB: add all MDCS classes (leaves and intermediates) from dot:ClassifiedDamage
                        { label: 'dot:ClassifiedDamage' , value: 'https://w3id.org/dot#ClassifiedDamage' },
                        // auto generated from MDCS classes
                        { label: 'mdcs:Brick-damage' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage' },
                        { label: 'mdcs:Brick-damage_Biological-growth' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Biological-growth' },
                        { label: 'mdcs:Brick-damage_Biological-growth_Algae' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Biological-growth_Algae' },
                        { label: 'mdcs:Brick-damage_Biological-growth_Higher-plants' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Biological-growth_Higher-plants' },
                        { label: 'mdcs:Brick-damage_Biological-growth_Lichens' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Biological-growth_Lichens' },
                        { label: 'mdcs:Brick-damage_Biological-growth_Liverworts' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Biological-growth_Liverworts' },
                        { label: 'mdcs:Brick-damage_Biological-growth_Mosses' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Biological-growth_Mosses' },
                        { label: 'mdcs:Brick-damage_Biological-growth_Moulds' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Biological-growth_Moulds' },
                        { label: 'mdcs:Brick-damage_Cracking' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Cracking' },
                        { label: 'mdcs:Brick-damage_Cracking_Crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Cracking_Crack' },
                        { label: 'mdcs:Brick-damage_Cracking_CrazingCraquele' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Cracking_CrazingCraquele' },
                        { label: 'mdcs:Brick-damage_Cracking_Hair-crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Cracking_Hair-crack' },
                        { label: 'mdcs:Brick-damage_Cracking_Star-crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Cracking_Star-crack' },
                        { label: 'mdcs:Brick-damage_Deformation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Deformation' },
                        { label: 'mdcs:Brick-damage_Deformation_Bending' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Deformation_Bending' },
                        { label: 'mdcs:Brick-damage_Deformation_Bulging' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Deformation_Bulging' },
                        { label: 'mdcs:Brick-damage_Deformation_Displacement' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Deformation_Displacement' },
                        { label: 'mdcs:Brick-damage_Deformation_Misalignment' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Deformation_Misalignment' },
                        { label: 'mdcs:Brick-damage_Deformation_Vertical-deviation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Deformation_Vertical-deviation' },
                        { label: 'mdcs:Brick-damage_Disintegration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration' },
                        { label: 'mdcs:Brick-damage_Disintegration_Detachment' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Detachment' },
                        { label: 'mdcs:Brick-damage_Disintegration_Detachment_Blistering-paint-coating' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Detachment_Blistering-paint-coating' },
                        { label: 'mdcs:Brick-damage_Disintegration_Detachment_Loss-of-adhesion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Detachment_Loss-of-adhesion' },
                        { label: 'mdcs:Brick-damage_Disintegration_Detachment_Peeling-paint' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Detachment_Peeling-paint' },
                        { label: 'mdcs:Brick-damage_Disintegration_Layering' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Layering' },
                        { label: 'mdcs:Brick-damage_Disintegration_Layering_Delamination' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Layering_Delamination' },
                        { label: 'mdcs:Brick-damage_Disintegration_Layering_Exfoliation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Layering_Exfoliation' },
                        { label: 'mdcs:Brick-damage_Disintegration_Layering_Scaling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Layering_Scaling' },
                        { label: 'mdcs:Brick-damage_Disintegration_Layering_Spalling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Layering_Spalling' },
                        { label: 'mdcs:Brick-damage_Disintegration_Loss-of-cohesion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Loss-of-cohesion' },
                        { label: 'mdcs:Brick-damage_Disintegration_Loss-of-cohesion_Alveolization' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Loss-of-cohesion_Alveolization' },
                        { label: 'mdcs:Brick-damage_Disintegration_Loss-of-cohesion_Brick-blistering' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Loss-of-cohesion_Brick-blistering' },
                        { label: 'mdcs:Brick-damage_Disintegration_Loss-of-cohesion_Cratering' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Loss-of-cohesion_Cratering' },
                        { label: 'mdcs:Brick-damage_Disintegration_Loss-of-cohesion_Crumbling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Loss-of-cohesion_Crumbling' },
                        { label: 'mdcs:Brick-damage_Disintegration_Loss-of-cohesion_Erosion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Loss-of-cohesion_Erosion' },
                        { label: 'mdcs:Brick-damage_Disintegration_Loss-of-cohesion_Powdering' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Disintegration_Loss-of-cohesion_Powdering' },
                        { label: 'mdcs:Brick-damage_Lacuna' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Lacuna' },
                        { label: 'mdcs:Brick-damage_Mechanical-damage' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Mechanical-damage' },
                        { label: 'mdcs:Brick-damage_Mechanical-damage_Chipping' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Mechanical-damage_Chipping' },
                        { label: 'mdcs:Brick-damage_Mechanical-damage_Cut-incision' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Mechanical-damage_Cut-incision' },
                        { label: 'mdcs:Brick-damage_Mechanical-damage_Mechanical-damage-general' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Mechanical-damage_Mechanical-damage-general' },
                        { label: 'mdcs:Brick-damage_Mechanical-damage_Perforation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Mechanical-damage_Perforation' },
                        { label: 'mdcs:Brick-damage_Mechanical-damage_Scratch' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Mechanical-damage_Scratch' },
                        { label: 'mdcs:Brick-damage_Mechanical-damage_Splitting' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Mechanical-damage_Splitting' },
                        { label: 'mdcs:Brick-damage_Surface-change' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change' },
                        { label: 'mdcs:Brick-damage_Surface-change_Chromatic-alteration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Chromatic-alteration' },
                        { label: 'mdcs:Brick-damage_Surface-change_Chromatic-alteration_Moist-spots-or-moist-zones' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Chromatic-alteration_Moist-spots-or-moist-zones' },
                        { label: 'mdcs:Brick-damage_Surface-change_Chromatic-alteration_Staining' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Chromatic-alteration_Staining' },
                        { label: 'mdcs:Brick-damage_Surface-change_Deposit' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Deposit' },
                        { label: 'mdcs:Brick-damage_Surface-change_Deposit_Crypto-florescence' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Deposit_Crypto-florescence' },
                        { label: 'mdcs:Brick-damage_Surface-change_Deposit_Efflorescence' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Deposit_Efflorescence' },
                        { label: 'mdcs:Brick-damage_Surface-change_Deposit_Encrustation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Deposit_Encrustation' },
                        { label: 'mdcs:Brick-damage_Surface-change_Deposit_Graffiti' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Deposit_Graffiti' },
                        { label: 'mdcs:Brick-damage_Surface-change_Deposit_Soiling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Deposit_Soiling' },
                        { label: 'mdcs:Brick-damage_Surface-change_Transformation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Transformation' },
                        { label: 'mdcs:Brick-damage_Surface-change_Transformation_Crust' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Transformation_Crust' },
                        { label: 'mdcs:Brick-damage_Surface-change_Transformation_Patina' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Brick-damage_Surface-change_Transformation_Patina' },
                        { label: 'mdcs:Concrete-damage' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Biological-growth' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Biological-growth' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Biological-growth_Algae' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Biological-growth_Algae' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Biological-growth_Biofilm' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Biological-growth_Biofilm' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Biological-growth_Higher-plants' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Biological-growth_Higher-plants' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Biological-growth_Lichens' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Biological-growth_Lichens' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Biological-growth_Liverworts' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Biological-growth_Liverworts' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Biological-growth_Mosses' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Biological-growth_Mosses' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Biological-growth_Moulds' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Biological-growth_Moulds' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Cracks' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Cracks' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Cracks_Interconnected-cracks' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Cracks_Interconnected-cracks' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Cracks_Interconnected-cracks_Crazing' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Cracks_Interconnected-cracks_Crazing' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Cracks_Interconnected-cracks_Geometric-pattern' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Cracks_Interconnected-cracks_Geometric-pattern' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Cracks_Interconnected-cracks_Map-cracking' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Cracks_Interconnected-cracks_Map-cracking' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Cracks_Non-connected-cracks' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Cracks_Non-connected-cracks' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Cracks_Non-connected-cracks_Individual-crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Cracks_Non-connected-cracks_Individual-crack' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Cracks_Non-connected-cracks_Parallel-cracks' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Cracks_Non-connected-cracks_Parallel-cracks' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Deformation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Deformation' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Deformation_Bending' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Deformation_Bending' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Deformation_Displacement' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Deformation_Displacement' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Disintegration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Disintegration' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Disintegration_Layering' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Disintegration_Layering' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Disintegration_Layering_Exfoliation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Disintegration_Layering_Exfoliation' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Disintegration_Layering_Scaling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Disintegration_Layering_Scaling' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Disintegration_Layering_Spalling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Disintegration_Layering_Spalling' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Disintegration_Loss-of-cohesion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Disintegration_Loss-of-cohesion' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Disintegration_Loss-of-cohesion_Crumbling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Disintegration_Loss-of-cohesion_Crumbling' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Disintegration_Loss-of-cohesion_Dusting' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Disintegration_Loss-of-cohesion_Dusting' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Disintegration_Loss-of-cohesion_Erosion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Disintegration_Loss-of-cohesion_Erosion' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Disintegration_Loss-of-cohesion_Pop-outs' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Disintegration_Loss-of-cohesion_Pop-outs' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Mechanical-damage-general' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Mechanical-damage-general' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Chromatic-alteration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Chromatic-alteration' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Chromatic-alteration_Discolouration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Chromatic-alteration_Discolouration' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Chromatic-alteration_Fading' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Chromatic-alteration_Fading' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Chromatic-alteration_Linear-colour-change' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Chromatic-alteration_Linear-colour-change' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Chromatic-alteration_Moist-spots' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Chromatic-alteration_Moist-spots' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Efflorescence' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Efflorescence' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Encrustation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Encrustation' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Graffiti' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Graffiti' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Soiling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Soiling' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Staining' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Deposit_Staining' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Superficial-Irregularities' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Superficial-Irregularities' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Superficial-Irregularities_Inhomogeneity' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Superficial-Irregularities_Inhomogeneity' },
                        { label: 'mdcs:Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Superficial-Irregularities_Voids' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-concrete_Surface-changes-and-blemishes_Superficial-Irregularities_Voids' },
                        { label: 'mdcs:Concrete-damage_Damage-to-reinforcement' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-reinforcement' },
                        { label: 'mdcs:Concrete-damage_Damage-to-reinforcement_Corrosion-of-reinforcement' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-reinforcement_Corrosion-of-reinforcement' },
                        { label: 'mdcs:Concrete-damage_Damage-to-reinforcement_Corrosion-of-reinforcement_Loss-of-rebar-diameter' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-reinforcement_Corrosion-of-reinforcement_Loss-of-rebar-diameter' },
                        { label: 'mdcs:Concrete-damage_Damage-to-reinforcement_Corrosion-of-reinforcement_Pitting' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-reinforcement_Corrosion-of-reinforcement_Pitting' },
                        { label: 'mdcs:Concrete-damage_Damage-to-reinforcement_Corrosion-of-reinforcement_Rust-layers' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-reinforcement_Corrosion-of-reinforcement_Rust-layers' },
                        { label: 'mdcs:Concrete-damage_Damage-to-reinforcement_Deformation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Damage-to-reinforcement_Deformation' },
                        { label: 'mdcs:Concrete-damage_Lacuna' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Concrete-damage_Lacuna' },
                        { label: 'mdcs:Mortar-damage' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage' },
                        { label: 'mdcs:Mortar-damage_Biological-growth' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Biological-growth' },
                        { label: 'mdcs:Mortar-damage_Biological-growth_Algae' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Biological-growth_Algae' },
                        { label: 'mdcs:Mortar-damage_Biological-growth_Higher-plants' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Biological-growth_Higher-plants' },
                        { label: 'mdcs:Mortar-damage_Biological-growth_Lichens' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Biological-growth_Lichens' },
                        { label: 'mdcs:Mortar-damage_Biological-growth_Liverworts' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Biological-growth_Liverworts' },
                        { label: 'mdcs:Mortar-damage_Biological-growth_Mosses' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Biological-growth_Mosses' },
                        { label: 'mdcs:Mortar-damage_Cracking' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Cracking' },
                        { label: 'mdcs:Mortar-damage_Cracking_Crazing-Craquele' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Cracking_Crazing-Craquele' },
                        { label: 'mdcs:Mortar-damage_Cracking_Hair-crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Cracking_Hair-crack' },
                        { label: 'mdcs:Mortar-damage_Disintegration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration' },
                        { label: 'mdcs:Mortar-damage_Disintegration_Detachement' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Detachement' },
                        { label: 'mdcs:Mortar-damage_Disintegration_Detachement_Blistering-paint-coating' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Detachement_Blistering-paint-coating' },
                        { label: 'mdcs:Mortar-damage_Disintegration_Detachement_Loss-of-adhesion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Detachement_Loss-of-adhesion' },
                        { label: 'mdcs:Mortar-damage_Disintegration_Detachement_Peeling-paint-coating' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Detachement_Peeling-paint-coating' },
                        { label: 'mdcs:Mortar-damage_Disintegration_Detachement_Push-out-pointing' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Detachement_Push-out-pointing' },
                        { label: 'mdcs:Mortar-damage_Disintegration_Layering' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Layering' },
                        { label: 'mdcs:Mortar-damage_Disintegration_Layering_Exfoliation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Layering_Exfoliation' },
                        { label: 'mdcs:Mortar-damage_Disintegration_Loss-of-cohesion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Loss-of-cohesion' },
                        { label: 'mdcs:Mortar-damage_Disintegration_Loss-of-cohesion_Alveolisation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Loss-of-cohesion_Alveolisation' },
                        { label: 'mdcs:Mortar-damage_Disintegration_Loss-of-cohesion_Bursting' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Loss-of-cohesion_Bursting' },
                        { label: 'mdcs:Mortar-damage_Disintegration_Loss-of-cohesion_Crumbling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Loss-of-cohesion_Crumbling' },
                        { label: 'mdcs:Mortar-damage_Disintegration_Loss-of-cohesion_Erosion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Loss-of-cohesion_Erosion' },
                        { label: 'mdcs:Mortar-damage_Disintegration_Loss-of-cohesion_Powdering' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Loss-of-cohesion_Powdering' },
                        { label: 'mdcs:Mortar-damage_Disintegration_Loss-of-cohesion_Sanding' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Loss-of-cohesion_Sanding' },
                        { label: 'mdcs:Mortar-damage_Disintegration_Loss-of-cohesion_Voids' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Disintegration_Loss-of-cohesion_Voids' },
                        { label: 'mdcs:Mortar-damage_Lacuna' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Lacuna' },
                        { label: 'mdcs:Mortar-damage_Mechanical-damage' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Mechanical-damage' },
                        { label: 'mdcs:Mortar-damage_Mechanical-damage_Cut-incision' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Mechanical-damage_Cut-incision' },
                        { label: 'mdcs:Mortar-damage_Mechanical-damage_Perforation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Mechanical-damage_Perforation' },
                        { label: 'mdcs:Mortar-damage_Mechanical-damage_Scratch' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Mechanical-damage_Scratch' },
                        { label: 'mdcs:Mortar-damage_Surface-change' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change' },
                        { label: 'mdcs:Mortar-damage_Surface-change_Chromatic-alteration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Chromatic-alteration' },
                        { label: 'mdcs:Mortar-damage_Surface-change_Chromatic-alteration_Discoloration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Chromatic-alteration_Discoloration' },
                        { label: 'mdcs:Mortar-damage_Surface-change_Chromatic-alteration_Moist-spots' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Chromatic-alteration_Moist-spots' },
                        { label: 'mdcs:Mortar-damage_Surface-change_Chromatic-alteration_Staining' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Chromatic-alteration_Staining' },
                        { label: 'mdcs:Mortar-damage_Surface-change_Deposit' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Deposit' },
                        { label: 'mdcs:Mortar-damage_Surface-change_Deposit_Crypto-florescence' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Deposit_Crypto-florescence' },
                        { label: 'mdcs:Mortar-damage_Surface-change_Deposit_Efflorescence' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Deposit_Efflorescence' },
                        { label: 'mdcs:Mortar-damage_Surface-change_Deposit_Encrustration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Deposit_Encrustration' },
                        { label: 'mdcs:Mortar-damage_Surface-change_Deposit_Graffiti' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Deposit_Graffiti' },
                        { label: 'mdcs:Mortar-damage_Surface-change_Deposit_Soiling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Deposit_Soiling' },
                        { label: 'mdcs:Mortar-damage_Surface-change_Transformation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Transformation' },
                        { label: 'mdcs:Mortar-damage_Surface-change_Transformation_Crust' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Transformation_Crust' },
                        { label: 'mdcs:Mortar-damage_Surface-change_Transformation_Patina' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Mortar-damage_Surface-change_Transformation_Patina' },
                        { label: 'mdcs:Natural-stone-damage' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage' },
                        { label: 'mdcs:Natural-stone-damage_Biological-growth' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Biological-growth' },
                        { label: 'mdcs:Natural-stone-damage_Biological-growth_Algae' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Biological-growth_Algae' },
                        { label: 'mdcs:Natural-stone-damage_Biological-growth_Higher-plants' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Biological-growth_Higher-plants' },
                        { label: 'mdcs:Natural-stone-damage_Biological-growth_Lichens' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Biological-growth_Lichens' },
                        { label: 'mdcs:Natural-stone-damage_Biological-growth_Liverworts' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Biological-growth_Liverworts' },
                        { label: 'mdcs:Natural-stone-damage_Biological-growth_Mosses' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Biological-growth_Mosses' },
                        { label: 'mdcs:Natural-stone-damage_Biological-growth_Moulds' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Biological-growth_Moulds' },
                        { label: 'mdcs:Natural-stone-damage_Cracking' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Cracking' },
                        { label: 'mdcs:Natural-stone-damage_Cracking_Crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Cracking_Crack' },
                        { label: 'mdcs:Natural-stone-damage_Cracking_Crazing-Craquele' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Cracking_Crazing-Craquele' },
                        { label: 'mdcs:Natural-stone-damage_Cracking_Diaclase' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Cracking_Diaclase' },
                        { label: 'mdcs:Natural-stone-damage_Cracking_Hair-crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Cracking_Hair-crack' },
                        { label: 'mdcs:Natural-stone-damage_Cracking_Star-crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Cracking_Star-crack' },
                        { label: 'mdcs:Natural-stone-damage_Deformation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Deformation' },
                        { label: 'mdcs:Natural-stone-damage_Deformation_Bending' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Deformation_Bending' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Detachment' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Detachment' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Detachment_Blistering-paint-coating' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Detachment_Blistering-paint-coating' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Detachment_Loss-of-adhesion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Detachment_Loss-of-adhesion' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Detachment_Peeling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Detachment_Peeling' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Detachment_Push-out-pointing' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Detachment_Push-out-pointing' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Layering' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Layering' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Layering_Delamination' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Layering_Delamination' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Layering_Exfoliation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Layering_Exfoliation' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Layering_Scaling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Layering_Scaling' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Layering_Spalling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Layering_Spalling' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Chalking' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Chalking' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Crumbling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Crumbling' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Erosion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Erosion' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Erosion_Alveolization' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Erosion_Alveolization' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Erosion_Selective-weathering' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Erosion_Selective-weathering' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Erosion_Wearing' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Erosion_Wearing' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Powdering' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Powdering' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Sanding' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Sanding' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Stylolites' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Stylolites' },
                        { label: 'mdcs:Natural-stone-damage_Disintegration_Loss-of-cohesion_Sugaring' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Disintegration_Loss-of-cohesion_Sugaring' },
                        { label: 'mdcs:Natural-stone-damage_Lacuna' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Lacuna' },
                        { label: 'mdcs:Natural-stone-damage_Mechanical-damage' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Mechanical-damage' },
                        { label: 'mdcs:Natural-stone-damage_Mechanical-damage_Chipping' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Mechanical-damage_Chipping' },
                        { label: 'mdcs:Natural-stone-damage_Mechanical-damage_Cut-incision' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Mechanical-damage_Cut-incision' },
                        { label: 'mdcs:Natural-stone-damage_Mechanical-damage_Mechanical-damage-general' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Mechanical-damage_Mechanical-damage-general' },
                        { label: 'mdcs:Natural-stone-damage_Mechanical-damage_Perforation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Mechanical-damage_Perforation' },
                        { label: 'mdcs:Natural-stone-damage_Mechanical-damage_Scratch' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Mechanical-damage_Scratch' },
                        { label: 'mdcs:Natural-stone-damage_Mechanical-damage_Splitting' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Mechanical-damage_Splitting' },
                        { label: 'mdcs:Natural-stone-damage_Surface-change' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change' },
                        { label: 'mdcs:Natural-stone-damage_Surface-change_Chromatic-alteration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Chromatic-alteration' },
                        { label: 'mdcs:Natural-stone-damage_Surface-change_Chromatic-alteration_Fading' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Chromatic-alteration_Fading' },
                        { label: 'mdcs:Natural-stone-damage_Surface-change_Chromatic-alteration_Moist-spots-or-moist-zones' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Chromatic-alteration_Moist-spots-or-moist-zones' },
                        { label: 'mdcs:Natural-stone-damage_Surface-change_Chromatic-alteration_Staining' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Chromatic-alteration_Staining' },
                        { label: 'mdcs:Natural-stone-damage_Surface-change_Deposit' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Deposit' },
                        { label: 'mdcs:Natural-stone-damage_Surface-change_Deposit_Crypto-florescence' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Deposit_Crypto-florescence' },
                        { label: 'mdcs:Natural-stone-damage_Surface-change_Deposit_Efflorescence' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Deposit_Efflorescence' },
                        { label: 'mdcs:Natural-stone-damage_Surface-change_Deposit_Encrustration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Deposit_Encrustration' },
                        { label: 'mdcs:Natural-stone-damage_Surface-change_Deposit_Graffiti' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Deposit_Graffiti' },
                        { label: 'mdcs:Natural-stone-damage_Surface-change_Deposit_Soiling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Deposit_Soiling' },
                        { label: 'mdcs:Natural-stone-damage_Surface-change_Transformation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Transformation' },
                        { label: 'mdcs:Natural-stone-damage_Surface-change_Transformation_Crust' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Transformation_Crust' },
                        { label: 'mdcs:Natural-stone-damage_Surface-change_Transformation_Patina' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Natural-stone-damage_Surface-change_Transformation_Patina' },
                        { label: 'mdcs:Plaster-damage' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage' },
                        { label: 'mdcs:Plaster-damage_Biological-growth' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Biological-growth' },
                        { label: 'mdcs:Plaster-damage_Biological-growth_Algae' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Biological-growth_Algae' },
                        { label: 'mdcs:Plaster-damage_Biological-growth_Lichens' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Biological-growth_Lichens' },
                        { label: 'mdcs:Plaster-damage_Biological-growth_Mosses' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Biological-growth_Mosses' },
                        { label: 'mdcs:Plaster-damage_Biological-growth_Moulds' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Biological-growth_Moulds' },
                        { label: 'mdcs:Plaster-damage_Cracking' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Cracking' },
                        { label: 'mdcs:Plaster-damage_Cracking_Crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Cracking_Crack' },
                        { label: 'mdcs:Plaster-damage_Cracking_Crazing-Craquele' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Cracking_Crazing-Craquele' },
                        { label: 'mdcs:Plaster-damage_Cracking_Hair-crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Cracking_Hair-crack' },
                        { label: 'mdcs:Plaster-damage_Cracking_Star-crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Cracking_Star-crack' },
                        { label: 'mdcs:Plaster-damage_Deformation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Deformation' },
                        { label: 'mdcs:Plaster-damage_Deformation_Bulging' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Deformation_Bulging' },
                        { label: 'mdcs:Plaster-damage_Disintegration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration' },
                        { label: 'mdcs:Plaster-damage_Disintegration_Detachment' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Detachment' },
                        { label: 'mdcs:Plaster-damage_Disintegration_Detachment_Blistering-paint' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Detachment_Blistering-paint' },
                        { label: 'mdcs:Plaster-damage_Disintegration_Detachment_Loss-of-adhesion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Detachment_Loss-of-adhesion' },
                        { label: 'mdcs:Plaster-damage_Disintegration_Detachment_Peeling-of-paint-coating' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Detachment_Peeling-of-paint-coating' },
                        { label: 'mdcs:Plaster-damage_Disintegration_Layering' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Layering' },
                        { label: 'mdcs:Plaster-damage_Disintegration_Layering_Delamination' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Layering_Delamination' },
                        { label: 'mdcs:Plaster-damage_Disintegration_Layering_Exfoliation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Layering_Exfoliation' },
                        { label: 'mdcs:Plaster-damage_Disintegration_Layering_Scaling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Layering_Scaling' },
                        { label: 'mdcs:Plaster-damage_Disintegration_Layering_Spalling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Layering_Spalling' },
                        { label: 'mdcs:Plaster-damage_Disintegration_Loss-of-cohesion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Loss-of-cohesion' },
                        { label: 'mdcs:Plaster-damage_Disintegration_Loss-of-cohesion_Alveolization' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Loss-of-cohesion_Alveolization' },
                        { label: 'mdcs:Plaster-damage_Disintegration_Loss-of-cohesion_Bursting' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Loss-of-cohesion_Bursting' },
                        { label: 'mdcs:Plaster-damage_Disintegration_Loss-of-cohesion_Chalking' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Loss-of-cohesion_Chalking' },
                        { label: 'mdcs:Plaster-damage_Disintegration_Loss-of-cohesion_Cratering-paint' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Loss-of-cohesion_Cratering-paint' },
                        { label: 'mdcs:Plaster-damage_Disintegration_Loss-of-cohesion_Crumbling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Loss-of-cohesion_Crumbling' },
                        { label: 'mdcs:Plaster-damage_Disintegration_Loss-of-cohesion_Erosion' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Loss-of-cohesion_Erosion' },
                        { label: 'mdcs:Plaster-damage_Disintegration_Loss-of-cohesion_Sanding' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Disintegration_Loss-of-cohesion_Sanding' },
                        { label: 'mdcs:Plaster-damage_Lacuna' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Lacuna' },
                        { label: 'mdcs:Plaster-damage_Mechanical-damage' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Mechanical-damage' },
                        { label: 'mdcs:Plaster-damage_Mechanical-damage_Mechanical-damage-general' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Mechanical-damage_Mechanical-damage-general' },
                        { label: 'mdcs:Plaster-damage_Mechanical-damage_Perforation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Mechanical-damage_Perforation' },
                        { label: 'mdcs:Plaster-damage_Surface-change' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change' },
                        { label: 'mdcs:Plaster-damage_Surface-change_Chromatic-alteration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Chromatic-alteration' },
                        { label: 'mdcs:Plaster-damage_Surface-change_Chromatic-alteration_Discoloration' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Chromatic-alteration_Discoloration' },
                        { label: 'mdcs:Plaster-damage_Surface-change_Chromatic-alteration_Fading' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Chromatic-alteration_Fading' },
                        { label: 'mdcs:Plaster-damage_Surface-change_Chromatic-alteration_Moist-spots' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Chromatic-alteration_Moist-spots' },
                        { label: 'mdcs:Plaster-damage_Surface-change_Chromatic-alteration_Staining' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Chromatic-alteration_Staining' },
                        { label: 'mdcs:Plaster-damage_Surface-change_Deposit' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Deposit' },
                        { label: 'mdcs:Plaster-damage_Surface-change_Deposit_Crypto-florescence' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Deposit_Crypto-florescence' },
                        { label: 'mdcs:Plaster-damage_Surface-change_Deposit_Efflorescence' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Deposit_Efflorescence' },
                        { label: 'mdcs:Plaster-damage_Surface-change_Deposit_Encrustation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Deposit_Encrustation' },
                        { label: 'mdcs:Plaster-damage_Surface-change_Deposit_Graffiti' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Deposit_Graffiti' },
                        { label: 'mdcs:Plaster-damage_Surface-change_Deposit_Soiling' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Deposit_Soiling' },
                        { label: 'mdcs:Plaster-damage_Surface-change_Transformation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Transformation' },
                        { label: 'mdcs:Plaster-damage_Surface-change_Transformation_Crust' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Plaster-damage_Surface-change_Transformation_Crust' },
                        { label: 'mdcs:Structural-damage' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage' },
                        { label: 'mdcs:Structural-damage_Cracking' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-10' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-10' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-11' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-11' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-12' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-12' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-13' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-13' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-14' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-14' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-3' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-3' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-4' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-4' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-5' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-5' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-6' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-6' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-7' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-7' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-8' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-8' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-9' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-arch-or-barrel-vault_Crack-pattern-9' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-36' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-36' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-37' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-37' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-38' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-38' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-39' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-39' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-40' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-40' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-41' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-41' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-42' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-42' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-43' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-43' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-44' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-44' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-45' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-45' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-46' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-46' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-47' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-47' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-48' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-48' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-49' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-49' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-50' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-50' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-51' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Combination-of-cracks-in-different-directions_Combination-of-Cracks-pattern-51' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-30' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-30' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-31' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-31' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-32' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-32' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-33' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-33' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-34' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-34' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-35' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Diagonal-crack-in-one-direction_Diagonal-Crack-pattern-35' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Horizontal-crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Horizontal-crack' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Horizontal-crack_Horizontal-Crack-pattern-18' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Horizontal-crack_Horizontal-Crack-pattern-18' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Horizontal-crack_Horizontal-Crack-pattern-19' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Horizontal-crack_Horizontal-Crack-pattern-19' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Horizontal-crack_Horizontal-Crack-pattern-20' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Horizontal-crack_Horizontal-Crack-pattern-20' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Horizontal-crack_Horizontal-Crack-pattern-21' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Horizontal-crack_Horizontal-Crack-pattern-21' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Crack-pattern-22' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Crack-pattern-22' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Crack-pattern-23' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Crack-pattern-23' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Crack-pattern-24' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Crack-pattern-24' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Crack-pattern-28' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Crack-pattern-28' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Cracks-pattern-25' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Cracks-pattern-25' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Cracks-pattern-26' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Cracks-pattern-26' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Cracks-pattern-27' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Cracks-pattern-27' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Cracks-pattern-29' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-column-or-wall_Vertical-crack_Vertical-Cracks-pattern-29' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-cross-vault-or-dome' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-cross-vault-or-dome' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-cross-vault-or-dome_Crack-pattern-15' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-cross-vault-or-dome_Crack-pattern-15' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-cross-vault-or-dome_Crack-pattern-16' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-cross-vault-or-dome_Crack-pattern-16' },
                        { label: 'mdcs:Structural-damage_Cracking_Cracking-in-cross-vault-or-dome_Crack-pattern-17' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Cracking-in-cross-vault-or-dome_Crack-pattern-17' },
                        { label: 'mdcs:Structural-damage_Cracking_Phenomena-looking-like-cracks' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Phenomena-looking-like-cracks' },
                        { label: 'mdcs:Structural-damage_Cracking_Phenomena-looking-like-cracks_Cracking-in-joint-crack-pattern-2' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Phenomena-looking-like-cracks_Cracking-in-joint-crack-pattern-2' },
                        { label: 'mdcs:Structural-damage_Cracking_Phenomena-looking-like-cracks_Cracking-in-unit-crack-pattern-1' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Cracking_Phenomena-looking-like-cracks_Cracking-in-unit-crack-pattern-1' },
                        { label: 'mdcs:Structural-damage_Deformation' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation' },
                        { label: 'mdcs:Structural-damage_Deformation_Deformation-in-arch-vault-or-dome-pattern-58' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-in-arch-vault-or-dome-pattern-58' },
                        { label: 'mdcs:Structural-damage_Deformation_Deformation-in-arch-vault-or-dome-pattern-59' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-in-arch-vault-or-dome-pattern-59' },
                        { label: 'mdcs:Structural-damage_Deformation_Deformation-in-plane-from-horizontal-pattern-53' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-in-plane-from-horizontal-pattern-53' },
                        { label: 'mdcs:Structural-damage_Deformation_Deformation-in-plane-from-horizontal-pattern-54' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-in-plane-from-horizontal-pattern-54' },
                        { label: 'mdcs:Structural-damage_Deformation_Deformation-in-plane-from-horizontal-pattern-55' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-in-plane-from-horizontal-pattern-55' },
                        { label: 'mdcs:Structural-damage_Deformation_Deformation-in-plane-from-horizontal-pattern-56' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-in-plane-from-horizontal-pattern-56' },
                        { label: 'mdcs:Structural-damage_Deformation_Deformation-in-plane-from-vertical-pattern-52' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-in-plane-from-vertical-pattern-52' },
                        { label: 'mdcs:Structural-damage_Deformation_Deformation-in-plane-from-vertical-pattern-53' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-in-plane-from-vertical-pattern-53' },
                        { label: 'mdcs:Structural-damage_Deformation_Deformation-out-of-plane-at-bottom-pattern-57' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-out-of-plane-at-bottom-pattern-57' },
                        { label: 'mdcs:Structural-damage_Deformation_Deformation-out-of-plane-halfway-height-pattern-55' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-out-of-plane-halfway-height-pattern-55' },
                        { label: 'mdcs:Structural-damage_Deformation_Deformation-out-of-plane-inward-pattern-56' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-out-of-plane-inward-pattern-56' },
                        { label: 'mdcs:Structural-damage_Deformation_Deformation-out-of-plane-pattern-54' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Deformation_Deformation-out-of-plane-pattern-54' },
                        { label: 'mdcs:Structural-damage_Tilt' , value: 'https://mdcs.monumentkennis.nl/damageatlas/ontology#Structural-damage_Tilt' },              
                   ],
                },
            },
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // MB: added for BEO dataset
            'https://mynamedgraph/beo':{
                // MB: only for BEO editing
                'http://www.w3.org/2000/01/rdf-schema#subClassOf':{
                    label: ['rdfs:subClassOf'],
                    hint: ['Use this property to refer back to an existing BEO class that this class extends'],
                    allowPropertyDelete: 0, // MB: inferred so cannot be deleted 
                    allowNewValue: 0, // MB: inferred so should not be extended manually
                    objectIEditor: ['BasicOptionInput'], // prefixes cannot be used for user defined value
                    objectIViewer: ['BasicOptionView'],
                    allowUserDefinedValue: 0, //  MB: no, it should be one from the list, no other
                    options: [ // MB: add all BEO classes (leaves and intermediates) from beo:BuildingElement in BEO
                        { label: 'beo:BuildingElement' , value: 'http://pi.pauwel.be/voc/buildingelement#BuildingElement' },
                        // auto generated from BEO classes
                        { label: 'beo:Beam' , value: 'http://pi.pauwel.be/voc/buildingelement#Beam' },
                        { label: 'beo:Beam-BEAM' , value: 'http://pi.pauwel.be/voc/buildingelement#Beam-BEAM' },
                        { label: 'beo:Beam-HOLLOWCORE' , value: 'http://pi.pauwel.be/voc/buildingelement#Beam-HOLLOWCORE' },
                        { label: 'beo:Beam-JOIST' , value: 'http://pi.pauwel.be/voc/buildingelement#Beam-JOIST' },
                        { label: 'beo:Beam-LINTEL' , value: 'http://pi.pauwel.be/voc/buildingelement#Beam-LINTEL' },
                        { label: 'beo:Beam-SPANDREL' , value: 'http://pi.pauwel.be/voc/buildingelement#Beam-SPANDREL' },
                        { label: 'beo:Beam-T_BEAM' , value: 'http://pi.pauwel.be/voc/buildingelement#Beam-T_BEAM' },
                        { label: 'beo:Chimney' , value: 'http://pi.pauwel.be/voc/buildingelement#Chimney' },
                        { label: 'beo:Column' , value: 'http://pi.pauwel.be/voc/buildingelement#Column' },
                        { label: 'beo:Column-COLUMN' , value: 'http://pi.pauwel.be/voc/buildingelement#Column-COLUMN' },
                        { label: 'beo:Column-PILASTER' , value: 'http://pi.pauwel.be/voc/buildingelement#Column-PILASTER' },
                        { label: 'beo:Covering' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering' },
                        { label: 'beo:Covering-CEILING' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-CEILING' },
                        { label: 'beo:Covering-CLADDING' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-CLADDING' },
                        { label: 'beo:Covering-FLOORING' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-FLOORING' },
                        { label: 'beo:Covering-INSULATION' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-INSULATION' },
                        { label: 'beo:Covering-MEMBRANE' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-MEMBRANE' },
                        { label: 'beo:Covering-MOLDING' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-MOLDING' },
                        { label: 'beo:Covering-ROOFING' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-ROOFING' },
                        { label: 'beo:Covering-SKIRTINGBOARD' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-SKIRTINGBOARD' },
                        { label: 'beo:Covering-SLEEVING' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-SLEEVING' },
                        { label: 'beo:Covering-WRAPPING' , value: 'http://pi.pauwel.be/voc/buildingelement#Covering-WRAPPING' },
                        { label: 'beo:CurtainWall' , value: 'http://pi.pauwel.be/voc/buildingelement#CurtainWall' },
                        { label: 'beo:Door' , value: 'http://pi.pauwel.be/voc/buildingelement#Door' },
                        { label: 'beo:Door-DOOR' , value: 'http://pi.pauwel.be/voc/buildingelement#Door-DOOR' },
                        { label: 'beo:Door-GATE' , value: 'http://pi.pauwel.be/voc/buildingelement#Door-GATE' },
                        { label: 'beo:Door-TRAPDOOR' , value: 'http://pi.pauwel.be/voc/buildingelement#Door-TRAPDOOR' },
                        { label: 'beo:Footing' , value: 'http://pi.pauwel.be/voc/buildingelement#Footing' },
                        { label: 'beo:Footing-CAISSON_FOUNDATION' , value: 'http://pi.pauwel.be/voc/buildingelement#Footing-CAISSON_FOUNDATION' },
                        { label: 'beo:Footing-FOOTING_BEAM' , value: 'http://pi.pauwel.be/voc/buildingelement#Footing-FOOTING_BEAM' },
                        { label: 'beo:Footing-PAD_FOOTING' , value: 'http://pi.pauwel.be/voc/buildingelement#Footing-PAD_FOOTING' },
                        { label: 'beo:Footing-PILE_CAP' , value: 'http://pi.pauwel.be/voc/buildingelement#Footing-PILE_CAP' },
                        { label: 'beo:Footing-STRIP_FOOTING' , value: 'http://pi.pauwel.be/voc/buildingelement#Footing-STRIP_FOOTING' },
                        { label: 'beo:Member' , value: 'http://pi.pauwel.be/voc/buildingelement#Member' },
                        { label: 'beo:Member-BRACE' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-BRACE' },
                        { label: 'beo:Member-CHORD' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-CHORD' },
                        { label: 'beo:Member-COLLAR' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-COLLAR' },
                        { label: 'beo:Member-MEMBER' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-MEMBER' },
                        { label: 'beo:Member-MULLION' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-MULLION' },
                        { label: 'beo:Member-PLATE' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-PLATE' },
                        { label: 'beo:Member-POST' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-POST' },
                        { label: 'beo:Member-PURLIN' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-PURLIN' },
                        { label: 'beo:Member-RAFTER' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-RAFTER' },
                        { label: 'beo:Member-STRINGER' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-STRINGER' },
                        { label: 'beo:Member-STRUT' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-STRUT' },
                        { label: 'beo:Member-STUD' , value: 'http://pi.pauwel.be/voc/buildingelement#Member-STUD' },
                        { label: 'beo:Pile' , value: 'http://pi.pauwel.be/voc/buildingelement#Pile' },
                        { label: 'beo:Pile-BORED' , value: 'http://pi.pauwel.be/voc/buildingelement#Pile-BORED' },
                        { label: 'beo:Pile-COHESION' , value: 'http://pi.pauwel.be/voc/buildingelement#Pile-COHESION' },
                        { label: 'beo:Pile-DRIVEN' , value: 'http://pi.pauwel.be/voc/buildingelement#Pile-DRIVEN' },
                        { label: 'beo:Pile-FRICTION' , value: 'http://pi.pauwel.be/voc/buildingelement#Pile-FRICTION' },
                        { label: 'beo:Pile-JETGROUTING' , value: 'http://pi.pauwel.be/voc/buildingelement#Pile-JETGROUTING' },
                        { label: 'beo:Pile-SUPPORT' , value: 'http://pi.pauwel.be/voc/buildingelement#Pile-SUPPORT' },
                        { label: 'beo:Plate' , value: 'http://pi.pauwel.be/voc/buildingelement#Plate' },
                        { label: 'beo:Plate-CURTAIN_PANEL' , value: 'http://pi.pauwel.be/voc/buildingelement#Plate-CURTAIN_PANEL' },
                        { label: 'beo:Plate-SHEET' , value: 'http://pi.pauwel.be/voc/buildingelement#Plate-SHEET' },
                        { label: 'beo:Railing' , value: 'http://pi.pauwel.be/voc/buildingelement#Railing' },
                        { label: 'beo:Railing-BALUSTRADE' , value: 'http://pi.pauwel.be/voc/buildingelement#Railing-BALUSTRADE' },
                        { label: 'beo:Railing-GUARDRAIL' , value: 'http://pi.pauwel.be/voc/buildingelement#Railing-GUARDRAIL' },
                        { label: 'beo:Railing-HANDRAIL' , value: 'http://pi.pauwel.be/voc/buildingelement#Railing-HANDRAIL' },
                        { label: 'beo:Ramp' , value: 'http://pi.pauwel.be/voc/buildingelement#Ramp' },
                        { label: 'beo:Ramp-HALF_TURN_RAMP' , value: 'http://pi.pauwel.be/voc/buildingelement#Ramp-HALF_TURN_RAMP' },
                        { label: 'beo:Ramp-QUARTER_TURN_RAMP' , value: 'http://pi.pauwel.be/voc/buildingelement#Ramp-QUARTER_TURN_RAMP' },
                        { label: 'beo:Ramp-SPIRAL_RAMP' , value: 'http://pi.pauwel.be/voc/buildingelement#Ramp-SPIRAL_RAMP' },
                        { label: 'beo:Ramp-STRAIGHT_RUN_RAMP' , value: 'http://pi.pauwel.be/voc/buildingelement#Ramp-STRAIGHT_RUN_RAMP' },
                        { label: 'beo:Ramp-TWO_QUARTER_TURN_RAMP' , value: 'http://pi.pauwel.be/voc/buildingelement#Ramp-TWO_QUARTER_TURN_RAMP' },
                        { label: 'beo:Ramp-TWO_STRAIGHT_RUN_RAMP' , value: 'http://pi.pauwel.be/voc/buildingelement#Ramp-TWO_STRAIGHT_RUN_RAMP' },
                        { label: 'beo:RampFlight' , value: 'http://pi.pauwel.be/voc/buildingelement#RampFlight' },
                        { label: 'beo:RampFlight-SPIRAL' , value: 'http://pi.pauwel.be/voc/buildingelement#RampFlight-SPIRAL' },
                        { label: 'beo:RampFlight-STRAIGHT' , value: 'http://pi.pauwel.be/voc/buildingelement#RampFlight-STRAIGHT' },
                        { label: 'beo:Roof' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof' },
                        { label: 'beo:Roof-BARREL_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-BARREL_ROOF' },
                        { label: 'beo:Roof-BUTTERFLY_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-BUTTERFLY_ROOF' },
                        { label: 'beo:Roof-DOME_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-DOME_ROOF' },
                        { label: 'beo:Roof-FLAT_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-FLAT_ROOF' },
                        { label: 'beo:Roof-FREEFORM' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-FREEFORM' },
                        { label: 'beo:Roof-GABLE_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-GABLE_ROOF' },
                        { label: 'beo:Roof-GAMBREL_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-GAMBREL_ROOF' },
                        { label: 'beo:Roof-HIPPED_GABLE_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-HIPPED_GABLE_ROOF' },
                        { label: 'beo:Roof-HIP_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-HIP_ROOF' },
                        { label: 'beo:Roof-MANSARD_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-MANSARD_ROOF' },
                        { label: 'beo:Roof-PAVILION_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-PAVILION_ROOF' },
                        { label: 'beo:Roof-RAINBOW_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-RAINBOW_ROOF' },
                        { label: 'beo:Roof-SHED_ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Roof-SHED_ROOF' },
                        { label: 'beo:ShadingDevice' , value: 'http://pi.pauwel.be/voc/buildingelement#ShadingDevice' },
                        { label: 'beo:ShadingDevice-AWNING' , value: 'http://pi.pauwel.be/voc/buildingelement#ShadingDevice-AWNING' },
                        { label: 'beo:ShadingDevice-JALOUSIE' , value: 'http://pi.pauwel.be/voc/buildingelement#ShadingDevice-JALOUSIE' },
                        { label: 'beo:ShadingDevice-SHUTTER' , value: 'http://pi.pauwel.be/voc/buildingelement#ShadingDevice-SHUTTER' },
                        { label: 'beo:Slab' , value: 'http://pi.pauwel.be/voc/buildingelement#Slab' },
                        { label: 'beo:Slab-BASESLAB' , value: 'http://pi.pauwel.be/voc/buildingelement#Slab-BASESLAB' },
                        { label: 'beo:Slab-FLOOR' , value: 'http://pi.pauwel.be/voc/buildingelement#Slab-FLOOR' },
                        { label: 'beo:Slab-LANDING' , value: 'http://pi.pauwel.be/voc/buildingelement#Slab-LANDING' },
                        { label: 'beo:Slab-ROOF' , value: 'http://pi.pauwel.be/voc/buildingelement#Slab-ROOF' },
                        { label: 'beo:Stair' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair' },
                        { label: 'beo:Stair-CURVED_RUN_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-CURVED_RUN_STAIR' },
                        { label: 'beo:Stair-DOUBLE_RETURN_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-DOUBLE_RETURN_STAIR' },
                        { label: 'beo:Stair-HALF_TURN_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-HALF_TURN_STAIR' },
                        { label: 'beo:Stair-HALF_WINDING_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-HALF_WINDING_STAIR' },
                        { label: 'beo:Stair-QUARTER_TURN_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-QUARTER_TURN_STAIR' },
                        { label: 'beo:Stair-QUARTER_WINDING_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-QUARTER_WINDING_STAIR' },
                        { label: 'beo:Stair-SPIRAL_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-SPIRAL_STAIR' },
                        { label: 'beo:Stair-STRAIGHT_RUN_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-STRAIGHT_RUN_STAIR' },
                        { label: 'beo:Stair-THREE_QUARTER_TURN_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-THREE_QUARTER_TURN_STAIR' },
                        { label: 'beo:Stair-THREE_QUARTER_WINDING_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-THREE_QUARTER_WINDING_STAIR' },
                        { label: 'beo:Stair-TWO_CURVED_RUN_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-TWO_CURVED_RUN_STAIR' },
                        { label: 'beo:Stair-TWO_QUARTER_TURN_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-TWO_QUARTER_TURN_STAIR' },
                        { label: 'beo:Stair-TWO_QUARTER_WINDING_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-TWO_QUARTER_WINDING_STAIR' },
                        { label: 'beo:Stair-TWO_STRAIGHT_RUN_STAIR' , value: 'http://pi.pauwel.be/voc/buildingelement#Stair-TWO_STRAIGHT_RUN_STAIR' },
                        { label: 'beo:StairFlight' , value: 'http://pi.pauwel.be/voc/buildingelement#StairFlight' },
                        { label: 'beo:StairFlight-CURVED' , value: 'http://pi.pauwel.be/voc/buildingelement#StairFlight-CURVED' },
                        { label: 'beo:StairFlight-FREEFORM' , value: 'http://pi.pauwel.be/voc/buildingelement#StairFlight-FREEFORM' },
                        { label: 'beo:StairFlight-SPIRAL' , value: 'http://pi.pauwel.be/voc/buildingelement#StairFlight-SPIRAL' },
                        { label: 'beo:StairFlight-STRAIGHT' , value: 'http://pi.pauwel.be/voc/buildingelement#StairFlight-STRAIGHT' },
                        { label: 'beo:StairFlight-WINDER' , value: 'http://pi.pauwel.be/voc/buildingelement#StairFlight-WINDER' },
                        { label: 'beo:Wall' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall' },
                        { label: 'beo:Wall-ELEMENTEDWALL' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall-ELEMENTEDWALL' },
                        { label: 'beo:Wall-MOVABLE' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall-MOVABLE' },
                        { label: 'beo:Wall-PARAPET' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall-PARAPET' },
                        { label: 'beo:Wall-PARTITIONING' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall-PARTITIONING' },
                        { label: 'beo:Wall-PLUMBINGWALL' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall-PLUMBINGWALL' },
                        { label: 'beo:Wall-POLYGONAL' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall-POLYGONAL' },
                        { label: 'beo:Wall-SHEAR' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall-SHEAR' },
                        { label: 'beo:Wall-SOLIDWALL' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall-SOLIDWALL' },
                        { label: 'beo:Wall-STANDARD' , value: 'http://pi.pauwel.be/voc/buildingelement#Wall-STANDARD' },
                        { label: 'beo:WallElementedCase' , value: 'http://pi.pauwel.be/voc/buildingelement#WallElementedCase' },
                        { label: 'beo:Window' , value: 'http://pi.pauwel.be/voc/buildingelement#Window' },
                        { label: 'beo:Window-LIGHTDOME' , value: 'http://pi.pauwel.be/voc/buildingelement#Window-LIGHTDOME' },
                        { label: 'beo:Window-SKYLIGHT' , value: 'http://pi.pauwel.be/voc/buildingelement#Window-SKYLIGHT' },
                        { label: 'beo:Window-WINDOW' , value: 'http://pi.pauwel.be/voc/buildingelement#Window-WINDOW' },
                    ],
                },
            },
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
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#templateResource': {
                    label: ['The Template Resource'],
                    hint: ['If set, this resource will be used as template for new resources.'],
                    allowNewValue: 0
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
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#protocol': {
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
                        {label: 'GraphDB', value: 'graphdb'},
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
            },
            //for mappings
            'http://ld-r.org/mappings': {
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#csvFile': {
                    readOnlyProperty: 1,
                    label: ['CSV File']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#skippedColumns': {
                    allowNewValue: 1,
                    allowPropertyDelete: 1,
                    label: ['Skipped Columns'],
                    hint: ['The selected columns will not be included in the generated RDF file.']
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#idColumn': {
                    label: ['ID Column'],
                    hint: ['A combination of this column and the resource prefix will be used to create URIs for the entities.']
                },
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    readOnlyProperty: 1,
                    isHidden: 1
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#entityType': {
                    objectIEditor: ['PrefixBasedInput'],
                    objectIViewer: ['PrefixBasedView'],
                    includeOnly: ['classes']
                }
            }
        },
        resource_property: {
            // MB: this doesn't work to overwrite the earlier definition of rdf:type (but works when edited at the first occurence of other properties => dynamic configs auto generated by other engine?)
            'https://w3id.org/bot#Element': { // won't work
            // 'https://mycompanydomain.org/project1/wall755': { // works for specific element
                treatAsResourceType: 1, // MB: the resources treated are all the ones of type bot:Element
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    //allowPropertyDelete: 0,
                    //label: ['rdf:type'], // MB: replaces prop URI
                    //hint: ['The type of an instance refers to its class, which is described in an ontology'],
                    //objectIViewer: ['PrefixBasedView'], // MB: overrides 'BasicIndividualView'
                    //objectIEditor: ['PrefixBasedInput'], // MB: overrides 'BasicIndividualInput'
                    allowNewValue: 1,
                    objectIEditor: ['BasicOptionInput'], // prefixes cannot be used for user defined value
                    objectIViewer: ['BasicOptionView'],
                    defaultValue: ['https://w3id.org/product/Wall'], // MB: best to include it in the list of options
                    options: [ // MB: list is not visible when creating the first property (bottom of the webpage) => also add in autocompletes.js
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
