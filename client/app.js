angular.module('CasesApp', ['ui.router', 'ngResource'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/cases");

        $stateProvider
            .state('cases', {
                url: '/cases',
                views: {
                    "sidebar": {
                        templateUrl: "partials/list.tpl.html",
                        controller: 'CasesListController'
                    },
                    "content": {
                        templateUrl: "partials/empty.tpl.html"
                    }
                }
            })
            .state('closed', {
                url: '/cases/closed',
                views: {
                    "sidebar": {
                        templateUrl: "partials/list-closed.tpl.html",
                        controller: 'ClosedCasesListController'
                    },
                    "content": {
                        templateUrl: "partials/empty.tpl.html"
                    }
                }
            })
            .state('closed.details', {
                url: '/:caseId',
                views: {
                    "content@": {
                        templateUrl: "partials/details.tpl.html",
                        controller: 'CaseDetailsController'
                    }
                }

            })
            .state('cases.details', {
                url: '/:caseId',
                views: {
                    "content@": {
                        templateUrl: "partials/details.tpl.html",
                        controller: 'CaseDetailsController'
                    }
                }

            })
    })
    .run(['$rootScope', '$state', function(rootScope, state){
        rootScope.$state = state;
    }]);
