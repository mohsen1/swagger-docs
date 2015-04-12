'use strict';

var helpers = require('./helpers');

describe('paths', function() {

  helpers.goHome();

  afterEach(helpers.checkLogs);

  describe('navigation', function() {
    describe('when clicking on "All Paths"', function(){

      it('navigates using click on all paths', function(){
        $('.sidebar a.all-paths').click();
        expect(browser.getCurrentUrl()).toContain('/paths/');
      });

      it('should remove info section', function(){
        expect($('.info').isPresent()).toBe(false);
      });

      it('renders all paths', function() {
        expect($$('.operation').count()).toBe(18);
        expect($$('.path').count()).toBe(12);
      });
    });

    describe('when clicking on a path name on sidebar', function(){
      it('navigates by clicking on /pets path', function(){
        $('.sidebar .path-name-link').click(); // click the first one which is /pets
        expect(browser.getCurrentUrl()).toContain('pets');
      });

      it('renders only /pets operations', function() {
        expect($$('.operation').count()).toBe(2);
        expect($$('.path').count()).toBe(1);
      });
    });

    describe('when typing "pet" in path filter', function(){
      it('filter down paths to show only paths that have word "pet" in them', function(){
        $('.side-bar .filter input').sendKeys('pet');

        expect($$('.sidebar .path-name-link'.count())).toBe(5);
      });
    });
  });
});
