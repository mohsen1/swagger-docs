'use strict';


SwaggerDocs.controller('TagCtrl', function TagCtrl($scope/*, $rootScope, $stateParams*/) {

  /*
   * Get all operations that are tagged with a tag
   *
   * @param
   * @param
   *
   * @returns
  */
  $scope.getOperationsForTag = (tagName, swagger)=> {

    const result = [];

    for (let pathName in swagger.paths) {
      for (let operationsName in swagger.paths[pathName]) {

        if (swagger.paths[pathName][operationsName].tags.includes(tagName)) {
          result.push({
            operationsName: operationsName,
            pathName: pathName
          });
        }
      }
    }

    return result;
  };
});
