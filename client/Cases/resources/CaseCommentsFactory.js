angular.module('CasesApp')
    .factory('CaseCommentsFactory', function ($resource) {
        return $resource('/api/cases/:caseId/comments');
    });
