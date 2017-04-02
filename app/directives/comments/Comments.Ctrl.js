(function () {
    'use strict';

    angular
        .module('app')
        .controller('CommentsCtrl', CommentsCtrl);

    CommentsCtrl.inject = ['$scope', 'localStorage', 'temp'];
    function CommentsCtrl($scope, localStorage, temp) {
        var vm = this;

        vm.disabled = false;
        vm.numItem;
        vm.activeItem = true;
        vm.comments = temp.comments;
        vm.addCommentsInput = "";

        vm.addComments = addComments;

        function addComments() {
            if (vm.addCommentsInput != "") {
                vm.comments.push(vm.addCommentsInput);
                temp.comments.comments = vm.comments;
                vm.addCommentsInput = "";
            }
        }

        $scope.$watch(function () { return temp.comments; }, function (newItem, oldItem) {
            if (newItem != undefined) {
                vm.comments = newItem.comments;
                var result = newItem.index;
                vm.numItem = ++result;
                vm.disabled = false;
            }
            else {
                vm.disabled = true;
                vm.comments = [];
                 vm.numItem = undefined;
            }
        });
    }
})();