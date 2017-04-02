
'use strict'
angular.module('app', ['ui.router', 'LocalStorageModule'])
    .config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('test_UI')
            .setStorageType('localStorage');
    });