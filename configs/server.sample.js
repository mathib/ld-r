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
        //Stardog note: for older versions of Stardog you might need to use a path like '/annex/testDB/sparql/query' to support update queries
		// on Docker replace 'localhost' by 'host.docker.internal'
        'http://localhost:5820/demo-buildingTopology': { // never change this line!! (this is used as a reference for this endpoint in other configs)
            host: 'host.docker.internal', // if you use Docker Desktop for LD-R, change 'localhost' into 'host.docker.internal'
            port: 7200, // by default Stardog starts at port 5820 and GraphDB at port 7200
            path: '/repositories/yourrepository', // name of the database/repository in the triplestore (stardog: '/databaseName' and GraphDB: 'repositories/repositoryName') /demo-buildingTopology
            graphName: 'default',
            endpointType: 'graphdb', // 'stardog' or 'graphdb'
            // username: 'myusername', // only set if the triplestore has authentication on
            // password: 'mypassword', // only set if the triplestore has authentication on
            useReasoning: 1
        },
        //Example for connecting to a Virtuoso triple store
        'http://dbpedia.org/sparql': {
            host: 'dbpedia.org', port: 80, path: '/sparql', graphName: 'default', endpointType: 'virtuoso'
        },
        // MB: below are other, non-active sources (no LD-R configs set)
        //Example for connecting to a ClioPatria triple store
        'http://localhost:3020/sparql/': {
            host: 'localhost', port: 3020, path: '/sparql/', endpointType: 'ClioPatria'
        },
        //Example for connecting to a GraphDB triple store
        'http://localhost:5820/exampleDatabase': {
            host: 'localhost', port: 5820, path: '/exampleDatabase', endpointType: 'stardog'
        }, // if LD-R runs on local Docker Desktop: use 'host.docker.internal' instead of 'localhost'
        //Example for connecting to a GraphDB triple store
        'http://localhost:7200/repositories/test': {
            host: 'localhost', port: 7200, path: '/repositories/test', endpointType: 'graphdb'
        }, // if LD-R runs on local Docker Desktop: use 'host.docker.internal' instead of 'localhost'
        // MB: dynamic configs 
        'http://ld-r.org/configurations': { //MB: dev db
           host: 'localhost', port: 5820, path: '/LD-Rconfig', graphName: 'http://ld-r.org/demo/config', endpointType: 'stardog', useReasoning: 1
        },
        // MB: users  
        'http://ld-r.org/users': { //MB: dev db
           host: 'localhost', port: 5820, path: '/LD-Rusers', graphName: 'http://ld-r.org/demo/users', endpointType: 'stardog', useReasoning: 1
        },
    },
    dbpediaLookupService: [ // MB: find related DBpedia things from a keyword or prefix search (autocomplete)
        { host: 'lookup.dbpedia.org' }
    ],
    dbpediaSpotlightService: [ // MB: find DBpedia instances in text => https://github.com/dbpedia-spotlight/dbpedia-spotlight-model
        { host: 'api.dbpedia-spotlight.org', port: 80, path: '/en/annotate' }
    ],
    //it is used only if you enabled recaptcha feature for user authentication
    //get keys from https://www.google.com/recaptcha
    googleRecaptchaService: {
        siteKey: ['put your google recaptcha site key here...'],
        secretKey: ['put your google recaptcha secret key here...']
    }
};
