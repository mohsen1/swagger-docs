'use strict';


SwaggerDocs.controller('ParameterCtrl', function ParameterCtrl($rootScope, $scope, $stateParams) {

  /*
   * Determines if this operations should be highlighted
   *
   * @param parameterName {string}
   * @param operationName {string}
   *
   * @return {boolean} - true if this parameter should be highlighted
  */
  $scope.shouldHighlight = function setShouldHighlight(parameterName, operationName) {
    return $stateParams.parameterName &&
      $stateParams.operationName &&
      $stateParams.parameterName === parameterName &&
      $stateParams.operationName === operationName;
  };

  /*
   * Gets schema of a parameter.
   * A parameter can have a type of schema property, if type is presents, the schema
   * itself is the schema
   *
   * @param parameter {object} - the parameter object
   *
   * @returns {object} - the schema to show
  */
  $scope.getSchema = function(parameter) {
    if (parameter.type) {
      return parameter;
    }

    return parameter.schema;
  };
});
