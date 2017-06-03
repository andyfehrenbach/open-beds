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
        controller: 'MapController'
      })
      .state('list', {
        url: '/list',
        templateUrl: 'app/list/list.html',
        controller: 'ListController'
      })
      .state('counter', {
        url: '/counter',
        templateUrl: 'app/counter/counter.html',
        controller: 'CounterController',
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
      .state('providers', {
        url: '/providers',
        templateUrl: 'app/providers/providers.html',
        controller: 'ProviderController',
        controllerAs: 'vm'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'vm'
      });
    $urlRouterProvider.otherwise('/providers');
  }

})();
