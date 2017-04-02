(function () {
    'use strict';

    angular
        .module('app')
        .factory('temp', temp);

    temp.inject = [''];
    function temp() {
        return {
            comments: {}
        };
    }
})();