// This file was modified from its original version by Mathias Bonduel on 30th of May 2018

//important: first value in the array is considered as default value for the property
//this file is visible to the server-side
export default {
    serverPort: [4000], //MB: port number of app
    sparqlEndpoint: { // MB: defined per dataset => sparql endpoint + graph name (default = all graphs)!
        'generic': {
            host: 'localhost', port: 8890, path: '/sparql', endpointType: 'virtuoso'
        },
        //Note: if graphName is not specified, the identifer used for configuration will be used as graphName
        //Example config for connecting to a Stardog triple store
        //Stardog note: sometimes you need to use a path like '/annex/testDB/sparql/query' for update queries
        'http://localhost:5820/demo-buildingTopology': { //MB: dev db
            host: 'localhost', port: 5820, path: '/demo-buildingTopology', graphName: 'default', endpointType: 'stardog', useReasoning: 1
        },
        // MB: dynamic configs 
        'http://ld-r.org/configurations': { //MB: dev db
            host: 'localhost', port: 5820, path: '/LD-Rconfig', graphName: 'http://ld-r.org/demo/config', endpointType: 'stardog', useReasoning: 1
        },
        // MB: users  
        'http://ld-r.org/users': { //MB: dev db
            host: 'localhost', port: 5820, path: '/LD-Rusers', graphName: 'http://ld-r.org/demo/users', endpointType: 'stardog', useReasoning: 1
        },
        // MB: other supported databases: virtuoso, ClioPatria, sesame and blazegraph
    },
    dbpediaLookupService: [ // MB: find related DBpedia things from a keyword or prefix search (autocomplete)
        { host: 'lookup.dbpedia.org' }
    ],
    dbpediaSpotlightService: [ // MB: find DBpedia instances in text => https://github.com/dbpedia-spotlight/dbpedia-spotlight-model
        { host: 'model.dbpedia-spotlight.org', port: 80, path: '/en/annotate' }
    ],
    //it is used only if you enabled recaptcha feature for user authentication
    //get keys from https://www.google.com/recaptcha
    googleRecaptchaService: {
        siteKey: ['put your google recaptcha site key here...'],
        secretKey: ['put your google recaptcha secret key here...']
    }
};
