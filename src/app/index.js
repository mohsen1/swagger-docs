'use strict';


import MainCtrl from './main/main.controller';
import PathCtrl from './path/path.controller';
import OperationCtrl from './operation/operation.controller';

import NavbarCtrl from '../components/navbar/navbar.controller';
import SidebarCtrl from '../components/sidebar/sidebar.controller';

import highlight from '../directives/highlight/highlight';

import Router from './router';

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
  .directive('highlight', highlight)
  .config(Router);
