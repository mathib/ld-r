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

Optionally add some example triples made using BOT (e.g. [`Duplex_A_20110907_exampleData_bot_v0.2.0_20171027.ttl`](https://raw.githubusercontent.com/mathib/ld-r/master/Linked%20Building%20Data%20ontologies/Duplex_A_20110907_exampleData_bot_v0.2.0_20171027.ttl)

`stardog data add demo-buildingTopology Duplex_A_20110907_exampleData_bot_v0.2.0_20171027.ttl`

7) Start the LD-R application

`npm run dev`

8) Go in a browser to [localhost:3000](localhost:3000) to find the LD-R application
9) Click on 'Datasets' (bottom of the page) and add a `bot:Site` instance (enter a full URI to name the new node) to start the modeling. Add property/value directly for the newly created instance: "rdf:type bot:Site" (bottom of the page)
10) Start the modeling of the building topology by adding BOT relations from the bot:Site instance to new instances. All BOT classes (except bot:Zone) are inferred from the used relations. For convenient modeling, the UI allows the usage of predifined prefixes (data/prefixes.js)

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

Please cite the following paper when using these configs for BOT in your LD-R app:

* Bonduel, M., Rasmussen, M. H., Pauwels, P., Vergauwen, M., & Klein, R. (2018). A novel workflow to combine BIM and Linked Data for existing buildings. In J. Karlshøj & R. J. Scherer (Eds.), *Proceedings of the 12th European Conference on Product and Process Modelling (ECPPM) (pp. 347–354)*. Copenhagen, Denmark: CRC Press.

Cite either the original [Github repository of LD-R](https://github.com/ali1k/ld-r) or one of the [publications](http://research.ld-r.org/) published by the authors of the main LD-R app, when referring to LD-R itself.
