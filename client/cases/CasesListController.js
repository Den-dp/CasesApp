(function () {
    'use strict';

    CasesListController.$inject = ['$scope', 'CasesFactory'];
    function CasesListController($scope, CasesFactory) {
        $scope.cases = CasesFactory.query();
    }

    angular.module('app.cases')
        .controller('CasesListController', CasesListController);

})();