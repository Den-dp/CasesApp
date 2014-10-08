angular.module('CasesApp').factory('CaseCommentsFactory', function ($resource) {
    return $resource('http://localhost:3000/api/cases/:caseId/comments', {
            caseId: '@Id'
        },
        {'get': {method: 'GET', isArray: true}}
    );
});
