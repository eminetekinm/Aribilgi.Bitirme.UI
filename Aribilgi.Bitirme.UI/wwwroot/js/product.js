
var app = angular.module('productEditController', []);

app.controller("ProductController", function ($scope, $http) {

    angular.element(document).ready(function () {
       
        $scope.GetSingleCategoryWithProductByCategoryId();
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
    
    $scope.GetSingleCategoryWithProductByCategoryId = function () {
        $http({
            method: "GET",
            headers: { "Contet-Type": "Application/json;charset=utf-8" },
            url: "https://localhost:7001/api/Categories/GetSingleCategoryWithProductByCategoryId/" + $scope.GetUrlParameter("id"),
        }).then(function (d) {
            $scope.GetSingleCategoryWithProductByCategoryId = d.data.data;
        }, function (d) {
            alert(d.data.errors.Title[0]);
        });
    }
});