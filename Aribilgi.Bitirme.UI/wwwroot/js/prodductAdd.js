var app = angular.module('ProductAddApp', []);

app.controller("ProductAddController", function ($scope, $http) {


    angular.element(document).ready(function () {

        $scope.GetCategories();
    });

    $scope.ProductAdd = function () {
        $http({
            method: "POST",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:7001/api/Products/Add",
            data: $scope.product
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }
    $scope.GetCategories = function () {
        $http({
            method: "GET",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:7001/api/Categories/GetAll",

        }).then(function (d) {
            $scope.GetCategories = d.data.data;
        });
    }

});