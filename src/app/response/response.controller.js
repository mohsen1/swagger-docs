'use strict';


SwaggerDocs.controller('ResponseCtrl', function ResponseCtrl($rootScope, $scope, $stateParams) {

  /*
   * Determines if this response should be highlighted
   *
   * @param responseCode {string}
   *
   * @return {boolean} - true if this operation should be highlighted
  */
  $scope.shouldHighlight = function setShouldHighlight(responseCode, operationName) {

    return $stateParams.responseCode &&
      $stateParams.operationName ===operationName &&
      $stateParams.responseCode === responseCode;
  };
});
