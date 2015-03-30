(function () {
    'use strict';

    CasesFactory.$inject = ['$resource'];
    function CasesFactory($resource) {
        return $resource('/api/cases/:caseId');
    }

    angular.module('app.cases')
        .factory('CasesFactory', CasesFactory);
})();