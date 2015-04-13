'use strict';

describe('MainCtrl', function () {
  let $controller;

  // Load the SwaggerDocs module, which contains the directive
  beforeEach(module('SwaggerDocs'));

  beforeEach(inject((_$controller_)=> {
    $controller = _$controller_;
  }));

  describe('$scope.config', ()=> {
    it('$scope.config should not be set initially', ()=> {
      let $scope = {};
      $controller('MainCtrl', {$scope: $scope});
      expect($scope.config).toBe(undefined);
    });
  });
});
