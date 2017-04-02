'use strict';
angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/items');
            $stateProvider
                .state('items', {
                    url: '/items',
                    templateUrl: 'templates/items/items.html',
                    controller: 'ItemsCtrl',
                    controllerAs: 'vm',
                    resolve:{
                        getItems: function(localStorage){
                            var result = localStorage.get();
                            return result ? result : [];
                        }
                    }
                });
        }
    ]);