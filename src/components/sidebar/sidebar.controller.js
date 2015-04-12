'use strict';

SwaggerDocs.controller('SidebarCtrl', function SidebarCtrl($scope) {
  $scope.encodeURIComponent = window.encodeURIComponent;

  /*
   * Determines if the given path should be shown or not based on current filter
   * @param {string} pathName
   * @return {boolean} - true if the path should be shown, false otherwise
  */
  $scope.showPath = function(pathName, filter='') {

    // Remove whitespace from beginning and end of the filter
    filter = filter.trim();

    // TODO: use edit distance or something more interesting
    return pathName.indexOf(filter) > -1;
  };
});
