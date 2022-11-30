
var app = angular.module('homeEditController', []);

app.controller("HomeController", function ($scope, $http) {

    angular.element(document).ready(function () {
        $scope.GetCategories();
        $scope.GetProducts();
        $scope.GetProductsWithCategory();

    });
    $scope.GetUrlParameter = function (parmeterName) {
        const url = location.search;
        const urlParams = new URLSearchParams(url);
        const result = urlParams.get(parmeterName);
        if (result == null) {
            return "";
        }
        else {
            return result;
        }
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
    $scope.ProductDelete = function () {
        $http({
            method: "DELETE",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:7001/api/Products/Remove/" + $scope.GetUrlParameter("id"),
        }).then(function (d) {
            alert(d.data.message[0]);
            $scope.ProductDelete();
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }
});