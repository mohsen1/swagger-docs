'use strict';
/*jshint esnext: true */

import MainCtrl from './main/main.controller';
import PathCtrl from './path/path.controller';
import Router from './router';
import NavbarCtrl from '../components/navbar/navbar.controller';
import SidebarCtrl from '../components/sidebar/sidebar.controller';

angular.module('SwaggerDocs', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap'
  ])
  .controller('MainCtrl', MainCtrl)
  .controller('PathCtrl', PathCtrl)
  .controller('NavbarCtrl', NavbarCtrl)
  .controller('SidebarCtrl', SidebarCtrl)
  .config(Router);
