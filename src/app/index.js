'use strict';
/*jshint esnext: true */

import MainCtrl from './main/main.controller';
import Router from './router';
import NavbarCtrl from '../components/navbar/navbar.controller';

angular.module('SwaggerDocs', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
  ])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)
  .config(Router);
