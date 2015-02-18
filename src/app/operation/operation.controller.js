'use strict';
/*jshint esnext: true */

class OperationCtrl {
  constructor ($rootScope, $scope, $stateParams) {
    $scope.operationName = $stateParams.operationName;
  }
}

OperationCtrl.$inject = ['$rootScope', '$scope', '$stateParams'];

export default OperationCtrl;
