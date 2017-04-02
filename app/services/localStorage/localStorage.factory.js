(function () {
    'use strict';

    angular
        .module('app')
        .factory('localStorage', localStorage);

    localStorage.inject = ['localStorageService'];
    function localStorage(localStorageService) {

        return {
            get: get,
            set: set
        };

        // function get() {
        //     return JSON.parse(window.localStorage.getItem("items"));
        // }
        // function set(data) {
        //     window.localStorage.setItem("items", JSON.stringify(data));
        // }

        function get() {
            return localStorageService.get("items");
        }
        function set(data) {
            if (localStorageService.isSupported) {
                localStorageService.set("items", data);
            }
        }
    }
})();