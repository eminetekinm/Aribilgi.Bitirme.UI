
var app = angular.module('homeEditController', []);

app.controller("HomeController", function ($scope, $http) {

    angular.element(document).ready(function () {
        $scope.GetCategories();
        $scope.GetProducts();
        $scope.GetProductsWithCategory();

    });

    $scope.GetCategories = function () {
        $http({
            method: "GET",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:7001/api/Categories/GetAll",

        }).then(function (d) {
            console.log(d);
            $scope.GetCategories = d.data.data;
        });
    }

    $scope.GetProducts = function () {
        $http({
            method: "GET",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:7001/api/Products/GetAll",

        }).then(function (d) {

            $scope.GetProduct = d.data.data;
        });
    }
    $scope.GetProductsWithCategory = function () {
        $http({
            method: "GET",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:7001/api/Products/GetProductsWithCategory",

        }).then(function (d) {

            $scope.GetProductsWithCategory = d.data.data;
        });
    }
});