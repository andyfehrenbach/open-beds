(function () {
  'use strict';

  angular
    .module('openBeds3')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController(shelters, $scope) {

    $scope.awesomeThings = [];
    $scope.classAnimation = '';
    $scope.creationDate = 1465065838946;

    $scope.listInfo = function () {
      return $scope.list;
    };
    $scope.list = [];

    shelters.getShelters().success(function (data) {
      $scope.list = data.feed.entry;
      $scope.$apply();
      //return result; //JavaScript object
    });

  }
})();


