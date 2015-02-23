'use strict';

SwaggerDocs.config(function Router($stateProvider, $urlRouterProvider) {

  /*

   Routing Hierarchy
   =================

   home
   ├── info
   ├── models (TODO)
   └── paths
       └── operations
           ├── parameters
           ├── responses
           └── try (TODO)
  */

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'MainCtrl',
      templateUrl: 'app/main/main.html'
    })
    .state('home.paths', {
      url: 'paths/:pathName',
      controller: 'PathCtrl',
      templateUrl: 'app/path/path.html'
    })
      .state('home.paths.operations', {url: '/:operationName'})
      .state('home.paths.operations.parameter', {url: '/:parameterName'});

  $urlRouterProvider.otherwise('/');
});
