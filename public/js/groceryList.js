/**
 * Created by junes on 1/17/2016.
 */
var rootApp = angular.module('rootApp', ['gsNav', 'gs30app']);

var gs30app = angular.module('gs30app', ['ngMaterial', 'ngMdIcons', 'ngRoute']);

gs30app
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true)

    }])
    .controller('myGListController', function($http, $location, $scope){
        var url = "http://localhost:3000"; //server url

        // organize data in this $scope
        $scope.groceryList = {}; // save grocery list in this object. index:[ingredientList] and eachIngredient's (1)amount and (2)unit
        $scope.tempTotalCal = 0;


        //test init
        function init(){
            var dayNum = $location.search().day;

            console.log(JSON.stringify(dayNum));
            for(var i in dayNum){
                dayNum[i] = parseInt(dayNum[i]); // parse string to int
                getEachDayData(dayNum[i]);
            }
            console.log(JSON.stringify(dayNum));

        };

        init();

        //set images for each ingredient
        $scope.getImageName = function(nonParsedStr){
            nonParsedStr = nonParsedStr.toString();
            substrings = [ "pineapple", "apple" ,"banana", "blueberry", "Flaxseed", "kale", "mango", "berries", "pear", "grape", "spinach", "spring mix", "Stevia", "water"];
            var helper = "r";

            for(var i in substrings){
                if(nonParsedStr.indexOf(substrings[i]) > -1) {
                    helper = substrings[i];
                    break;
                }
            }

            console.log("getImageName has been called.");
            return ("../images/s/"+ helper +".jpg");


        }

        // set values in $scope variables
        // no return val at this point : TODO...
        function getEachDayData(dayNumber){
            $http.get(url+"/daily/"+dayNumber.toString()).then(function successCallback(daily){
                dailyData = daily.data[0]; //rtn: [day], [dailyIngredientsCount], [dailyCalories]
                //console.log("dailyData = " + JSON.stringify(dailyData));
                $scope.tempTotalCal += dailyData.dailyCalories;
                //console.log("dailyCalories=" +dailyData.dailyCalories + ", tempTotalCal=" + $scope.tempTotalCal);
                var eachDay = dailyData.dailyIngredients;

                for(var i in eachDay){ //$scope.groceryList = {};
                    var ingredientNameStr = eachDay[i].ingredient.toString();
                    if($scope.groceryList[ingredientNameStr] == undefined ){ // if one ingredient is not exist in JSON obj, set the 'key'

                        // if 'key' is not available, set in index
                        if($scope.groceryList['index'] == undefined){
                            $scope.groceryList['index'] = [];
                        }
                        $scope.groceryList['index'].push(ingredientNameStr);
                        //console.log("test: " + ingredientNameStr);

                        //define first time as JSON object with ingredient name eg. 'spinach' => $scope.groceryList['spinach']
                        $scope.groceryList[ingredientNameStr] = {};

                        $scope.groceryList[ingredientNameStr]['amount'] = eachDay[i].amount;
                        //console.log("eachDay.amount=" + eachDay.amount);
                        $scope.groceryList[ingredientNameStr]['unit'] = eachDay[i].unit;
                    }else{ // the ingredient is already set. update amount value by using '+='
                        //console.log("already defined.....");
                        $scope.groceryList[ingredientNameStr]['amount'] += eachDay[i].amount;
                    }
                }
                //console.log("mid-way object return: " + JSON.stringify($scope.groceryList,null,"    "));
                //console.log($scope.groceryList['index']);
            });

        }




        function getEachDayIngredients(dayNumber){

        }




});
