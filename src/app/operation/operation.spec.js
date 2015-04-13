'use strict';

describe('OperationCtrl', ()=> {
  var $controller;
  var $stateParams;

  // Load the SwaggerDocs module, which contains the directive
  beforeEach(module('SwaggerDocs'));

  beforeEach(inject((_$controller_, _$stateParams_) => {
    $controller = _$controller_;
    $stateParams = _$stateParams_;
  }));

  describe('$scope.getResponseCodeGroup', ()=> {
    it('$scope.getResponseCodeGroup should return correct response codes', ()=> {
      var $scope = {};
      $controller('OperationCtrl', {$scope: $scope});

      expect($scope.getResponseCodeGroup('200')).toBe(2);
      expect($scope.getResponseCodeGroup('201')).toBe(2);
      expect($scope.getResponseCodeGroup('400')).toBe(4);
      expect($scope.getResponseCodeGroup('404')).toBe(4);
    });
  });

  describe('$scope.shouldHighlight', ()=> {
    let shouldHighlight;
    let $scope;

    beforeEach( ()=> {
      $scope = {};
      $controller('OperationCtrl', {$scope: $scope});
      shouldHighlight = $scope.shouldHighlight;
    });

    // Flush out states in stateParams
    afterEach( ()=> {
      $stateParams.operationName = null;
      $stateParams.responseCode = null;
      $stateParams.parameterName = null;
    });

    it('should return false if stateParams.parameterName is set', ()=> {
      $stateParams.parameterName = 'something';
      $stateParams.operationName = 'get';

      expect(shouldHighlight('get')).toBe(false);
    });

    it('should return false if stateParams.responseCode is set', ()=> {
      $stateParams.responseCode = '200';
      $stateParams.operationName = 'get';

      expect(shouldHighlight('get')).toBe(false);
    });

    it('should return false if operationName is different', ()=> {
      $stateParams.responseCode = '200';
      $stateParams.operationName = 'get';

      expect(shouldHighlight('post')).toBe(false);
    });

    it('should return true if operationName is the same', ()=> {
      $stateParams.operationName = 'get';

      expect(shouldHighlight('get')).toBe(true);
    });
  });
});
