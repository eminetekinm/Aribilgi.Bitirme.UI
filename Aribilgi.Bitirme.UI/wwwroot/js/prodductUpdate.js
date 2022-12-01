var app = angular.module('ProductUpdateApp', []);

app.controller("ProductUpdateController", function ($scope, $http) {


    angular.element(document).ready(function () {
        $scope.GetProductsWithCategory();
    });


    $scope.GetUrlParameter = function (parmeterName) {
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        const result = urlParams.get(parmeterName);
        if (result == null) {
            return "";
        }
        else {
            return result;
        }
    }

    $scope.GetProductsWithCategory = function () {
        $http({
            method: "GET",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:7001/api/Products/GetById/" + $scope.GetUrlParameter("id"),

        }).then(function (d) {

            $scope.products = d.data.data;
        });
    }

    $scope.ProductUpdate = function () {
        $http({
            method: "PUT",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:7001/api/Products/Update",
            data: $scope.products
        }).then(function (d) {
            alert(d.data.message[0]);
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }

});