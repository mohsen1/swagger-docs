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
});
