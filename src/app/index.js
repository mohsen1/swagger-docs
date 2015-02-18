'use strict';
/*jshint esnext: true */

import MainCtrl from './main/main.controller';
import PathCtrl from './path/path.controller';
import OperationCtrl from './operation/operation.controller';
import Router from './router';
import NavbarCtrl from '../components/navbar/navbar.controller';
import SidebarCtrl from '../components/sidebar/sidebar.controller';

angular.module('SwaggerDocs', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'hc.marked'
  ])
  .controller('MainCtrl', MainCtrl)
  .controller('PathCtrl', PathCtrl)
  .controller('OperationCtrl', OperationCtrl)
  .controller('NavbarCtrl', NavbarCtrl)
  .controller('SidebarCtrl', SidebarCtrl)
  .config(Router);
