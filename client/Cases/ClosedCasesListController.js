angular.module('CasesApp').controller('ClosedCasesListController', function($scope, ClosedCasesFactory){
    $scope.cases = ClosedCasesFactory.query();
});
