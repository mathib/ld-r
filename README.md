# Linked Data Reactor (LD-R) application for modeling building topology
> * This application is based on the Linked Data Reactor (LD-R) v1.2.3 published by Dr. Ali Khalili and Prof. Frank van Harmelen of the VU University Amsterdam
> * tested on Windows 10, using Stardog v5.2.1, node v9.11.0 (npm v5.6.0) and webpack v4.6.0
> * tested on Windows 10 with Docker Desktop v19.03.1 and both Stardog v7.2.0 and GraphDB v8.6.1

## Setup a triplestore
LD-R can be used with a variety of triplestores, including Stardog and GraphDB (both tested). To work with other types of triplestores, please read the [LD-R specific information](http://ld-r.org/docs/quickstart.html) and/or study the examples in the [`configs/server.sample.js`](https://github.com/mathib/ld-r/blob/master/configs/server.sample.js) config file when making your own configs.

1) Make sure a Stardog/graphdb triplestore is running on localhost:5820/localhost:7200. LD-R can be used to access a database demanding authentication (username/password) but it is also possible to deactive the security of the triplestore when only working in development mode locally:

`stardog-admin.bat server start --disable-security`

or double click the GraphDB widget to start GraphDB (security can be disabled via the workbench at [localhost:7200/users](http://localhost:7200/users) and clicking the switch in the upper right corner)

6) Create a new database with the name 'demo-buildingTopology' and add the [BOT](https://raw.githubusercontent.com/w3c-lbd-cg/bot/master/bot.ttl) ontology (and optionally the [PRODUCT](https://github.com/w3c-lbd-cg/product) ontologies) in a named graph of this database. 
**Note**: the BOT ontology is more or less stable, but some changes have been made. This app assumes **BOT version 0.3.1** of summer 2019. This version is available in this repo: [`Linked Building Data ontologies/bot_v0.3.1_20190723.ttl`](https://raw.githubusercontent.com/mathib/ld-r/master/Linked%20Building%20Data%20ontologies/bot_v0.3.1_20190723.ttl)

`stardog-admin db create -n demo-buildingTopology`

`stardog data add --named-graph https://myNamedGraph.org/bot demo-buildingTopology bot_v0.3.1_20190723.ttl`

or use the GraphDB workbench at [localhost:7200/repository](http://localhost:7200/repository) to create a database (repository) named `demo-buildingTopology`. The workbench (Import > RDF) can also be used to add the BOT ontology to a named graph in this database.

Optionally add some example triples describing a building using BOT, PRODUCT and PROPS (e.g. [`Duplex_A_20110907_exampleData_bot_v0.3.1_20190723.ttl`](https://raw.githubusercontent.com/mathib/ld-r/master/Linked%20Building%20Data%20ontologies/Duplex_A_20110907_exampleData_bot_v0.2.0_20171027.ttl) for the [IFCtoLBD](https://github.com/jyrkioraskari/IFCtoLBD) converted version of the [IFC Duplex House](https://www.nibs.org/page/bsa_commonbimfiles#project1) using BOT v0.0.2)

`stardog data add demo-buildingTopology Duplex_A_20110907_exampleData_bot_v0.2.0_20171027.ttl`

or use the GraphDB workbench to add the data in case of GraphDB triplestore.

7) open the LD-R config for the server settings and adapt them to your triplestore setup: type of triplestore, authentication (if active for triplestore) and port (endpoint triplestore). Leave all other settings as they are to ensure a smooth start.

```javascript
'http://localhost:5820/demo-buildingTopology': { // never change this line!! (this is used as a reference for this endpoint in other configs)
    host: 'host.docker.internal', // if you don't use Docker Desktop for LD-R, change 'host.docker.internal' into 'localhost'
    port: 7200, // by default Stardog starts at port 5820 and GraphDB at port 7200
    path: '/repositories/emptyDB', // name of the database/repository in the triplestore (stardog: '/databaseName' and GraphDB: 'repositories/repositoryName') /demo-buildingTopology
    graphName: 'default',
    endpointType: 'graphdb', // 'stardog' or 'graphdb'
    // username: 'myusername', // only set if the triplestore has authentication on
    // password: 'mypassword', // only set if the triplestore has authentication on
    useReasoning: 1
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
Make sure Docker Desktop is running. Restart the container from step 6 (make sure the same triplestore is running as before)

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

## Starting to model a building using BOT
You might want to start modeling a new building with the application. The easiest way to do this using LD-R is to work top-down: start with modeling the building site (`bot:Site`) followed by the building (`bot:Building`) contained by the site, building storeys (`bot:Storey`) contained by the building, spaces (`bot:Space`) contained by the storeys and building elements (`bot:Element`) contained by the spaces.

If you want to add a new `bot:Site` instance to the database, to model another building site (or if you didn't load the example dataset), you need to create a new node by adding a triple such as `<http://yourdomain.org/projectX/site1> a bot:Site`. LD-R allows you to choose the URI of each node you create, except for an unconnected node, as is the case for the building site. You can define a building site by clicking on `Datasets` > `Building topology graph using the BOT ontology` and then selecting the `Add a New Resource` button at the bottom of the webpage. A new URI for the node is automatically generated, but the node still has to be made an instance of `bot:Site` instead of `ldr:Resource` (do this at once, or the new node will not be found by found by LD-R facet search).
Use the button `Add Property/Value` at the bottom of the page to add new properties to the building site or other defined nodes. Autocomplete will help with selecting predefined properties (e.g. `rdfs:comment`), but users can enter any custom property (using prefixed or full URI) they like to use. For convenient modeling, the UI allows the usage of predifined prefixes (data/prefixes.js) such as `bot:` and `inst:` (example namespace for new nodes).

Starting from the building site, you can model the rest of the building topology by adding BOT topology relations from the `bot:Site` instance to new instances (e.g. `bot:hasBuilding`). All BOT classes (except `bot:Site`) are inferred from the used relations. 

More information on the usage of BOT can be found here:
* draft community report of BOT at [https://w3id.org/bot#](https://w3id.org/bot#): entered in a browser an HTML document will appear (human-readable), but the raw RDF file can be requested as well (machine-readable)
* [SPARQL-visualizer tutorial](https://w3c-lbd-cg.github.io/bot/tutorial/) of how to use BOT
* The canonical [journal paper](http://www.semantic-web-journal.net/content/bot-building-topology-ontology-w3c-linked-building-data-group-0) describing BOT

Building elements (instances of `bot:Element`) can also be classified using classes from [PRODUCT](https://github.com/w3c-lbd-cg/product). Any `Bot:Zone` or `bot:Element` can also get any additional non-topological properties attached using the button `Add Property/Value` at the bottom of the page.

## Modified files from the original LD-R repository
* configs/general.js
* configs/reactor.js
* configs/server.js
* configs/facets.js
* data/autocompletes.js
* data/prefixes.js

## References

Please cite the following [paper](https://www.researchgate.net/publication/327631664_A_novel_workflow_to_combine_BIM_and_Linked_Data_for_existing_buildings) when using these configs for BOT in your LD-R app:

* Bonduel, M., Rasmussen, M. H., Pauwels, P., Vergauwen, M., & Klein, R. (2018). A novel workflow to combine BIM and Linked Data for existing buildings. In J. Karlshøj & R. J. Scherer (Eds.), *Proceedings of the 12th European Conference on Product and Process Modelling (ECPPM) (pp. 347–354)*. Copenhagen, Denmark: CRC Press.

Cite either the original [Github repository of LD-R](https://github.com/ali1k/ld-r) or one of the [publications](http://research.ld-r.org/) published by the authors of the main LD-R app, when referring to LD-R itself.