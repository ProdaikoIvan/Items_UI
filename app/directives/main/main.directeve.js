(function() {
    'use strict';

    angular
        .module('app')
        .directive('leftMenu', menu);

    menu.inject = [''];
    function menu() {

        return {
            bindToController: true,
            templateUrl: "directives/main/main.html",
            controller: "MainCtrl",
            controllerAs: 'vm',
            link: link,
            restrict: 'AE',
            replace: true,
            scope: {
            }
        };
        
        function link(scope, element, attrs) {

        }
    }
})();