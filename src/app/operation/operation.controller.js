'use strict';
/*jshint esnext: true */

class OperationCtrl {
  constructor ($rootScope, $scope, $stateParams) {

    /*
     * Determines if this operations should be highlighted
     *
     * @param operationName {string}
     *
     * @return {boolean} - true if this operation should be highlighted
    */
    $scope.shouldHighlight = function setShouldHighlight(operationName) {
      return $stateParams.operationName === operationName;
    }

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
  }
}

OperationCtrl.$inject = ['$rootScope', '$scope', '$stateParams', '$timeout'];

export default OperationCtrl;
