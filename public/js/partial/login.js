/**
 * Created by junes on 2/7/2016.
 */

var app =angular.module('app.login', []);
//var app = angular.module('app', []);
app.service('Login', function($http){
    var svc = this;
    svc.getUser = function(){
        return $http.get('/api/users')
            .then(function (response) {
                return response.data
            });
    }
    svc.login = function (username, password) {
        return $http.post('/api/sessions', {
            username: username, password: password
        }).then(function (val) {
            //receive data..
            svc.token = val.data;
            $http.defaults.headers.common['X-Auth'] = val.data;

            //console.log("X-Auth=" + JSON.stringify(val.data) ) ;
            //console.log("svc.getUser()=" + JSON.stringify(svc.getUser()) ) ;
            return svc.getUser();
        })
    }
});

app.controller('login', function($scope, $rootScope, $location, $cookies, Login) {
    $scope.test = "LOGIN PAGE HAHA";



    $scope.login = function (username, password) {
        Login.login(username, password)
            .then(function (res) {
                console.log("about to emit: " + JSON.stringify(res) );

                // TODO : Token Setting (Cookie/Session)
                $cookies.put('token', JSON.stringify(res));


                // $rootScope instead of emit
                //$rootScope.login = res.data;

                //$scope.$emit('login', res);
                $rootScope.$emit('login', res);
                $location.url('/');

            }, function(err){
                if(err.status == 401){
                    console.log("401(status) ERROR :(");
                }
                //console.log("err??" + JSON.stringify(err));
            })
    };



});