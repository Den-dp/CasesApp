(function () {
    'use strict';

    DetailsController.$inject = ['CasesFactory', 'CaseCommentsFactory', '$stateParams'];
    function DetailsController(CasesFactory, CaseCommentsFactory, $stateParams) {
        this.case = CasesFactory.get({caseId: $stateParams.caseId});
        this.comments = CaseCommentsFactory.query({caseId: $stateParams.caseId});
    }

    angular.module('app.cases')
        .controller('DetailsController', DetailsController);

})();