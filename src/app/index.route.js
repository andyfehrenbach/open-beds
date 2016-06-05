(function() {
  'use strict';

  angular
    .module('openBeds3')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('map', {
        url: '/map',
        templateUrl: 'app/map/map.html',
        controller: 'MapController',
        controllerAs: 'vm'
      })
      .state('list', {
        url: '/list',
        templateUrl: 'app/list/list.html',
        controller: 'ListController',
        controllerAs: 'vm'
      })
      .state('detail', {
        url: '/detail',
        templateUrl: 'app/detail/detail.html',
        controller: 'DetailController',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'vm'
      });


    $urlRouterProvider.otherwise('/map');
  }

})();
