angular.module('CasesApp')
    .controller('CaseDetailsController', function ($scope, activeCase, caseComments) {
        $scope.case = activeCase;
        $scope.comments = caseComments;
    });