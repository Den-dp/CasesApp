angular.module('CasesApp')
    .controller('ClosedCasesListController', function ($scope, CasesFactory) {
        $scope.cases = CasesFactory.query({closed: true});
    });
