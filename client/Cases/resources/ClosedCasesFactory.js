angular.module('CasesApp').factory('ClosedCasesFactory', function($resource){
    return $resource('http://localhost:3000/api/cases/:caseId', {
        caseId: '@Id',
        closed: true
    });
});