# Linked Data Reactor (LD-R) application for modeling building topology
> * This application is based on the Linked Data Reactor (LD-R) v1.2.3 published by Dr. Ali Khalili and Prof. Frank van Harmelen of the VU University Amsterdam
> * tested on Windows 10, using Stardog v5.2.1, node v9.11.0 (npm v5.6.0) and webpack v4.6.0

## Installation
(LD-R specific information: http://ld-r.org/docs/quickstart.html)
1) Make sure a recent version of node and webpack is installed. Webpack has to be installed globally

`npm install webpack -g`

2) Download or git clone this repository

`git clone https://github.com/mathib/ld-r.git <LocalFolderName>`

3) Move in the folder

`cd <LocalFolderName>`

4) Install the dependencies and the configs. If on Windows:

run the `instal.bat` by double clicking it

If on Unix-based OS, run:

`./install`

5) Make sure a Stardog triplestore is running on localhost:5820, but with security turned off (otherwiser LD-R will not be able to access the database):

`stardog-admin.bat server start --disable-security`

6) Create a new Stardog database with the name 'demo-buildingTopology' and add the [BOT](https://raw.githubusercontent.com/w3c-lbd-cg/bot/master/bot.ttl) ontology (and optionally the [PRODUCT](https://github.com/w3c-lbd-cg/product) ontologies) in a named graph of this database. 
**Note**: the BOT ontology has changed recently at LDAC2018 and some classes/relations are renamed/changed. This app assumes the original BOT version of fall 2017 (after LDAC2017). This version is available in this repo: [`Linked Building Data ontologies/bot_v0.2.0_20171027.ttl`](https://raw.githubusercontent.com/mathib/ld-r/master/Linked%20Building%20Data%20ontologies/bot_v0.2.0_20171027.ttl)

`stardog-admin db create -n demo-buildingTopology`

`stardog data add --named-graph https://w3id.org/myNamedGraph/bot demo-buildingTopology bot_v0.2.0_20171027.ttl`

Optionally add some example triples describing a building using BOT, PRODUCT and PROPS (e.g. [`Duplex_A_20110907_exampleData_bot_v0.2.0_20171027.ttl`](https://raw.githubusercontent.com/mathib/ld-r/master/Linked%20Building%20Data%20ontologies/Duplex_A_20110907_exampleData_bot_v0.2.0_20171027.ttl) for the [IFCtoLBD](https://github.com/jyrkioraskari/IFCtoLBD) converted version of the [IFC Duplex House](https://www.nibs.org/page/bsa_commonbimfiles#project1) using BOT v0.0.2)

`stardog data add demo-buildingTopology Duplex_A_20110907_exampleData_bot_v0.2.0_20171027.ttl`

7) Start the LD-R application

`npm run dev`

8) Navigate in a browser to [localhost:3000](localhost:3000) to find the LD-R application running
9) If you want to add a new `bot:Site` instance to model another building site (or if you didn't load the example dataset), you need to create a new node by adding a triple such as `<http://yourdomaim.org/site1> a bot:Site`.
You can do this by navigating to in the browser to [this URL](http://localhost:3000/dataset/1/http%3A%2F%2Flocalhost%3A5820%2Fdemo-buildingTopology). At the bottom of the webpage, you can select `Add a New Resource`. A new URI for the node is automatically generated, but the node still has to be made an instance of `bot:Site` instead of `ldr:Resource`.
Use the button `Add Property/Value` at the end of the page to add new properties to the building site. Autocomplete will help with selecting predefined properties (e.g. `rdfs:comment`), but users can enter any custom property (using prefixed or full URI) they like to use. For convenient modeling, the UI allows the usage of predifined prefixes (data/prefixes.js) such as `bot:` and `inst:` (example namespace for new nodes).
10) Start the modeling of the building topology by adding BOT topology relations from the `bot:Site` instance to new instances (e.g. `bot:hasBuilding`). All BOT classes (except `bot:Site`) are inferred from the used relations. 

## Modified files from the original LD-R repository
* configs/general.js
* configs/reactor.js
* configs/server.js
* configs/facets.js
* data/autocompletes.js
* data/prefixes.js

## More information on the usage of BOT
* [draft community report of BOT](https://w3c-lbd-cg.github.io/bot/)
* [SPARQL-visualizer tutorial](https://w3c-lbd-cg.github.io/bot/tutorial/) of how to use BOT

## References

Please cite the following [paper](https://www.researchgate.net/publication/327631664_A_novel_workflow_to_combine_BIM_and_Linked_Data_for_existing_buildings) when using these configs for BOT in your LD-R app:

* Bonduel, M., Rasmussen, M. H., Pauwels, P., Vergauwen, M., & Klein, R. (2018). A novel workflow to combine BIM and Linked Data for existing buildings. In J. Karlshøj & R. J. Scherer (Eds.), *Proceedings of the 12th European Conference on Product and Process Modelling (ECPPM) (pp. 347–354)*. Copenhagen, Denmark: CRC Press.

Cite either the original [Github repository of LD-R](https://github.com/ali1k/ld-r) or one of the [publications](http://research.ld-r.org/) published by the authors of the main LD-R app, when referring to LD-R itself.