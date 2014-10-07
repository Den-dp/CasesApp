angular.module('CasesApp').factory('CasesFactory', function($resource){
    return $resource('/api/:caseId', {caseId:'@_id'});
});