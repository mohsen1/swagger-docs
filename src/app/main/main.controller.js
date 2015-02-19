'use strict';

class MainCtrl {
  constructor ($http, $rootScope) {

    // Initialize rendering of the app by assigning $rootScope variables
    getConfigs();

    /*
     * Gets configurations from embedded script or remote file
    */
    function getConfigs() {

      // use embedded configurations if it's available
      if (angular.isObject(window.swaggerDocsConfiguration)) {
        assignConfigs(window.swaggerDocsConfiguration);
        return;
      }

      // get configuration file remotely
      $http.get('./config.json').then(
        function(resp) {

          if (!angular.isObject(resp.data)) {
            throw new Error('Configuration should be an object.');
          }

          assignConfigs(resp.data);
        },
        function() {
          throw new Error('Failed to load configurations.');
        }
      );
    }

    /*
     * Gets Swagger specs from embedded script or remote file
    */
    function getSwagger() {

      // if specs is embedded in the document, use them
      if (angular.isObject(window.swaggerDocsSpecs)) {
        assignSwaggerSpecs(window.swaggerDocsSpecs);
        return;
      }

      // get specs file remotely
      $http.get($rootScope.config.loadSwaggerFrom).then(
        function(resp) {

          // if response data is string, it could be YAML.
          if (angular.isString(resp.data)) {
            const specs = window.jsyaml.load(resp.data);

            if (!angular.isObject(specs)) {
              throw new Error('Failed to parse Swagger YAML.');
            }

            assignSwaggerSpecs(specs);
            return;
          }

          if (!angular.isObject(resp.data)) {
            throw new Error('Swagger specs should be an object.');
          }

          assignSwaggerSpecs(resp.data);
        },
        function() {
          throw new Error('Failed to load Swagger specs.');
        }
      );
    }

    /*
     * Assigns configuration object to $rootScope
     * @param config {object} - The configuration object
    */
    function assignConfigs (config) {
      $rootScope.config = config;

      // once configuration is set, get Swagger specs
      getSwagger();
    }

    /*
     * Assigns Swagger specs to $rootScope
     * @param swagger {object} - the Swagger specs object
    */
    function assignSwaggerSpecs(swagger) {
      $rootScope.swagger = swagger;
    }
  }
}

MainCtrl.$inject = ['$http', '$rootScope'];

export default MainCtrl;
