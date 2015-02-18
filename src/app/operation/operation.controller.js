'use strict';
/*jshint esnext: true */

class OperationCtrl {
  constructor ($rootScope, $scope, $stateParams) {

    $scope.getResponseCodeGroup = (responseCode) => {
      return Math.floor(parseInt(responseCode, 10) / 100);
    }
  }
}

OperationCtrl.$inject = ['$rootScope', '$scope', '$stateParams'];

export default OperationCtrl;
