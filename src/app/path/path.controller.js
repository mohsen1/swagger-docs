'use strict';
/*jshint esnext: true */

class PathCtrl {
  constructor ($rootScope, $scope, $stateParams) {
    $scope.pathName = window.decodeURIComponent($stateParams.pathName);
  }
}

PathCtrl.$inject = ['$rootScope', '$scope', '$stateParams'];

export default PathCtrl;
