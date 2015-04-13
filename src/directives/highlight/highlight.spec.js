'use strict';

describe('highlight directive', function () {
  var $compile,
      $rootScope,
      element;

  // Load the SwaggerDocs module, which contains the directive
  beforeEach(module('SwaggerDocs'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(function(){
    spyOn(jQuery.fn, 'scrollIntoViewIfNeeded');
  });

  describe('when expression is true', function(){

    beforeEach(function(){
      element = $compile('<div highlight="true">')($rootScope);
      $rootScope.$digest();
    });

    it('should set swagger-docs-highlighted class to element', function() {
      expect(element.hasClass('swagger-docs-highlighted')).toBe(true);
    });

    it('should call scrollIntoViewIfNeeded method on the element', function() {
      expect(element.scrollIntoViewIfNeeded).toHaveBeenCalled();
    });
  });

  describe('when expression is false', function(){

    beforeEach(function(){
      element = $compile('<div highlight="false">')($rootScope);
      $rootScope.$digest();
    });

    it('should not set swagger-docs-highlighted class to element', function() {
      expect(element.hasClass('swagger-docs-highlighted')).toBe(false);
    });

    it('should not call scrollIntoViewIfNeeded method on the element', function() {
      expect(element.scrollIntoViewIfNeeded).not.toHaveBeenCalled();
    });
  });

  describe('when expression is true in $scope', function(){

    beforeEach(function(){
      $rootScope.expr = true;
      element = $compile('<div highlight="expr">')($rootScope);
      $rootScope.$digest();
    });

    it('should set swagger-docs-highlighted class to element', function() {
      expect(element.hasClass('swagger-docs-highlighted')).toBe(true);
    });

    it('should call scrollIntoViewIfNeeded method on the element', function() {
      expect(element.scrollIntoViewIfNeeded).toHaveBeenCalled();
    });
  });

  describe('when expression is false in $scope', function(){

    beforeEach(function(){
      $rootScope.expr = false;
      element = $compile('<div highlight="expr">')($rootScope);
      $rootScope.$digest();
    });

    it('should not set swagger-docs-highlighted class to element', function() {
      expect(element.hasClass('swagger-docs-highlighted')).toBe(false);
    });

    it('should not call scrollIntoViewIfNeeded method on the element', function() {
      expect(element.scrollIntoViewIfNeeded).not.toHaveBeenCalled();
    });
  });


  describe('multiple elements', function(){
    var el1,
      el2;

    beforeEach(function(){
      $rootScope.expr1 = true;
      $rootScope.expr2 = false;
      el1 = $compile('<div highlight="expr1">')($rootScope);
      el2 = $compile('<div highlight="expr2">')($rootScope);
      $rootScope.$digest();
    });

    it('should set swagger-docs-highlighted class to el1', function() {
      expect(el1.hasClass('swagger-docs-highlighted')).toBe(true);
    });

    it('should not set swagger-docs-highlighted class to el2', function() {
      expect(el2.hasClass('swagger-docs-highlighted')).toBe(false);
    });

    it('should change classes when in both elements when expressions change', function(){
      $rootScope.expr1 = false;
      $rootScope.expr2 = true;
      $rootScope.$digest();

      expect(el2.hasClass('swagger-docs-highlighted')).toBe(true);
    });
  });

});
