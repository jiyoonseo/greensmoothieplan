/**
 * Created by junes on 2/10/2016.
 */

var app =angular.module('app.register', ['app.login']);

app.service('CreateUser', function($http, $location, Login){
    var svc = this;
    svc.postUser = function(user){
        return $http.post('/api/users', {username: user.email, password: user.password, firstname: user.fname, lastname: user.lname})
            .then( function(res){
                console.log("user has been created: " + res);

                // TODO: LogIn automatically after Registration a user
                Login.login(user.email, user.password)
                    .then(function (res) {
                        console.log("Login Automatically after Register: " + JSON.stringify(res) );
                    });



                $location.path('/');
        }, function(response){
                console.log("not successful with the create"  + JSON.stringify(response) );
            });
    }
});

app.controller('register', function($scope, CreateUser){

    $scope.user = {
        fname: null,
        lname: null,
        email: null,
        password: null,
        password_confirm: null
    }


    $scope.test = "Register PAGE";

    $scope.register = function (user) { // ( username = email ) Email Address

        console.log("called register function");
        console.log('username=' + user.email);
        console.log('password=' + user.password);
        console.log('firstname=' + user.fname);
        console.log('lastname=' + user.lname);

        CreateUser.postUser(user)
            .then(function (username) {
                console.log("username = " + username)
            })
    }
});