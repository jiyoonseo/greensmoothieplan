/**
 * Created by junes on 12/26/2015.
 */
var rootApp = angular.module('rootApp', ['gsList','gsNav','carousel']);



var gsHome = angular.module("gsList", ['ngMaterial', 'ngMessages']);


gsHome.controller('gsListCtrl', function($http, $scope){
    var app = this;
    var url = "http://localhost:3000";

    $scope.product = {
      name: app.newProduct
    };

    app.saveProduct = function(newProduct){
        console.log("new product: " + newProduct);
        $http.post(url+"/add", {name: newProduct}).success( function(res){
            console.log("success to post");
            loadProducts();
        }).error( function(res){
            console.log("saveProduct: " + res);
        });
        //loadProducts();
    };

    function loadProducts() {
        $http.get(url+"/product/name").then(function successCallback(products){
            app.products = products.data;
            console.log("GOOD CONNECTION.." + JSON.stringify(products));
        }, function failedCallback(response){
            console.log("FAILED:: " + response);
        });
        /*.success(function (products) {
            app.products = products;
        });
        */
    }
    loadProducts();


});

