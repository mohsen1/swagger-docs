'use strict';
/*jshint esnext: true */

class PathCtrl {
  constructor ($rootScope, $scope, $stateParams) {

    // decode UI components of a path name, it might contain invalid characters
    $scope.pathName = window.decodeURIComponent($stateParams.pathName);

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
  }
}

PathCtrl.$inject = ['$rootScope', '$scope', '$stateParams'];

export default PathCtrl;
