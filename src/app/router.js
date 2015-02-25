'use strict';

SwaggerDocs.config(function Router($stateProvider, $urlRouterProvider) {

  /*

   Routing Hierarchy
   =================

   home
   ├── info
   ├── models (TODO)
   ├── tags (TODO)
   │    └── tag/operations
   │
   └── paths
       └── path
           └── operations
               ├── parameters/parameter
               ├── responses/response
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
      .state('home.paths.operations.parameters', {url: '/parameters/:parameterName'})
      .state('home.paths.operations.responses', {url: '/responses/:responseCode'})

    .state('home.tags', {
      url: 'tags/:tagName',
      controller: 'TagCtrl',
      templateUrl: 'app/tag/tag.html'
    });

  $urlRouterProvider.otherwise('/');
});
