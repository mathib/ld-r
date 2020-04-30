# Linked Data Reactor (LD-R) application for modeling building topology
> * This application is based on the Linked Data Reactor (LD-R) v1.2.3 published by Dr. Ali Khalili and Prof. Frank van Harmelen of the VU University Amsterdam
> * tested on Windows 10 with node.js v10.15.3 (npm v6.4.1), webpack v4.6.0, and both Stardog v7.2.0 and GraphDB v8.6.1
> * tested on Windows 10 with Docker Desktop v19.03.1 and both Stardog v7.2.0 and GraphDB v8.6.1

## Setup a triplestore
LD-R can be used with a variety of triplestores, including Stardog and GraphDB (both tested). To work with other types of triplestores, please read the [LD-R specific information](http://ld-r.org/docs/quickstart.html) and/or study the examples in the [`configs/server.sample.js`](https://github.com/mathib/ld-r/blob/master/configs/server.sample.js) config file when making your own configs.

1) Make sure a Stardog/GraphDB triplestore is running on [localhost:5820](http://localhost:5820)/[localhost:7200](http://localhost:7200). LD-R can be used to access a database demanding authentication (username/password) but it is also possible to deactive the security of the triplestore itself when only working in development mode locally:

`stardog-admin.bat server start --disable-security`

or double click the GraphDB widget to start GraphDB (security can be disabled via the workbench at [localhost:7200/users](http://localhost:7200/users) and clicking the switch in the upper right corner)

2) Create a new database (any name will do, as long as you configure the `server.sample.js` as explained in step 4). Make sure, that at least an OWL2-RL reasoning is enabled for the dataset. Particularly in the case of GraphDB, the default settings (RDFS-plus optimized) is not enough to use these configs efficiently. Note that it's not possible to change this after you've created the repository in GraphDB.

Add the [BOT](https://w3id.org/bot#) (building topology), [DOT](https://w3id.org/dot#) (building damage), [BEO](https://github.com/pipauwel/product/blob/master/prod_building_elements.ttl) (building elements classification taxonomy) and [MDCS](https://mdcs.monumentenkennis.nl/) (building damage classification taxonomy) ontology each in a named graph of this database. If you're also working with geometry using OMG/FOG, you can load [OMG](https://w3id.org/omg#) (linking geometry) and [FOG](https://w3id.org/fog#) (taxonomy of geometry format properties). 

Load the ontologies all in a named graph as follows:

| Ontology | named graph                                        |
|----------|----------------------------------------------------|
| BOT      | https://mynamedgraph/bot                           |
| DOT      | https://mynamedgraph/dot                           |
| BEO      | https://mynamedgraph/beo                           |
| MDCS     | https://mynamedgraph/mdcs                          |
| OMG      | https://mynamedgraph/omg                           |
| FOG      | https://mynamedgraph/fog                           |


**Note**: Except for MDCS, a copy of all these ontologies are included in this repo under [`Linked Building Data ontologies`](https://github.com/mathib/ld-r/tree/master/Linked%20Building%20Data%20ontologies). The LD-R app is currently configured to work smoothly with these versions of these ontologies.

`stardog-admin db create -n repositoryName`

`stardog data add --named-graph https://mynamedgraph/bot repositoryName bot_v0.3.1_20190723.ttl`

or use the GraphDB workbench at [localhost:7200/repository](http://localhost:7200/repository) to create a database (repository). The GraphDB workbench (Import > RDF) can also be used to add the ontologies to a named graph in this database.

<!-- Optionally add some example triples describing a building using (parts of) these ontologies (e.g. [`Duplex_A_20110907_exampleData_bot_v0.3.1_20190723.ttl`](https://raw.githubusercontent.com/mathib/ld-r/master/Linked%20Building%20Data%20ontologies/Duplex_A_20110907_exampleData_bot_v0.2.0_20171027.ttl) for the [IFCtoLBD](https://github.com/jyrkioraskari/IFCtoLBD) converted version of the [IFC Duplex House](https://www.nibs.org/page/bsa_commonbimfiles#project1) using BOT v0.0.2)

`stardog data add demo-buildingTopology Duplex_A_20110907_exampleData_bot_v0.2.0_20171027.ttl`

or use the GraphDB workbench to add the data in case of GraphDB triplestore. -->

3) Also add two supporting triples to the dataset by running the following query:

```
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX ext-beo: <https://w3id.org/beo-extension#>
PREFIX ext-mdcs: <https://w3id.org/mdcs-extension#>
INSERT DATA {
    GRAPH <https://mynamedgraph/mdcs> { ext-mdcs:type rdfs:subPropertyOf rdf:type }
    GRAPH <https://mynamedgraph/beo> { ext-beo:type rdfs:subPropertyOf rdf:type }
}
```

4) open the LD-R config for the server settings (`configs/server.sample.js`) and adapt them to your triplestore setup: host, type of triplestore, authentication (if active for triplestore) and port (endpoint triplestore). Leave all other settings as they are to ensure a smooth start.

```javascript
'https://modeling.building.org/mainData': { // never change this line!! (this is used as a reference in other configs)
    host: 'host.docker.internal', // if you don't use Docker Desktop for LD-R, change 'host.docker.internal' into 'localhost'
    port: 7200, // by default Stardog starts at port 5820 and GraphDB at port 7200
    path: '/repositories/repositoryName', // name of the database/repository in the triplestore (stardog: '/databaseName' and GraphDB: 'repositories/repositoryName')
    graphName: 'default',
    endpointType: 'graphdb', // 'stardog' or 'graphdb'
    // username: 'myusername', // only set if the triplestore has authentication on
    // password: 'mypassword', // only set if the triplestore has authentication on
    useReasoning: 1,
},
'https://mynamedgraph/mdcs': { // never change this line!! (this is used as a reference in other configs)
    host: 'host.docker.internal', // if you don't use Docker Desktop for LD-R, change 'host.docker.internal' into 'localhost'
    port: 7200, // by default Stardog starts at port 5820 and GraphDB at port 7200
    path: '/repositories/repositoryName', // name of the database/repository in the triplestore (stardog: '/databaseName' and GraphDB: 'repositories/repositoryName')
    graphName: 'https://mynamedgraph/mdcs',
    endpointType: 'graphdb', // 'stardog' or 'graphdb'
    // username: 'myusername', // only set if the triplestore has authentication on
    // password: 'mypassword', // only set if the triplestore has authentication on
    useReasoning: 0, // MB: with GraphDB it is not possible to reason over a named graph in LD-R
},
'https://mynamedgraph/beo': { // never change this line!! (this is used as a reference in other configs)
    host: 'host.docker.internal', // if you don't use Docker Desktop for LD-R, change 'host.docker.internal' into 'localhost'
    port: 7200, // by default Stardog starts at port 5820 and GraphDB at port 7200
    path: '/repositories/repositoryName', // name of the database/repository in the triplestore (stardog: '/databaseName' and GraphDB: 'repositories/repositoryName')
    graphName: 'https://mynamedgraph/beo',
    endpointType: 'graphdb', // 'stardog' or 'graphdb'
    // username: 'myusername', // only set if the triplestore has authentication on
    // password: 'mypassword', // only set if the triplestore has authentication on
    useReasoning: 0, // MB: with GraphDB it is not possible to reason over a named graph in LD-R
},
```
**Note**: each time you want to make a change to the (static) configuration files, you have to create a new Docker image and Docker container (see steps below. Use a name for the image and container that is different from the one selected for older versions.

## Installing LD-R using Docker (quickstart)
1) Install Docker. In this example, we use [Docker Desktop](https://www.docker.com/products/docker-desktop) for Mac or Windows.

2) Make sure Docker is started (might take a while) 

`docker --version`

3) Download (ZIP and unzip) or git clone this repository

`git clone https://github.com/mathib/ld-r.git <LocalFolderName>`

4) Move in the folder using the command line

`cd <LocalFolderName>`

5) Create a Docker image from the Dockerfile (last part is the name of the Docker image)

`docker build . -t ld-r-docker-buildings`

6) Create and start a Docker container based on the image of step 5 (part behind `--name` is the name of the Docker container)

`docker run -it --name "ld-r-container" -p 4000:4000 ld-r-docker-buildings npm run build`

7) Navigate in your browser to [localhost:4000](http://localhost:4000) to find the LD-R app running

### Closing the app correctly
Close LD-R by pressing CTRL+C in the command line (both on Mac or Windows). Next, you might also want to close the triplestore and Docker Desktop.

### Restarting the application later
Make sure Docker Desktop is running. Restart the container made in step 6 (make sure the same triplestore is running as before)

`docker start -i "ld-r-container"`

## Installing LD-R using node.js (development)
(LD-R specific information: http://ld-r.org/docs/quickstart.html)
1) Make sure a recent version of node and webpack is installed. Webpack has to be installed globally

`npm install webpack -g`

2) Download or git clone this repository

