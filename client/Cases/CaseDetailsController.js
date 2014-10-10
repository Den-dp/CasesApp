angular.module('CasesApp')
    .controller('CaseDetailsController', function ($scope, CasesFactory, CaseCommentsFactory, $stateParams) {
        $scope.case = CasesFactory.get({}, {sid: $stateParams.caseId});
        $scope.comments = CaseCommentsFactory.get({}, {sid: $stateParams.caseId});
    });