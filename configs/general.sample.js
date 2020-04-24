// This file was modified from its original version by Mathias Bonduel on 30th of May 2018

export default {
    //MB: these two title elements don't change anything?
    //full page title
    appFullTitle: ['Linked Data Reactor'],
    //short page title
    appShortTitle: ['LD-R'],

    //Default Dataset under observation (view/browse/edit), if not set , will consider all existing graph names in 'generic' endpoint
    defaultDatasetURI: [''],

    //will prevent access if not logged in
    enableAuthentication: 0,
    //graph that stores users data, must be loaded beforehand if 'enableAuthentification' is set to 1
    authDatasetURI: ['http://ld-r.org/users'],
    //will allow super users to confirm and activate registered users
    enableUserConfirmation: 0,
    //if enabled will allow a recaptcha box in the registration form
    //note: if it is enabled, you need to set the key parameteres for recaptcha in the  server.js file
    useGoogleRecaptcha: 0,

    //the domain name under which basic dynamic resources and user resources will be defined
    baseResourceDomain: ['http://ld-r.org'],

    //will enable email notifications
    enableEmailNotifications: 0,

    //will put all update actions in log folder
    enableLogs: 0,

    //if provided will track the users on your LD-R instance
    googleAnalyticsID: '',

    //if set, will use the configs stored in a triple store
    //MB: changed all to 0
    enableDynamicServerConfiguration: 0,
    enableDynamicReactorConfiguration: 0,
    enableDynamicFacetsConfiguration: 0,
    //if set, wil allow users to create new datasets
    //only works if enableDynamicReactorConfiguration is set to 1 and triple store allows update qureies
    // MB: changed to 0
    enableAddingNewDatasets: 0,
    //allows users to annotate datasets using NLP APIs
    // MB: changed to 0
    enableDatasetAnnotation: 0,
    //allows users to save and import a SPARQL query from/to the system: WYSIWYQ concept
    // MB: changed to 0
    enableQuerySaveImport: 0,
    //graph that stores your configurations
    configDatasetURI: ['http://ld-r.org/configurations'],
    //will enable/disable auto config
    enableAutomaticConfiguration: 0,
    //the path to the upload folder
    uploadFolder: ['./uploaded'],
    //will enable csv imports
    enableCSVImport: 0,
    //graph that stores your mapping configurations for imprting other formats such as CSV
    mappingsDatasetURI: ['http://ld-r.org/mappings']
};
