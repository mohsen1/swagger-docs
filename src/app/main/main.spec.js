'use strict';

describe('MainCtrl', function () {
  var $controller;

  // Load the SwaggerDocs module, which contains the directive
  beforeEach(module('SwaggerDocs'));

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.config', function() {
    it('$scope.config should not be set initially', function(){
      var $scope = {};
      var controller = $controller('MainCtrl', {$scope: $scope});
      expect($scope.config).toBe(undefined);
    });
  });
});
