'use strict';


SwaggerDocs.controller('ResponseCtrl', function ResponseCtrl($rootScope, $scope, $stateParams) {

  /*
   * Determines if this operations should be highlighted
   *
   * @param responseCode {string}
   *
   * @return {boolean} - true if this operation should be highlighted
  */
  $scope.shouldHighlight = function setShouldHighlight(responseCode) {

    return $stateParams.responseCode &&
      $stateParams.responseCode === responseCode;
  };
});
