'use strict';

function Router($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('/');
}
export default Router;
