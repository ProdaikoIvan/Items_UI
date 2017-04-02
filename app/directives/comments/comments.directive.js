(function() {
    'use strict';

    angular
        .module('app')
        .directive('comments', comments);

    comments.inject = [''];
    function comments() {
        return {
            bindToController: true,
            templateUrl: "directives/comments/comments.html",
            controller: "CommentsCtrl",
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