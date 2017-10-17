var todoApp = angular.module('todoApp', ['ngRoute']);

todoApp.config(function ($routeProvider) {
    $routeProvider
        .when("/",
        {
            templateUrl: "list.html",
            controller: "mainController"
        })
        .when("/edit/:id?",
        {
            templateUrl: "edit.html",
            controller:"editController"
        });
});