'use strict';

module.exports = function(config) {

  config.set({
    autoWatch : false,

    frameworks: ['jasmine'],

    browsers : [
      process.env.TRAVIS ? 'Firefox' : 'Chrome'
    ],

    reporters: ['mocha'],

    plugins : [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-mocha-reporter'
    ]
  });
};
