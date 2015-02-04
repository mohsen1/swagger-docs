'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('swaggerDocs'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should ...', inject(function($controller) {

    $controller('MainCtrl', {
      $scope: scope
    });

    expect(true).toBeTruthy();
  }));
});
