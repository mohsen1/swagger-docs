'use strict';


SwaggerDocs.controller('OperationCtrl', function OperationCtrl($rootScope, $scope, $stateParams) {

  /*
   * Determines if this operations should be highlighted
   *
   * @param operationName {string}
   *
   * @return {boolean} - true if this operation should be highlighted
  */
  $scope.shouldHighlight = function setShouldHighlight(operationName) {

    // If there is a prameterName in state, let it highlight the parameter
    return !$stateParams.parameterName &&

    // if there is a responseCode in state, let it highlight the response
      !$stateParams.responseCode &&

    // if state's operationName equals operationName argument
      $stateParams.operationName === operationName;
  };

  /*
   * Generate a single digit int number for group of a response code
   * For example group code for response code 304 is 3
   *
   * @param responseCode {number} - response code number
   *
   * @returns {number} - a single digit number
  */
  $scope.getResponseCodeGroup = (responseCode) => {
    return Math.floor(parseInt(responseCode, 10) / 100);
  };
});
