'use strict';


SwaggerDocs.controller('PathCtrl', function PathCtrl($rootScope, $scope, $stateParams) {

  // decode UI components of a path name, it might contain invalid characters
  $scope.pathName = window.decodeURIComponent($stateParams.pathName);


  /*
   * Determines if this path should be highlighted
   *
   * @param pathName {string}
   *
   * @return {boolean} - true if this operation should be highlighted
  */
  $scope.shouldHighlight = function setShouldHighlight(pathName) {

    // if there is an operationName in state, let it highlight the operations
    return !$stateParams.operationName &&

    // If there is a prameterName in state, let it highlight the parameter
      !$stateParams.parameterName &&

    // if there is a responseCode in state, let it highlight the response
      !$stateParams.responseCode &&

    // if state's pathName equals pathName argument
      $stateParams.pathName === pathName;
  };

  /*
   * filter paths object based on current pathName.
   * If there is no pathName present it will return all paths
   *
   * @param paths {object} - The Swagger document paths object
   *
   * @returns {object} - filtered paths
  */
  $scope.filterPaths = (paths)=> {
    if ($scope.pathName && angular.isObject(paths)) {
      return { [$scope.pathName]: paths[$scope.pathName] };
    } else {
      return paths;
    }
  };
});
