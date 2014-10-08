angular.module('CasesApp', ['ui.router', 'ngResource'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/cases");

        $stateProvider
            .state('cases', {
                url: '/cases',
                views: {
                    "sidebar": {
                        resolve: {
                            cases: function(CasesFactory){
                                return CasesFactory.query()
                            }
                        },
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
                        resolve: {
                            cases: function(ClosedCasesFactory){
                                return ClosedCasesFactory.query()
                            }
                        },
                        templateUrl: "partials/list-closed.tpl.html",
                        controller: 'CasesListController'
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
                        resolve: {
                            activeCase: function(CasesFactory, $stateParams){
                                return CasesFactory.get({}, {Id: $stateParams.caseId})
                            },
                            caseComments: function(CaseCommentsFactory, $stateParams){
                                return CaseCommentsFactory.get({}, {Id: $stateParams.caseId})
                            }
                        },
                        templateUrl: "partials/details.tpl.html",
                        controller: 'CaseDetailsController'
                    }
                }

            })
            .state('cases.details', {
                url: '/:caseId',
                views: {
                    "content@": {
                        resolve: {
                            activeCase: function(CasesFactory, $stateParams){
                                return CasesFactory.get({}, {Id: $stateParams.caseId})
                            },
                            caseComments: function(CaseCommentsFactory, $stateParams){
                                return CaseCommentsFactory.get({}, {Id: $stateParams.caseId})
                            }
                        },
                        templateUrl: "partials/details.tpl.html",
                        controller: 'CaseDetailsController'
                    }
                }

            })
    })
    .run(['$rootScope', '$state', function(rootScope, state){
        rootScope.$state = state;
    }]);
