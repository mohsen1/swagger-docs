'use strict';

SwaggerDocs.config(function Router($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    })
    .state('home.paths', {
      url: 'paths/:pathName',
      templateUrl: 'app/path/path.html',
      controller: 'PathCtrl'
    })
    .state('home.paths.operations', {
      url: 'paths/:pathName/:operationName',
      templateUrl: 'app/operation/operation.html',
      controller: 'OperationCtrl'
    });

  $urlRouterProvider.otherwise('/');
});
