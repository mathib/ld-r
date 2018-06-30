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

6) Create a new Stardog database with the name 'demo-buildingTopology' and add the [BOT](https://raw.githubusercontent.com/w3c-lbd-cg/bot/master/bot.ttl) (and optionally the [PRODUCT]()) ontology in a named graph of this database. 
**Note**: the BOT ontology has changed recently at LDAC2018 and some classes/relations are renamed/changed. This app assumes the original BOT version of fall 2017 (after LDAC2017). This version is available in this repo: `Linked Building Data ontologies/bot_v0.2.0_20171027.ttl` 

`stardog-admin db create -n demo-buildingTopology`

`stardog data add --named-graph https://w3id.org/myNamedGraph/bot demo-buildingTopology bot_v0.2.0_20171027.ttl`

7) Start the LD-R application

`npm run dev`

8) Go in a browser to [localhost:3000]() to find the LD-R application
9) Click on 'Datasets' and add a bot:Site instance (full URI) to start the modeling (bottom of the window). Add property/value directly for the newly created instance: "rdf:type bot:Site" (bottom of the window)
10) Start the modeling of the building topology by adding BOT relations from the bot:Site instance to new instances. All BOT classes (except bot:Zone) are inferred from the used relations. For convenient modeling, the UI allows the usage of predifined prefixes (data/prefixes.js)

## Modified files from the original LD-R repository
* configs/general.js
* configs/reactor.js
* configs/server.js
* data/autocompletes.js
* data/prefixes.js

## More information on the usage of BOT
* [draft community report of BOT](https://w3c-lbd-cg.github.io/bot/)
* [SPARQL-visualizer tutorial](https://w3c-lbd-cg.github.io/bot/tutorial/) of how to use BOT

## Live demo
TBA