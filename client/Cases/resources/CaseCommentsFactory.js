(function () {
    'use strict';

    CaseCommentsFactory.$inject = ['$resource'];
    function CaseCommentsFactory($resource) {
        return $resource('/api/cases/:caseId/comments');
    }

    angular.module('app.cases')
        .factory('CaseCommentsFactory', CaseCommentsFactory);

})();