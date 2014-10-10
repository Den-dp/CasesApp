angular.module('CasesApp').controller('CasesListController', function($scope, CasesFactory){
    $scope.cases = CasesFactory.query();
});
