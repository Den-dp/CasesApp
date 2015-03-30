(function () {
    'use strict';

    ClosedCasesListController.$inject = ['$scope', 'CasesFactory'];
    function ClosedCasesListController($scope, CasesFactory) {
        $scope.cases = CasesFactory.query({closed: true});
    }

    angular.module('app.cases')
        .controller('ClosedCasesListController', ClosedCasesListController);

})();