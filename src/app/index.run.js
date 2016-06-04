(function() {
  'use strict';

  angular
    .module('openBeds3')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
