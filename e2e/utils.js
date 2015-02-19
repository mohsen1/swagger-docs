'use strict';

/*
 * e2e tests utilities
*/

var utils = {

  /*
   * Navigates to home page and tests the URL
  */
  goHome: function () {
    describe('reset to homepage', function(){
      it('navigates to http://localhost:3000/', function(){
        browser.get('http://localhost:3000/');
        expect(browser.getCurrentUrl()).toContain('localhost:3000');
      });
    });
  },

  /*
   * Checks browser console logs to make sure there is no errors
  */
  checkLogs: function() {
    describe('browser console', function() {
      it('should have no errors', function() {

        browser.manage().logs().get('browser').then(function(browserLogs) {

          var errorLogs = browserLogs.filter(function(log) {
            return log.level.value > 900;
          });

          expect(errorLogs.length).toBe(0);

          if (errorLogs.length > 0) {
            errorLogs.forEach(console.log);
          }
        });
      });
    });
  }
};

module.exports = utils;
