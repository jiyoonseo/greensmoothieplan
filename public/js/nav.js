/**
 * Created by junes on 12/30/2015.
 */

//var gsNav = angular.module('gsNav', ['ngMaterial', 'ngMdIcons']);
//var greenSmoothiePlanApp = angular.module('greenSmoothiePlan', ['ngMaterial', 'ngMdIcons']);
var app =angular.module('app.gsNavCtrl', []);
app.controller('gsNavCtrl', function($scope, $mdSidenav, $location, $timeout, $route, $cookies, $mdMenu){

    // nav setting
    $scope.isOpen = false;
    $scope.demo = {
        isOpen: false,
        count: 0,
        selectedDirection: 'right'
    };
    $scope.navShow = false;


    $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();

        // check if url is correct
        //console.log("location: " + JSON.stringify($location));
    };

    $scope.logout = function(){
        $cookies.remove('token');
        $route.reload();

    };

    $scope.links = [{
        href: '/green-smoothie-plan',
        name: '30 Green Smoothie',
        icon: 'local_drink'
    },{
        href: '/grocery-list',
        name: 'Grocery List',
        icon: 'local_grocery_store'
    },{
        href: '/get-one-day-recipe',
        name: 'Get One day Recipe',
        icon: 'repeat_one'
    },{
        href: '/post-recipe',
        name: 'Post My Recipe',
        icon: 'share'
    }];

    /* BACKUP MENU FOR LATER* **************************************
     subMenu: true,
     name: 'Green Smoothie Recipes',
     sub: // sub menus -> in Array
     [{
     href: '/green-smoothie-plan',
     name: '30 Green Smoothie',
     icon: 'local_drink'
     },{
     href: '/get-one-day-recipe',
     name: 'Get One day Recipe',
     icon: 'repeat_one'
     },{
     href: '/post-recipe',
     name: 'Post My Recipe',
     icon: 'share'
     }]
     },{
     subMenu: false,
     href: '/grocery-list',
     name: 'Grocery List',
     icon: 'local_grocery_store'
     */


    $scope.navBarButton = function(link){
        // redirect to some other page
        $location.url(link);
    };

    $scope.navButton = function(link){

        // redirect to some other page
        $location.url(link);
        $timeout(function(){
            $mdSidenav('left').toggle();
        }, 5);
    };

    $scope.openUserMenu = function($mdOpenMenu, ev){
        //window.alert("user menu was clicked");

        $mdOpenMenu(ev);
        $mdMenu.hide()


    };

    $scope.userAccount = function(){
        $location.url('/user-account');
    };


    function setCookies(){
        if($cookies.get('token')){

            $scope.currentUser = JSON.parse($cookies.get('token'));

            console.log("cookies?Nav" + $scope.currentUser.username)  ;
            console.log("cookies?NavF" + $scope.currentUser.firstname ) ;
            console.log("cookies?NavL" + $scope.currentUser.lastname ) ;


        }else{
            console.log('token is not defined');
        }
    }
    setCookies();

    //$scope.logout = function(){
    //    $scope.currentUser = null;
    //    $location.url('/');
    //    $mdSidenav('left').toggle();
    //}

    /*
     ,{
     href: '/grocery-list-summary',
     name: 'Grocery List (s)',
     icon: 'local_grocery_store'
     },
     */


});
