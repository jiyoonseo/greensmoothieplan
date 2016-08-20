/**
 * Created by junes on 2/22/2016.
 */
var app =angular.module('app.oneDayRecipe', []);
app.controller('oneDayRecipe', function($scope, $http, $location) {


    var url = '';
    $scope.ingredients = '';
    var tempDayNum = null;

    /// start functionalities *****************************************************************************************
    function loadDailyIngredient(dayNumber){

        //console.log("random number generated: " + dayNumber);

        $http.get(url+"/daily/"+dayNumber.toString()).then(function successCallback(daily){

            // Retrieve Initial Data from Service
            //console.log("GET raw data: " + JSON.stringify(daily));
            $scope.dailyData = daily.data[0]; // day, dailyIngredientsCount, dailyCalories
            $scope.ingredients = $scope.dailyData.dailyIngredients;
            //console.log("$scope.ingredients: " + JSON.stringify($scope.ingredients));


            //console.log("mData = " + JSON.stringify($scope.mData));

        }, function failedCallback(response){
            console.log("FAILED:: " + response);
        });
    }

    function init(){
        var randomDayNum = getRandomInt(1, 31);
        tempDayNum = randomDayNum;
        loadDailyIngredient(randomDayNum);
    }
    init();


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

        //console.log("getImageName has been called.");
        return ("../images/s/"+ helper +".jpg");


    }

    // min (included) and max (excluded)
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    $scope.getRandom = function(){
        var randomDayNum = getRandomInt(1, 31);

        // to prevent getting the same random number
        while(randomDayNum == tempDayNum){
            console.log("same rannum has been created; orig=" + tempDayNum+ ", new=" + randomDayNum);
            randomDayNum = getRandomInt(1, 31);
        }
        tempDayNum = randomDayNum;
        loadDailyIngredient(randomDayNum);

    }




});
