angular.module('CasesApp').controller('CasesListController', function($scope, $location, CasesFactory){
    $scope.cases = CasesFactory.query();
});
