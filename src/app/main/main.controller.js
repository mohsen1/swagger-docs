'use strict';
/*jshint esnext: true */

class MainCtrl {
  constructor ($http) {

    // get configuration file
    $http.get('./config.json').then((resp)=>console.log(resp.data));
  }
}

MainCtrl.$inject = ['$http'];

export default MainCtrl;
