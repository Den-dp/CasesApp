angular.module('CasesApp')
    .factory('CasesFactory', function ($resource) {
        return $resource('/api/cases/:caseId');
    });