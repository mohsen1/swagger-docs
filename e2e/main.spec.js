'use strict';

var uitls = require('./uitls.js');

describe('The main view', function() {

  afterEach(uitls.checkLogs);

  describe('goes to homepage', function(){
    it('navigates to http://localhost:3000/', function(){
      browser.get('http://localhost:3000/');
      expect(browser.getCurrentUrl()).toContain('localhost:3000');
    });
  });

  describe('title', function(){
    it('should have "Swagger Petstore" title', function() {
      expect(browser.getTitle()).toContain('Swagger Petstore');
    });

    it('should render the navbar with Swagger specs title in it', function() {
      expect($('.sd-navbar').getText()).toContain('Swagger Petstore');
    });
  });

  describe('info', function(){
    it('should render the title of Swagger document in a H1', function(){
      expect($('.info h1.title').getText()).toContain('Swagger Petstore');
    });

    it('should render version number', function(){
      expect($('.info .version').getText()).toContain('Version');
      expect($('.info .version').getText()).toContain('1.0.0');
    });

    it('should render terms of service', function(){
      expect($('.info .terms').getText()).toContain('Terms of Service');
      expect($('.info .terms').getText()).toContain('http://helloreverb.com/terms/');
    });

    it('should render the description', function(){
      expect($('.info .description').getText()).toContain('This is a sample server Petstore server.');
    });

    it('should render a code element in description', function(){
      expect($('.info .description code').isPresent()).toBe(true);
    });

    it('should render a link element in description', function(){
      expect($('.info .description a').isPresent()).toBe(true);
    });
  });

  describe('paths', function(){
    it('should render all paths', function(){
      expect($('.sidebar .all-paths').getText()).toContain('All Paths');
    });

    it('"All Paths" should be a link', function(){
      expect($('.sidebar a.all-paths').isPresent()).toBe(true);
    });

    it('should render all other paths under "App Paths"', function() {
      expect($$('.sidebar .path-name-link').count()).toBe(12);
    });
  });

  describe('footer', function(){
    it('should render "Powered by Swagger"', function(){
      expect($('.main-footer').getText()).toContain('Powered by Swagger');
    });
  });
});
