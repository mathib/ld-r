// This file was modified from its original version by Mathias Bonduel on 30th of May 2018

module.exports = {
    autocompletelist:
    {
        ldrClasses: [
            {title: 'ldr:FacetsConfig'},
            {title: 'ldr:ReactorConfig'},
            {title: 'ldr:ServerConfig'},
            {title: 'ldr:FacetsPropertyConfig'},
            {title: 'ldr:AnnotatedResource'},
            {title: 'ldr:Constraint'}
        ],
        // MB: this is visible when adding a new property from scratch. Commented unnecessary ones for app
        ldrProperties: [
            /**{title: 'ldr:config'},
            {title: 'ldr:dataset'},
            {title: 'ldr:resource'},
            {title: 'ldr:property'},
            {title: 'ldr:object'},
            {title: 'ldr:dataType'},
            {title: 'ldr:scope'},
            {title: 'ldr:list'},
            {title: 'ldr:label'},
            {title: 'ldr:datasetLabel'},
            {title: 'ldr:datasetCategory'},
            {title: 'ldr:host'},
			{title: 'ldr:protocol'},
            {title: 'ldr:port'},
            {title: 'ldr:path'},
            {title: 'ldr:username'},
            {title: 'ldr:password'},
            {title: 'ldr:delimitedBy'},
            {title: 'ldr:annotatedBy'},
            {title: 'ldr:annotations'},
            {title: 'ldr:surfaceForm'},
            {title: 'ldr:offset'},
            {title: 'ldr:uri'},
			{title: 'ldr:options'},
            {title: 'ldr:metadata'},
            {title: 'ldr:position'},
            {title: 'ldr:pivotDataset'},
            {title: 'ldr:graphName'},
            {title: 'ldr:useReasoning'},
            {title: 'ldr:datasetReactor'},
            {title: 'ldr:resourceFocusType'},
            {title: 'ldr:resourceGeoProperty'},
            {title: 'ldr:resourceImageProperty'},
            {title: 'ldr:resourceLabelProperty'},
			{title: 'ldr:resourceLanguageTag'},
            {title: 'ldr:maxNumberOfResourcesOnPage'},
			{title: 'ldr:templateResource'},
            {title: 'ldr:readOnly'},
            {title: 'ldr:readOnlyProperty'},
            {title: 'ldr:readOnlyResource'},
            {title: 'ldr:openInNewWindows'},
            {title: 'ldr:resourceReactor'},
            {title: 'ldr:usePropertyCategories'},
            {title: 'ldr:propertyCategories'},
            {title: 'ldr:dynamicResourceDomain'},
            {title: 'ldr:treatAsResourceType'},
            {title: 'ldr:propertyReactor'},
            {title: 'ldr:category'},
            {title: 'ldr:hint'},
            {title: 'ldr:zoomLevel'},
            {title: 'ldr:simplifyPolyLines'},
            {title: 'ldr:simplifyHighQuality'},
            {title: 'ldr:simplifyTolerance'},
            {title: 'ldr:mapWidth'},
            {title: 'ldr:mapHeight'},
            {title: 'ldr:multiColor'},
            {title: 'ldr:isHidden'},
            {title: 'ldr:hasNumericValues'},
            {title: 'ldr:defaultValue'},
            {title: 'ldr:allowResourceClone'},
            {title: 'ldr:allowResourceDelete'},
            {title: 'ldr:allowResourceNew'},
            {title: 'ldr:allowPropertyNew'},
            {title: 'ldr:allowNewValue'},
            {title: 'ldr:hasLimitedAccess'},
            {title: 'ldr:displayQueries'},
            {title: 'ldr:allowRangeOfValues'},
            {title: 'ldr:allowInlineConfig'},
            {title: 'ldr:allowExtension'},
            {title: 'ldr:hasBlankNode'},
            {title: 'ldr:autoLoadDetails'},
            {title: 'ldr:objectReactor'},
            {title: 'ldr:objectIEditor'},
            {title: 'ldr:objectAEditor'},
            {title: 'ldr:extendedOEditor'},
            {title: 'ldr:objectIViewer'},
            {title: 'ldr:hidePropertyName'},
            {title: 'ldr:objectAViewer'},
            {title: 'ldr:objectBrowser'},
            {title: 'ldr:datasetViewer'},
            {title: 'ldr:extendedOViewer'},
            {title: 'ldr:shortenURI'},
            {title: 'ldr:asWikipedia'},
            {title: 'ldr:dateTimeFormat'},
            {title: 'ldr:shapeColor'},
            {title: 'ldr:height'},
            {title: 'ldr:width'},
            {title: 'ldr:allowUserDefinedValue'},
            {title: 'ldr:calendarFormat'},
            {title: 'ldr:containerDatasetURI'},
            {title: 'ldr:hasLinkedValue'},
            {title: 'ldr:constraint'},
            {title: 'ldr:restrictAnalysisToSelected'},
            {title: 'ldr:enabled'},
            {title: 'ldr:acceptedMimeTypes'},
            {title: 'ldr:fileNamePrefix'},
            {title: 'ldr:maxFileSize'},
            {title: 'ldr:decodeURIComponent'},
            {title: 'ldr:encodeURIComponent'},
            {title: 'ldr:rtl'}**/
        ],
        ldrLiterals: [
            {title: 'OrgResource'},
            {title: 'PersonResource'},
            {title: 'AggregateObject'},
            {title: 'BasicAggregateView'},
            {title: 'BasicDBpediaView'},
            {title: 'BasicDateTimeView'},
            {title: 'BasicIndividualView'},
            {title: 'BasicHTMLContentView'},
            {title: 'BasicImageView'},
            {title: 'YASQEViewer'},
            {title: 'BasicLinkedIndividualView'},
            {title: 'BasicMapView'},
            {title: 'LanguageView'},
            {title: 'PasswordView'},
            {title: 'ThreeLetterCountryView'},
            {title: 'ToggleView'},
            {title: 'TwoLetterCountryView'},
            {title: 'BasicAggregateMapView'},
            {title: 'DBpediaMapView'},
            {title: 'MarkdownView'},
            {title: 'BasicCalendarInput'},
            {title: 'BasicTextareaInput'},
            {title: 'DBpediaInput'},
            {title: 'LanguageInput'},
            {title: 'PasswordInput'},
            {title: 'PrefixBasedInput'},
            {title: 'ToggleEdit'},
            {title: 'FileInput'},
		      	{title: 'BasicOptionInput'},
            {title: 'BasicResourceList'},
            {title: 'TagListBrowser'},
            {title: 'GeoListBrowser'},
            {title: 'CheckListBrowser'},
            {title: 'TaxonomyBrowser'},
            {title: 'BarChartBrowser'},
            {title: 'TagCloudBrowser'}
        ],
        classes: [ // MB: visible while adding a class via rdf:type
            {title: 'bot:Interface'},
            {title: 'bot:Site'},
            // hided unnecessary ones
            /*{title: 'skos:Concept'},
            {title: 'schema:Organization'},
            {title: 'foaf:Document'},
            {title: 'foaf:Person'},
            {title: 'foaf:Organization'},
            {title: 'dbo:Organisation'},
            {title: 'dbo:University'},
            {title: 'vivo:Company'},
            {title: 'bibo:Book'},
            {title: 'void:Dataset'},
            {title: 'prov:Entity'}*/
        ],
        // MB: this is visible when adding a new property from scratch. Order of appearance is same as order here
        properties: [
            {title: 'bot:hasBuilding'},
            {title: 'bot:hasStorey'},
            {title: 'bot:hasSpace'},
            {title: 'bot:adjacentZone'},
            {title: 'bot:containsZone'},
            {title: 'bot:adjacentElement'},
            {title: 'bot:containsElement'},
            {title: 'bot:hostsElement'},
            {title: 'bot:aggregates'},
            {title: 'props:elevation_simple'},
            {title: 'props:name_simple'},
            {title: 'props:number_simple'},
            {title: 'bot:interfaceOf'}, // MB: not really useful for now as its domain is bot:Interface
            // MB: existing autocompletes for properties => commented unnecessary ones for app
            {title: 'rdf:type'},
            {title: 'rdfs:label'},
            {title: 'rdfs:comment'},
            {title: 'rdfs:seeAlso'},
            /**{title: 'owl:sameAs'},
            {title: 'geo:geometry'},
            {title: 'skos:prefLabel'},
            {title: 'skos:narrower'},
            {title: 'skos:altLabel'},
            {title: 'skos:broader'},
            {title: 'skos:definition'},
            {title: 'skos:exactMatch'},
            {title: 'skos:example'},
            {title: 'skos:member'},
            {title: 'skos:note'},
            {title: 'skos:related'},**/
            {title: 'foaf:primaryTopic'},
            //{title: 'foaf:homepage'},
            {title: 'foaf:depiction'},
            /**{title: 'foaf:thumbnail'},
            {title: 'foaf:firstName'},
            {title: 'foaf:lastName'},
            {title: 'foaf:name'},
            {title: 'vcard:email'},
            {title: 'dcterms:title'},
            {title: 'dcterms:subject'},
            {title: 'dcterms:creator'},
            {title: 'dcterms:description'},
            {title: 'dcterms:contributor'},
            {title: 'dcterms:modified'},
            {title: 'dcterms:isPartOf'},
            {title: 'dcterms:issued'},
            {title: 'dcterms:format'},
            {title: 'dcterms:language'},
            {title: 'dbo:birthPlace'},
            {title: 'dbo:deathPlace'},
            {title: 'dbo:birthDate'},
            {title: 'dbo:spouse'},
            {title: 'dbo:knownFor'},
            {title: 'dbo:deathDate'},
            {title: 'dbp:children'}**/
        ]
    }
}
