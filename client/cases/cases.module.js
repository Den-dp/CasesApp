(function () {
    'use strict';

    angular.module('app.cases', [
        'ui.router',
        'ngResource'
    ])
        .config(stateConfiguration);

    stateConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];
    function stateConfiguration($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/cases");

        $stateProvider
            .state('cases', {
                url: '/cases',
                views: {
                    'sidebar': {
                        templateUrl: 'partials/list.tpl.html',
                        controller: 'CasesListController'
                    },
                    'content': {
                        templateUrl: 'partials/empty.tpl.html'
                    }
                }
            })
            .state('closed', {
                url: '/cases/closed',
                views: {
                    'sidebar': {
                        templateUrl: 'partials/list.tpl.html',
                        controller: 'ClosedCasesListController'
                    },
                    'content': {
                        templateUrl: 'partials/empty.tpl.html'
                    }
                }
            })
            .state('closed.details', {
                url: '/:caseId',
                views: {
                    'content@': {
                        templateUrl: 'partials/details.tpl.html',
                        controller: 'DetailsController',
                        controllerAs: 'details'
                    }
                }
            })
            .state('cases.details', {
                url: '/:caseId',
                views: {
                    'content@': {
                        templateUrl: 'partials/details.tpl.html',
                        controller: 'DetailsController',
                        controllerAs: 'details'
                    }
                }
            })

    }

})();