`git clone https://github.com/mathib/ld-r.git <LocalFolderName>`

3) Move in the folder

`cd <LocalFolderName>`

4) Install the dependencies and the configs. If on Windows:

run the `instal.bat` by double clicking it

If on a Unix-based OS, run:

`./install`

7) Start the LD-R application in development mode

`npm run dev`

8) Navigate in a browser to [localhost:3000](http://localhost:3000) to find the LD-R application running

## Starting to model a building using Linked Building Data ontologies: BOT, DOT, BEO, MDCS, OMG and FOG

### Building topology: BOT
You might want to start modeling a new building with the application. The easiest way to do this using LD-R is to work top-down: start with modeling the building site (`bot:Site`) followed by the building (`bot:Building`) contained by the site, building storeys (`bot:Storey`) contained by the building, spaces (`bot:Space`) contained by the storeys and building elements (`bot:Element`) contained by the spaces. 

If you want to add a new `bot:Site` instance to the database to model another building site, you need to create a new node by adding a triple such as `<http://yourdomain.org/projectX/site1> a bot:Site`. LD-R allows you to choose the URI of each node you create, except for an initially unconnected node, as is the case for the building site. You can define a building site by clicking on `Datasets` > `my building described using Linked Building Data` and then selecting the `Add a New Resource` button at the bottom of the webpage. A new URI for the node is automatically generated, but the node still has to be made an instance of `bot:Site` instead of `ldr:Resource` (do this at once, or the new node will not be found by found by LD-R facet search).
Use the button `Add Property/Value` at the bottom of the page to add new properties to the building site. Autocomplete will help with selecting predefined properties (e.g. `rdfs:comment`), but users can enter any custom property (using prefixed or full URI) they like to use. For convenient modeling, the UI allows the usage of predifined prefixes (in `data/prefixes.js`) such as `bot:` and `inst:` (example namespace for new nodes).

Starting from the building site, you can model the rest of the building topology by adding BOT topology relations from the `bot:Site` instance to new instances (e.g. `bot:hasBuilding`). All BOT classes (except `bot:Site`) are inferred from the used relations.

**More information** on the usage of BOT (building topology) can be found here:
* draft W3C LBD community report of BOT at [https://w3id.org/bot#](https://w3id.org/bot#): entered in a browser an HTML document will appear (human-readable), but the raw RDF file can be requested as well (machine-readable)
* [SPARQL-visualizer tutorial](https://w3c-lbd-cg.github.io/bot/tutorial/) of how to use BOT
* The canonical [journal paper](http://www.semantic-web-journal.net/content/bot-building-topology-ontology-w3c-linked-building-data-group-0) describing BOT

### Properties for building zones and elements: PROPS
**Note** PROPS is not (yet) documented in an ontology. 

Any resource (e.g. a `bot:Zone` or `bot:Element`) can also get any additional non-topological properties attached using the button `Add Property/Value` at the bottom of the page when focusing on a single resource.
The PROPS and RDFS properties below make it easier to make a rudimentary building model. Properties from other ontologies can be used, but there will probably be no correct prefix and autocomplete available in LD-R. In addition, LD-R will default to a generic rendering of such external properties.

| property | Usage                                       |
|----------|----------------------------------------------------|
| `props:storeyElevation` | The start height of a storey in meter                        |
| `props:storeyNumber`    | The number of a storey for reference                          |
| `props:spaceNumber`     | The number of a space for reference                  |
| `props:hasMaterial`     | A material used in the building element. A dropdown list and autocomplete is provided for some generic materials: e.g. `props:mat-wood`  |
| `rdfs:seeAlso`          | A link to another website, dataset, resource URI, etc. related to the thing described (LD-R will propose URIs from DBPedia using spotlight)  |
| `rdfs:label`            | A short name of the thing described                           |
| `rdfs:comment`          | A longer definition or description of the thing described   |

### Building element classification: BEO
Building elements (instances of `bot:Element`) can also be classified using classes from [BEO](https://github.com/pipauwel/product/blob/master/prod_building_elements.ttl). Normally, this is done directly using the `rdf:type` property, but to make the modeling in LD-R more convenient, a subproperty is defined: `ext-beo:type`. When adding your first BEO class type, you can use the autocomplete which will propose the most specific BEO classes available in the taxonomy. Additionally, a more convenient dropdownlist becomes available when having asserted the first BEO class to a resource using `ext-beo:type`. Note that a certain building element can be an instance of multiple BEO types or even types from other taxonomies.

In some cases, users might want to extend or update the BEO taxonomy on-the-fly and extend it **locally** to match their needs. This LD-R app supports this type of modeling by clicking on `Datasets` > `LD-R dataset to extend the BEO taxonomy` and then selecting the `Add a New Resource` button at the bottom of the webpage. A template based on an existing BEO class will be provided for your convenience and can be adapted at will. Always make sure that the `rdfs:subClassOf` is correctly set, to make the new class part of the BEO taxonomy. Note that the above autocomplete and dropdownlist will not automatically include this new class and a manual insertion will be needed.

### Building damage modeling: DOT
Each building element can be damaged somehow and this information can be modeled using DOT. The ontology supports the modeling of damage topology, related inspections, documentation, etc. Two types of the most common damage topology classes are supported by this LD-R app: `dot:DamageElement` (individual damages such as cracks, failures, etc.) and `dot:DamageArea` (larger zone degraded, e.g. by mold). Besides these two topological classes, the damage instance should also be classified using either `dot:StructuralDamage` (a damage influencing the structural capacity of the element) or `dot:Defect` (all other types of non-structural damage).

**More information** on the usage of DOT (building damage) can be found here:
* draft ontology specification of DOT at [https://w3id.org/dot#](https://w3id.org/dot#): entered in a browser an HTML document will appear (human-readable), but the raw RDF file can be requested as well (machine-readable)
* [SPARQL-visualizer tutorial](https://madsholten.github.io/sparql-visualizer/?file=https://raw.githubusercontent.com/Alhakam/dot/master/ABox-Examples/dot-demo.json) of how to use DOT
* The canonical [conference paper](http://ceur-ws.org/Vol-2389/05paper.pdf) describing the first version of DOT

### Building damage classification: MDCS
Damage instances can, similarly as building elements with BEO, be classified according to the kind of damage using the MDCS taxonomy. Normally, this is done directly using the `rdf:type` property, but to make the modeling in LD-R more convenient, a subproperty is defined: `ext-mdcs:type`. When adding your first MDCS class type, you can use the autocomplete which will propose the most specific MDCS classes available in the taxonomy. Additionally, a more convenient dropdownlist becomes available when having asserted the first MDCS class to a resource using `ext-mdcs:type`. Note that a certain damage instance can be an instance of multiple MDCS types or even types from other taxonomies. 

If a building element is damaged, but the damage classification is not (yet) known, this can be modelled by using `dot:UnclassifiedDamage` instead of an MDCS class.

In some cases, users might want to extend or update the MDCS taxonomy on-the-fly and extend it **locally** to match their needs. This LD-R app supports this type of modeling by clicking on `Datasets` > `LD-R dataset to extend the MDCS taxonomy` and then selecting the `Add a New Resource` button at the bottom of the webpage. A template based on an existing MDCS class will be provided for your convenience and can be adapted at will. Always make sure that the `rdfs:subClassOf` is correctly set, to make the new class part of the MDCS taxonomy. Note that the above autocomplete and dropdownlist will not automatically include this new class and a manual insertion will be needed.

### Linking geometry descriptions: OMG and FOG
In addition to the previous ontologies, this LD-R app also recognizes properties from OMG and FOG for linking building elements, building zones or building damages to a geometry description. Since geometry modeling is a topic on its own, that requires dedicated tools (e.g. a CAD modeling application), it is not really feasible to model geometry yourselves using LD-R. It is currently also not possible to view the geometry descriptions inside LD-R that are added to the graph by other tools. A specific proof-of-concept application was developed as a side project: https://github.com/mathib/fog-demo-app.

**More information** on the usage of OMG-FOG (linking to geometry descriptions) can be found here:
* draft ontology specification of OMG at [https://w3id.org/omg#](https://w3id.org/omg#): entered in a browser an HTML document will appear (human-readable), but the raw RDF file can be requested as well (machine-readable)
* draft ontology specification of FOG at [https://w3id.org/fog#](https://w3id.org/fog#): entered in a browser an HTML document will appear (human-readable), but the raw RDF file can be requested as well (machine-readable)
* [SPARQL-visualizer tutorial](https://madsholten.github.io/sparql-visualizer/?file=https:%2F%2Fwww.dropbox.com%2Fs%2Fg1c9oclaxv1l8ud%2Fomg-demo.json) of how to use OMG
* [SPARQL-visualizer tutorial](https://madsholten.github.io/sparql-visualizer/?file=https://raw.githubusercontent.com/mathib/fog-ontology/master/examples/fog-demo.json) of how to use FOG
* The canonical [conference paper](http://ec-3.org/conf2019/contribution_146_final/) describing the first version of OMG
* The canonical [conference paper](http://ec-3.org/conf2019/contribution_166_final/) describing the first version of FOG

## Modified files from the original LD-R repository
* configs/general.js
* configs/reactor.js
* configs/server.js
* configs/facets.js
* data/autocompletes.js
* data/prefixes.js

## References

Please cite the following [paper](https://www.researchgate.net/publication/327631664_A_novel_workflow_to_combine_BIM_and_Linked_Data_for_existing_buildings) when using the configs of release [v0.0.1](https://github.com/mathib/ld-r/releases/tag/v0.0.1) in your LD-R app:

* Bonduel, M., Rasmussen, M. H., Pauwels, P., Vergauwen, M., & Klein, R. (2018). A novel workflow to combine BIM and Linked Data for existing buildings. In J. Karlshøj & R. J. Scherer (Eds.), *Proceedings of the 12th European Conference on Product and Process Modelling (ECPPM) (pp. 347–354)*. Copenhagen, Denmark: CRC Press.

Cite either the original [Github repository of LD-R](https://github.com/ali1k/ld-r) or one of the [publications](http://research.ld-r.org/) published by the authors of the main LD-R app, when referring to LD-R itself.