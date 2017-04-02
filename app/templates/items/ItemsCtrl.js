(function () {
    'use strict';

    angular
        .module('app')
        .controller('ItemsCtrl', ItemsCtrl);

    ItemsCtrl.inject = ['$scope', 'localStorage', 'getItems', 'temp'];
    function ItemsCtrl($scope, localStorage, getItems, temp) {
        var vm = this;

        start();

        vm.selectedIndex = 0;

        vm.selectItem = selectItem;
        vm.addItem = addItem;
        vm.deleteItem = deleteItem;        

        function addItem() {
            if (vm.newItemInput.item != "") {
                vm.listItems.push(vm.newItemInput);
                localStorage.set(vm.listItems);
                resetForm();
                if(vm.listItems.length == 1){
                    var comments = vm.listItems[0];
                    comments.index = 0;
                    temp.comments = comments;     
                }
            }
        }
        function selectItem(index) {
            vm.selectedIndex = index;
            var comments = vm.listItems.slice(index, index + 1)[0];
            comments.index = index;
            temp.comments = comments;
        }
        function deleteItem(index) {
            vm.listItems.splice(index, 1);
            localStorage.set(vm.listItems);
            if (index == vm.listItems.length) {
                vm.selectedIndex = 0;
                var comments = vm.listItems.slice(0, 1)[0];
                if (comments) {
                    comments.index = 0;
                    temp.comments = comments;
                }
                else{
                    temp.comments = undefined;
                }
            }
        }
        function resetForm() {
            vm.newItemInput = {
                item: "",
                comments: []
            }
        }
        function start() {
            resetForm();
            vm.listItems = getItems;
            temp.comments = vm.listItems.slice(0, 1)[0];
        }
        
        $scope.$watch(function () { return temp.comments; }, function (newItem, oldItem) {
            if (newItem != oldItem && newItem != undefined) {
                vm.listItems.splice(newItem.index, 1, newItem);
                localStorage.set(vm.listItems);
            }
        }, true);
    }
})();