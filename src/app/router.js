'use strict';

function Router($stateProvider, $urlRouterProvider) {

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
    });

  $urlRouterProvider.otherwise('/');
}
export default Router;
