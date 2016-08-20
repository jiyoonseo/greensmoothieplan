/**
 * Created by junes on 2/5/2016.
 */

var app = angular.module('app.myGListController', ['ngAnimate', 'ui.bootstrap']);

app
    .controller('myGListController', function($http, $location, $scope){
        //var url = "http://localhost:3000"; //server url
        var url= '';

        // organize data in this $scope
        $scope.groceryList = {}; // save grocery list in this object. index:[ingredientList] and eachIngredient's (1)amount and (2)unit
        $scope.tempTotalCal = 0;
        $scope.loginAlerts = [
            {
                type: '',
                msg: 'Please Login to Save your Grocery List'
            }

        ];  //
        $scope.retrievedDays = [];
        $scope.initialDays= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

        //test init
        function init(){
            var dayNum = $location.search().day;
            //console.log(JSON.stringify(dayNum));
            for(var i in dayNum){
                dayNum[i] = parseInt(dayNum[i]); // parse string to int


                $scope.retrievedDays.push(dayNum[i]);
                getEachDayData(dayNum[i]);
            }
            //console.log("retrieved DayNum=" + JSON.stringify(dayNum));
            console.log("retrievedDays=" + $scope.retrievedDays);

        }
        init();


        $scope.closeAlert = function(index){
            $scope.loginAlerts.splice(index, 1);
        };


        //set images for each ingredient
        $scope.getImageName = function(nonParsedStr){
            nonParsedStr = nonParsedStr.toString();
            var substrings = [ "pineapple", "apple" ,"banana", "blueberry", "Flaxseed", "kale", "mango", "berries", "pear", "grape", "spinach", "spring mix", "Stevia", "water"];
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



        // send data btw controller
        $scope.sendFinGList = function(){
            //gs30service.setCartList($scope.mData.addedCartListDays);

            var selectedDays = $scope.retrievedDays;
            var rtnVal = "" //string value concatenated from selectedDays

            for (var i in selectedDays){
                //selectedDays[i] += 1;
                rtnVal += "&day="
                rtnVal += selectedDays[i].toString();

            }

            $scope.s =  rtnVal;

            //$window.location.href = '/grocery-list?day=' + selectedDays;
            //$window.location.href = '/grocery-list';

        };

        $scope.transformChip = function(chip){
            if(isNaN(chip)){
                //console.log("transformChipNoTNum=" + chip);
                return chip;
            }else{
                //console.log("transformChipYESNum="  + chip);
                return;
            }
        };

        // 'getIndexOfExistVal' function will take 'array' and expected 'value' of array
        // and return 'index' number
        // if exist = return other than '-1'  (eg) 0, 1, 2, etc.
        // if not exist == return '-1'
        function getIndexOfExistVal(val, arr){
            return arr.indexOf(val); // return '-1' if not exist
        }

        // remove the chip from the list
        // if 'X' button has been clicked in the chip list
        $scope.removeCartList = function(rmChip){
            removeChip(rmChip);
        };
        function removeChip(rmChip){
            // 1. check if the chip is existing in the list
            var rmIndex = getIndexOfExistVal(rmChip, ($scope.retrievedDays));
            var exist = null;
            if(rmIndex < 0){ // not exist
                exist = false;
            }else{ // exist
                $scope.retrievedDays.splice(rmIndex, 1); // remove the chip safely from array
                exist = false; // not the chip does not exist in the list
            }

        }


        $scope.changeDaySelections = function(){
            $location.url('/'+$scope.s );

        }






    });
