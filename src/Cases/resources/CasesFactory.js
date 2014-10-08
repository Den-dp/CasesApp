angular.module('CasesApp').factory('CasesFactory', function($resource){
    return $resource('http://localhost:3000/api/cases/:caseId', {
        caseId: '@Id'
    });
});