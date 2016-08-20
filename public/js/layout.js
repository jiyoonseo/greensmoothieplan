
/**
 * Created by junes on 2/5/2016.
 */

var app = angular.module('app', ['ngMaterial', 'ngMdIcons','ngRoute', 'ngCookies'
    ,'app.gsNavCtrl'
    ,'app.gsCarousel'
    ,'app.gs30controller'
    ,'app.myGListController'
    ,'app.gListSummary'
    ,'app.oneDayRecipe'
    ,'app.login'
    ,'app.register'
    ,'app.404'
    ,'app.userAccount'
    ,'app.footer'])
    .config(['$routeProvider', '$locationProvider', '$controllerProvider', function($routeProvider, $locationProvider, $controllerProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: 'partial/carousel.ejs', //Express render (tied to)
                controller: 'gsCarousel'
            })
            .when('/green-smoothie-plan', {
                templateUrl: 'partial/green-smoothie-plan', //Express render (tied to)
                controller: 'gs30controller'
            })
            .when('/get-one-day-recipe', {
                templateUrl: 'partial/one-day-recipe',
                controller: 'oneDayRecipe'
            })
            .when('/grocery-list', {
                templateUrl: 'partial/grocery-list',
                controller: 'myGListController'
            })
            .when('/grocery-list-summary', {
                templateUrl: 'partial/grocery-list-summary',
                controller: 'gListSummary'
            })
            .when('/login', {
                templateUrl: 'partial/login',
                controller: 'login'
            })
            .when('/register', {
                templateUrl: 'partial/register',
                controller: 'register'
            })
            .when('/user-account', {
                templateUrl: 'partial/user-account',
                controller: 'userAccount'
            })
            .otherwise({
                templateUrl: 'partial/404',
                controller: '404'
            });
        $controllerProvider.allowGlobals();
    }]);



app.controller('appCtrl', function($scope, $rootScope, $mdSidenav, $location, $cookies){

    function seeCookies(){
        if($cookies.get('token')){
            console.log("cookies?" + JSON.parse($cookies.get('token')).username ) ;
        }else{
            console.log('token is not defined');
        }

    }
    seeCookies();

    $rootScope.$on('login', function (_, res) {
        console.log("current user type = " + typeof(res) );
        console.log("current user = " + JSON.stringify(res) );
        $scope.currentUser = res;
        seeCookies();
    });

    $scope.logout = function(){
        $scope.currentUser = null;
        $location.url('/');
        $mdSidenav('left').toggle();
    }



});


app.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('light-green', {
            'default': '700', // by default use shade 400 from the 'green' palette for primary intentions
            'hue-1': '900', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': '800', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': '300' // use shade A100 for the <code>md-hue-3</code> class
        })
        .accentPalette('blue-grey', {
            'default': '50', // use shade 200 for default, and keep all other shades the same
            'hue-1': 'A700', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': 'A400', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': '900' // use shade A100 for the <code>md-hue-3</code> class
        })
        .warnPalette('red', {
            'default': 'A400', // use shade 200 for default, and keep all other shades the same
            'hue-1': 'A100', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': 'A200', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': 'A700' // use shade A100 for the <code>md-hue-3</code> class
        });

    /*
    $mdThemingProvider.theme('palette')
        .primaryPalette('yellow');
    $mdThemingProvider.definePalette('palette', {
        '50': 'ffebee',
        '100': 'ffcdd2',
        '200': 'ef9a9a',
        '300': 'e57373',
        '400': 'ef5350',
        '500': 'f44336',
        '600': 'e53935',
        '700': 'd32f2f',
        '800': 'c62828',
        '900': 'b71c1c',
        'A100': 'ff8a80',
        'A200': 'ff5252',
        'A400': 'ff1744',
        'A700': 'd50000',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                            // on this palette should be dark or light
        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
            '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });

    */

});

