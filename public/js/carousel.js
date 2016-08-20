/**
 * Created by junes on 1/28/2016.
 */


    //var carousel = angular.module('carousel', ['ngMaterial', 'ngMdIcons']);
    //var app = angular.module('greenSmoothiePlan', ['ngMaterial', 'ngMdIcons']);
var app =angular.module('app.gsCarousel', []);
//var app = angular.module('app', []);
app.controller('gsCarousel', function($scope) {
    $scope.test = "hihihihitestestetaaaa";

    $scope.marketingPhrase = [{
        icon: 'local_restaurant',
        title: 'Healthy Meal Plans'
    },{
        icon: 'accessibility',
        title: 'Detox Body'
    },{
        icon: 'battery_charging_full',
        title: 'No more morning crankiness'
    },{
        icon: 'insert_emoticon',
        title: 'Digest Better than Ever!'
    },{
        icon: 'account_child',
        title: 'Be Happy with my Family'
    },{
        icon: 'local_florist',
        title: 'For Vegan or Not!'
    },{
        icon: 'favorite',
        title: 'You will love it!'
    }];


});