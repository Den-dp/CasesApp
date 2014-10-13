angular.module('CasesApp')
    .controller('DetailsController', function ($scope, CasesFactory, CaseCommentsFactory, $stateParams) {
        $scope.case = CasesFactory.get({caseId: $stateParams.caseId});
        $scope.comments = CaseCommentsFactory.query({caseId: $stateParams.caseId});
    });