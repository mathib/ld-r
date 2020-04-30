// This file was modified from its original version by Mathias Bonduel on 30th of April 2020

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
        //Example Faceted Browser for DBpedia universities
        'http://dbpedia.org/sparql': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type', 'http://dbpedia.org/ontology/country', 'http://dbpedia.org/property/established'
            ],
            config: {
                'http://dbpedia.org/property/established': {
                    label: ['Established Year']
                },
                'http://dbpedia.org/ontology/country': {
                    objectBrowser: ['TagListBrowser']
                }
			}
        },      
        // MB: facet search in LD-R dataset for MDCS editing  
        'https://mynamedgraph/mdcs': {
            list: [
                'http://www.w3.org/2000/01/rdf-schema#subClassOf','http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf',
                'http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf',
                'http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf',
                'http://purl.org/vocab/vann/example->http://www.arpenteur.org/ontology/Arpenteur.owl#hasFullFileName',
            ],
            config: {
                'http://www.w3.org/2000/01/rdf-schema#subClassOf':{
                    label: ['rdfs:subClassOf'],
                },
                'http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf':{
                    label: ['rdfs:subClassOf x 2'],
                },
                'http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf':{
                    label: ['rdfs:subClassOf x 3'],
                },
                'http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf':{
                    label: ['rdfs:subClassOf x 4'],
                },
                'http://purl.org/vocab/vann/example->http://www.arpenteur.org/ontology/Arpenteur.owl#hasFullFileName':{
                    label: ['vann:example => arp:hasFullFileName (picture)'],
                    hint: ['please filter first on subclasses of a certain type'],
                    objectIViewer: ['BasicImageView'], // MB: view image
                    imageWidth: 300, // MB: set image width (uniform results)
                }
			}
        },
        // MB: facet search for LD-R dataset for BEO editing
        'https://mynamedgraph/beo': {
            list: [
                'http://www.w3.org/2000/01/rdf-schema#subClassOf','http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf',
                'http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf',
                'http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf',
                'http://www.w3.org/2000/01/rdf-schema#seeAlso',
            ],
            config: {
                'http://www.w3.org/2000/01/rdf-schema#subClassOf':{
                    label: ['rdfs:subClassOf'],
                },
                'http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf':{
                    label: ['rdfs:subClassOf x 2'],
                },
                'http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf':{
                    label: ['rdfs:subClassOf x 3'],
                },
                'http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf->http://www.w3.org/2000/01/rdf-schema#subClassOf':{
                    label: ['rdfs:subClassOf x 4'],
                },
                'http://www.w3.org/2000/01/rdf-schema#seeAlso':{
                    label: ['rdfs:seeAlso'],
                    hint: ['ifcOWL classes that might be related to this class (often enum)'],
                }
			}
        },
        //MB: faceted search for main building dataset
        'https://modeling.building.org/mainData': {
            list: [
                // MB: category 1: General properties
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type','https://w3id.org/props#storeyElevation','https://w3id.org/props#storeyNumber','https://w3id.org/props#spaceNumber','https://w3id.org/props#hasMaterial','https://w3id.org/beo-extension#type','https://w3id.org/mdcs-extension#type',
                // MB: category 2: Regular BOT relations
                'https://w3id.org/bot#hasBuilding', 'https://w3id.org/bot#hasStorey', 'https://w3id.org/bot#hasSpace', 'https://w3id.org/bot#adjacentZone','https://w3id.org/bot#adjacentElement','https://w3id.org/bot#interfaceOf','https://w3id.org/bot#hasSubElement','https://w3id.org/bot#intersectsZone','https://w3id.org/bot#intersectingElement',
                // MB: category 3: BOT contains
                'https://w3id.org/bot#containsZone', 'https://w3id.org/bot#containsElement','https://w3id.org/bot#hasElement',
                // MB: category 4: Regular DOT relations
                'https://w3id.org/dot#hasDamageArea','https://w3id.org/dot#hasDamageElement','https://w3id.org/dot#hasDamage','https://w3id.org/dot#aggregatesDamageElement','https://w3id.org/dot#adjacentDamageElement','https://w3id.org/dot#hasDocumentation','https://w3id.org/dot#documentationFromInspection','https://w3id.org/dot#descriptionContent','https://w3id.org/dot#filePath','https://w3id.org/dot#coveredByInspection','https://w3id.org/dot#coveredInDocumentation','https://w3id.org/dot#hasInspector','https://w3id.org/dot#hasCausation',           
                // MB: category 5: OMG-FOG geometries
                'https://w3id.org/omg#hasGeometry','https://w3id.org/omg#hasGeometryState','https://w3id.org/omg#hasSimpleGeometryDescription','https://w3id.org/omg#isPartOfGeometry','https://w3id.org/omg#hasReferencedGeometryId','https://w3id.org/fog#hasReferencedContent',
                // MB: category 6: property chains
                'https://w3id.org/bot#containsElement->http://www.w3.org/1999/02/22-rdf-syntax-ns#type','https://w3id.org/bot#adjacentElement->http://www.w3.org/1999/02/22-rdf-syntax-ns#type','https://w3id.org/bot#containsZone->http://www.w3.org/1999/02/22-rdf-syntax-ns#type','https://w3id.org/bot#adjacentZone->http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'https://w3id.org/dot#hasDamage->https://w3id.org/mdcs-extension#type','https://w3id.org/omg#hasGeometry->https://w3id.org/omg#hasSimpleGeometryDescription','https://w3id.org/omg#hasGeometry->https://w3id.org/omg#hasGeometryState->https://w3id.org/omg#hasSimpleGeometryDescription',
                //'http://www.w3.org/2000/01/rdf-schema#seeAlso->[http://dbpedia.org/sparql>>default]http://purl.org/linguistics/gold/hypernym',
            ],
            displayQueries: 1, // MB: displays queries by clicking twice on the 'x' of 'x Page(s)' at bottom of results list
            config: {
                // MB: category 1: General properties
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type':{
                    category: ['General properties'],
                    objectBrowser: ['TagListBrowser'],
                    //objectIViewer: ['PrefixBasedView'], // MB: does not work together with TagListBrowser
                    //position: 1, MB: has no effect in categories
                    label: ['rdf:type'],
                },
                'https://w3id.org/props#storeyElevation': {
                    category: ['General properties'],
                    label: ['props:storeyElevation'],
                },
                'https://w3id.org/props#storeyNumber': {
                    category: ['General properties'],
                    label: ['props:storeyNumber'],
                },
                'https://w3id.org/props#spaceNumber': {
                    category: ['General properties'],
                    label: ['props:spaceNumber'],
                },
                'https://w3id.org/props#hasMaterial': {
                    category: ['General properties'],
                    objectBrowser: ['TagListBrowser'],
                    label: ['props:hasMaterial'],
                },
                'https://w3id.org/beo-extension#type': {
                    category: ['General properties'],
                    objectBrowser: ['TagListBrowser'],
                    label: ['ext-beo:type'],
                },
                'https://w3id.org/mdcs-extension#type': {
                    category: ['General properties'],
                    objectBrowser: ['TagListBrowser'],
                    label: ['ext-mdcs:type'],
                },
                // 'http://xmlns.com/foaf/0.1/isPrimaryTopicOf': {
                //     category: ['General properties'],
                //     label: ['foaf:isPrimaryTopicOf'],
                // },
                // 'http://xmlns.com/foaf/0.1/depiction': {
                //     category: ['General properties'],
                //     label: ['foaf:depiction'],
                //     objectIViewer: ['BasicImageView'],
                // },
                // category 2: Regular BOT relations
                'https://w3id.org/bot#hasBuilding': {
                    category: ['Regular BOT relations'],
                    label: ['bot:hasBuilding'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/bot#hasStorey': {
                    category: ['Regular BOT relations'],
                    label: ['bot:hasStorey'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/bot#hasSpace': {
                    category: ['Regular BOT relations'],
                    label: ['bot:hasSpace'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                }, 
                'https://w3id.org/bot#adjacentZone': {
                    category: ['Regular BOT relations'],
                    label: ['bot:adjacentZone'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/bot#adjacentElement': {
                    category: ['Regular BOT relations'],
                    label: ['bot:adjacentElement'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                    //pivotDataset: ['http://localhost:5820/annex/bot-dev/sparql/query2']
                },
                'https://w3id.org/bot#interfaceOf': {
                    category: ['Regular BOT relations'],
                    label: ['bot:interfaceOf'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/bot#hasSubElement': {
                    category: ['Regular BOT relations'],
                    label: ['bot:hasSubElement'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/bot#intersectsZone': {
                    category: ['Regular BOT relations'],
                    label: ['bot:intersectsZone'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/bot#intersectingElement': {
                    category: ['Regular BOT relations'],
                    label: ['bot:intersectingElement'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                //MB: category 3: containsXXX relations (+ bot:hasElement)
                'https://w3id.org/bot#containsZone': {
                    category: ['bot:containsXXX relations'],
                    label: ['bot:containsZone'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },  
                'https://w3id.org/bot#containsElement': {
                    category: ['bot:containsXXX relations'],
                    label: ['bot:containsElement'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/bot#hasElement': {
                    category: ['bot:containsXXX relations'],
                    label: ['bot:hasElement'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                }, 
                //MB: category 4: Regular DOT relations
                'https://w3id.org/dot#hasDamageArea': {
                    category: ['Regular DOT relations'],
                    label: ['dot:hasDamageArea'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/dot#hasDamageElement': {
                    category: ['Regular DOT relations'],
                    label: ['dot:hasDamageElement'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/dot#hasDamage': {
                    category: ['Regular DOT relations'],
                    label: ['dot:hasDamage'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/dot#aggregatesDamageElement': {
                    category: ['Regular DOT relations'],
                    label: ['dot:aggregatesDamageElement'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/dot#adjacentDamageElement': {
                    category: ['Regular DOT relations'],
                    label: ['dot:adjacentDamageElement'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/dot#hasDocumentation': {
                    category: ['Regular DOT relations'],
                    label: ['dot:hasDocumentation'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/dot#documentationFromInspection': {
                    category: ['Regular DOT relations'],
                    label: ['dot:documentationFromInspection'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/dot#descriptionContent': {
                    category: ['Regular DOT relations'],
                    label: ['dot:descriptionContent'], 
                    // MB: reactor.js uses html viewer, but this does not work in facet browser => alternative
                    objectIViewer: ['BasicIndividualView'], 
                },
                'https://w3id.org/dot#filePath': {
                    category: ['Regular DOT relations'],
                    label: ['dot:filePath'],
                },
                'https://w3id.org/dot#coveredByInspection': {
                    category: ['Regular DOT relations'],
                    label: ['dot:coveredByInspection'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/dot#coveredInDocumentation': {
                    category: ['Regular DOT relations'],
                    label: ['dot:coveredInDocumentation'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/dot#hasInspector': {
                    category: ['Regular DOT relations'],
                    label: ['dot:hasInspector'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/dot#hasCausation': {
                    category: ['Regular DOT relations'],
                    label: ['dot:hasCausation'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                //MB: category 5: OMG-FOG geometries
                'https://w3id.org/omg#hasGeometry':{
                    category: ['OMG-FOG geometries'],
                    label: ['omg:hasGeometry'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/omg#hasGeometryState':{
                    category: ['OMG-FOG geometries'],
                    label: ['omg:hasGeometryState'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/omg#hasSimpleGeometryDescription':{
                    category: ['OMG-FOG geometries'],
                    label: ['omg:hasSimpleGeometryDescription'],
                    objectIViewer: ['PasswordView'], // MB: trick to hide large RDF literals
                },
                'https://w3id.org/omg#isPartOfGeometry':{
                    category: ['OMG-FOG geometries'],
                    label: ['omg:isPartOfGeometry'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                'https://w3id.org/omg#hasReferencedGeometryId':{
                    category: ['OMG-FOG geometries'],
                    label: ['omg:hasReferencedGeometryId'],
                },
                'https://w3id.org/fog#hasReferencedContent':{
                    category: ['OMG-FOG geometries'],
                    label: ['fog:hasReferencedContent'],
                    objectIViewer: ['BasicLinkedIndividualView'], // MB: object of triple becomes clickable
                },
                //MB: category : property chains
                'https://w3id.org/bot#containsElement->http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    category: ['Property chains'],
                    objectBrowser: ['TagListBrowser'],
                    // objectIViewer: ['PrefixBasedView'], // MB: does not work together with TagListBrowser
                    label: ['bot:containsElement => rdf:type'],
                },
                'https://w3id.org/bot#adjacentElement->http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    category: ['Property chains'],
                    objectBrowser: ['TagListBrowser'],
                    label: ['bot:adjacentElement => rdf:type'],
                },
                'https://w3id.org/bot#adjacentZone->http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    category: ['Property chains'],
                    objectBrowser: ['TagListBrowser'],
                    label: ['bot:adjacentZone => rdf:type'],
                },
                'https://w3id.org/bot#containsZone->http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    category: ['Property chains'],
                    objectBrowser: ['TagListBrowser'],
                    label: ['bot:containsZone => rdf:type'],
                },
                // All building elements/zones damaged by certain MDCS damage type
                'https://w3id.org/dot#hasDamage->https://w3id.org/mdcs-extension#type': {
                    category: ['Property chains'],
                    objectBrowser: ['TagListBrowser'],
                    label: ['dot:hasDamage => ext-mdcs:type'],
                },
                // All damage on building element of certain BEO element type
                // 'INV(https://w3id.org/dot#hasDamage)->https://w3id.org/beo-extension#type': { // MB: inverse of properties cannot be queried
                //     category: ['Property chains'],
                //     objectBrowser: ['TagListBrowser'],
                //     label: ['INV(dot:hasDamage) => ext-beo:type'],
                // },
                // All building elements/zones having geometry of OMG L2
                'https://w3id.org/omg#hasGeometry->https://w3id.org/omg#hasSimpleGeometryDescription': {
                    category: ['Property chains'],
                    label: ['omg:hasGeometry => omg:hasSimpleGeometryDescription (OMG L2)'],
                    objectIViewer: ['PasswordView'], // MB: trick to hide large RDF literals
                },     
                // All building elements/zones having geometry of OMG L3
                'https://w3id.org/omg#hasGeometry->https://w3id.org/omg#hasGeometryState->https://w3id.org/omg#hasSimpleGeometryDescription': {
                    category: ['Property chains'],
                    label: ['omg:hasGeometry => omg:hasGeometryState => omg:hasSimpleGeometryDescription (OMG L3)'],
                    objectIViewer: ['PasswordView'], // MB: trick to hide large RDF literals
                },       
            }
        }
    }
};
