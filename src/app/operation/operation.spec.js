'use strict';

describe('OperationCtrl', function () {
  var $controller;

  // Load the SwaggerDocs module, which contains the directive
  beforeEach(module('SwaggerDocs'));

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.getResponseCodeGroup', function () {
    it('$scope.getResponseCodeGroup should return correct response codes', function(){
      var $scope = {};
      var controller = $controller('OperationCtrl', {$scope: $scope});

      expect($scope.getResponseCodeGroup('200')).toBe(200);
      expect($scope.getResponseCodeGroup('201')).toBe(200);
      expect($scope.getResponseCodeGroup('400')).toBe(400);
      expect($scope.getResponseCodeGroup('404')).toBe(400);
    });
  });

  describe('$scope.shouldHighlight', function () {
    var shouldHighlight,
      $scope;

    beforeEach(function () {
      scope = {};
      var controller = $controller('OperationCtrl', {$scope: $scope});
      shouldHighlight = $scope.shouldHighlight;
    });

    it('should return false if stateParams.parameterName is set', function () {
      $scope.parameterName = 'something';
      $scope.operationName = 'get';

      expect(shouldHighlight('get')).toBe(false);
    });

    it('should return false if stateParams.responseCode is set', function () {
      $scope.responseCode = '200';
      $scope.operationName = 'get';

      expect(shouldHighlight('get')).toBe(false);
    });

    it('should return false if operationName is different', function () {
      $scope.responseCode = '200';
      $scope.operationName = 'get';

      expect(shouldHighlight('post')).toBe(false);
    });

    it('should return true if operationName is the same', function () {
      $scope.responseCode = '200';
      $scope.operationName = 'get';

      expect(shouldHighlight('get')).toBe(true);
    });
  });
});
