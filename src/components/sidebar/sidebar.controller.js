'use strict';
/*jshint esnext: true */

class SidebarCtrl {
  constructor($scope, $rootScope) {
    $scope.encodeURIComponent = window.encodeURIComponent;
  }
}

SidebarCtrl.$inject = ['$scope', '$rootScope'];

export default SidebarCtrl;
