/**
 * Created by junes on 2/3/2016.
 */

var app =angular.module('app.gs30controller', []);
app.controller('gs30controller', function($http, $scope, $location){

    var app = this;
    //var url = "http://localhost:3000";
    var url = "";

    // set All Data
    $scope.dailyData = null;
    $scope.dailyIngredients = null;

    app.sweet = "??hola";
    $scope.showCircular = true;


    //$scope.toggleList = [];
    //$scope.doneDay = false;
    //
    //var tempZero = 30;
    //var tempDays = [];
    //for(var i = 0 ; i<tempZero; i++){
    //    tempDays.push(i+1);
    //}
    //console.log("tempDays: " + tempDays);
    //$scope.tempDays = tempDays;

    // client data storage : starting with 'm'
    $scope.mData = {
        currentDayNumber: -1,           // day number. eg. Day 30 [range: [0 - 29] ]
        toggleCheckBoxList : [],        // store current list item selected // toggleCheckBoxList // need to reset when new currentDayNumber is selected
        currentDoneIn30period: [],      // store finished days (Done/Not Yet)
        customDates:[],                 // store dates for each 30 calendar days (eg.) 1-10-2016
                                        // : By default, it will be starting from today's date
        addedCartListDays: [],              // day numbers for shop list [0 - 29] from 'currentDayNumber'
        addedFavDays: [],               // day numbers for shop list [0 - 29] from 'currentDayNumber'
        rateWithStars: -1,              // BUTTON: Star
        initialDays: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        initialAllDays: 30
    };




    // send data btw controller
    $scope.sendFinGList = function(){
        //gs30service.setCartList($scope.mData.addedCartListDays);

        var selectedDays = $scope.mData.addedCartListDays;
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


    //$scope.cartFabButtonColor = "md-primary";
    var defaultSmBtnStyle = "md-fab md-primary md-mini";
    $scope.ngBtnStyle = {
        d1: defaultSmBtnStyle,
        d2: defaultSmBtnStyle,
        d3: defaultSmBtnStyle,
        d4: defaultSmBtnStyle
    };


    // new way of cartList solution (chips)





    // cart list & chips
    $scope.cartListClick = function(chip){
        console.log("chip = " + chip);
    };


    $scope.transformChip = function(chip){
        if(isNaN(chip)){
            console.log("transformChipNoTNum=" + chip);
            return chip;
        }else{
            console.log("transformChipYESNum="  + chip);
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
        var rmIndex = getIndexOfExistVal(rmChip, ($scope.mData.addedCartListDays+1));
        var exist = null;
        if(rmIndex < 0){ // not exist
            exist = false;
        }else{ // exist
            $scope.mData.addedCartListDays.splice(rmIndex, 1); // remove the chip safely from array
            exist = false; // not the chip does not exist in the list
        }

        // if user clicked 'x' button when they are on the 'currentDayNumber'
        // -> change the button
        if(rmChip === ($scope.mData.currentDayNumber+1)) {
            setAddToCartButton(exist); //set the fav button
        }
    }



    // $scope.clickAddToCartButton is a function
    // #1. add the currentDayNumber to $scope.mData.addedCartListDays[]
    $scope.clickAddToCartButton = function(){
        $scope.showShoppingListSummary = true; // show the summary list
        setShowGrocerySummaryBtn($scope.showShoppingListSummary);
        //console.log("clickToCartButton has been called...");

        // 1. check if addedCartDays[] has mData.currentDayNumber [1 - 30]
        // eg. day1 = '1' value -> find 'index' of: $scope.mData.addedCartListDays[index] == 1
        var addIndex = getIndexOfExistVal(($scope.mData.currentDayNumber+1), ($scope.mData.addedCartListDays) );
        var exist = null;
        // 2. if already exist : the dayNumber is already in the shopping list
        if(addIndex > -1 ){
            var rmIndex = addIndex;
            $scope.mData.addedCartListDays.splice(rmIndex, 1); // remove the chip safely from array
            exist = false; // after remove, it does not exist any more.. = set to 'false'

        }else{ // 3. the value is not exist -> add currentDayNumber [0-29] to shopping list
            $scope.mData.addedCartListDays.push($scope.mData.currentDayNumber + 1); // range [1-30]
            exist = true; // after push, now it is exist..
        }
        setAddToCartButton(exist); //set the fav button

        console.log("cartListDays?" + $scope.mData.addedCartListDays);
    };

    function setAddToCartButton(boolval){
        if(!boolval){ // not in the list
            $scope.addToCartButton = 'add_shopping_cart';
        }else{ // in the list
            $scope.addToCartButton = 'done';
        }
        $scope.ngBtnStyle.d1 = changeButtonColor(boolval);
    }

    // 'changeButtonColor' will change any fav kind buttons (small round buttons)
    function changeButtonColor(boolVal){
        if(boolVal){ //true
            return "md-fab md-warn md-mini";
        }else{ // false
            return "md-fab md-primary md-mini";
        }
    }

    function setShowGrocerySummaryBtn(boolVal){
        if(boolVal){
            $scope.showGroSummary = "visibility_off";
        }else{
            $scope.showGroSummary = "visibility";
        }
        $scope.ngBtnStyle.d2 = changeButtonColor(boolVal);
    }

    function showGrocerySummary(){
        $scope.showShoppingListSummary = !$scope.showShoppingListSummary;
        setShowGrocerySummaryBtn($scope.showShoppingListSummary);

    }
    $scope.clickShowCartSummaryBtn = function(){
        showGrocerySummary();
    };

    $scope.collapseGroceryList = function(){
        collapseGroList();
    };
    function collapseGroList(){
        $scope.showShoppingListSummary = false
        setShowGrocerySummaryBtn($scope.showShoppingListSummary);

    }


    /// start functionalities *****************************************************************************************
    function loadDailyIngredient(dayNumber){

        /** set Timeout for test purpose ( in javascript) */
        //$timeout(function, time);


        $http.get(url+"/daily/"+dayNumber.toString()).then(function successCallback(daily){

            // Retrieve Initial Data from Service
            //console.log("GET raw data: " + JSON.stringify(daily));
            $scope.dailyData = daily.data[0]; // day, dailyIngredientsCount, dailyCalories
            $scope.dailyIngredients = $scope.dailyData.dailyIngredients;
            //console.log("$scope.dailyIngredients: " + JSON.stringify($scope.dailyIngredients));

            // set collapseGroList() // visible / or Not : grocery List
            collapseGroList();
            // set buttons
            // 1. addToCart button (false ==(+)sign, true == (-)sign )
            var existIndex = getIndexOfExistVal(($scope.mData.currentDayNumber+1), $scope.mData.addedCartListDays);
            var exist = null;

            if(existIndex < 0){ // '-1' not exist
                exist = false;
            }else{ // exist
                exist = true;
            }
            //console.log("initial EXIST == " + exist);
            setAddToCartButton(exist);


            // Implement initial set-ups for first load on Empty Arrays
            if($scope.mData.currentDoneIn30period.length < 1){
                // #1 Initial Set-up: set $scope.mdata.currentDoneIn30period to Falses
                // mean: the user didn't finish any day of diet plan (day 1 - day 30)
                for(var i = 0 ; i < $scope.mData.initialAllDays ; i++){
                    $scope.mData.currentDoneIn30period.push(false);
                }
            }

            // set List Item Selected all False or True
            // depending on current day's Done ( = $scope.mData.currentDoneIn30period[$scope.mData.currentDayNumber] )
            $scope.mData.toggleCheckBoxList = new Array();
            for(var i = 0;  i<  $scope.dailyData.dailyIngredientsCount; i++){
                //$scope.toggleList.push(false); // delete later
                $scope.mData.toggleCheckBoxList.push($scope.mData.currentDoneIn30period[$scope.mData.currentDayNumber]);
            }


            // TO-DO: if the data is set & logged in, set the data into currentDoneIn30period


            // set current day when customer initially attempt to view recipes
            if($scope.mData.currentDayNumber < 0){ // if currentDayNumber is not set (= -1)
                $scope.mData.currentDayNumber = 1; // set the $scope.mData.currentDayNumber to 1 (= day 1)
            }

            // set initial $scope.mData.customDates (DateTime Array)
            // by default: day 1 starting from today ; eg. day 1 = today, day 2 = tomorrow, day 3 = the day after tomorrow
            var now = Date.now();

            var millisecondsPerDay = 86400000;
            for(var i = 0; i<$scope.mData.initialAllDays; i++){
                //$scope.mData.customDates.push(now);
                $scope.mData.customDates.push(new Date(now + (i * millisecondsPerDay) ))  ;
                // 24 hours = 86400000 milliseconds
                //console.log("mData.customDates[" + (i+1) + "] = " + $scope.mData.customDates[i].toString());
                //console.log("mData.customDates[" + (i+1) + "].getDate() = " + $scope.mData.customDates[i].getDate());

            }

            //console.log("mData = " + JSON.stringify($scope.mData));
            $scope.showCircular = false;
        }, function failedCallback(response){
            console.log("FAILED:: " + response);
        });

        // hide circular progress

    }



    /**
     * 'init' (Initialize the page with values...)
     * */
    //initialize the page with 'day 1' data
    if($scope.selectDay == null || isNaN($scope.selectDay)){
        //console.log("loaded tester: "); //$location.search()
        //console.log("url?=" + JSON.stringify($location.url()) ); // return /5
        var dayNumberTaker = $location.url().replace(/\D/g, '');

        //console.log("dayNumTaker: " + dayNumberTaker);
        dayNumberTaker = parseInt(dayNumberTaker);
        dayNumberTaker %= 30; // min 1 max 30 : more than 31 num, set remainder to btw 1-30


        //check if dayNumTaker is valid integer number
        // if not, set dayNumberTaker to 1

        if(dayNumberTaker == null || isNaN(dayNumberTaker) ){
            dayNumberTaker = 1;
        }else if(dayNumberTaker == 0){
            dayNumberTaker = 30;
        }

        //console.log("dayNumTaker?: " + dayNumberTaker);
        $scope.mData.currentDayNumber = dayNumberTaker-1;


        loadDailyIngredient(dayNumberTaker);


    }


    // REFRESH : all the data related to it
    // when user selects a day
    //      related data 1. currentDayNumber
    //      related data 2. custome date ui
    $scope.selectDay = function(selectedDay){
        //console.log("selectedDay: " + JSON.stringify($scope.selectedDay) );
        //console.log("selectedDay_2: " + JSON.stringify(selectedDay) );
        loadDailyIngredient(selectedDay);
        $scope.mData.currentDayNumber = selectedDay-1;


    };

    // toggleAll() function
    // toggle all checkbox togher either ALL TRUE/FALSE
    // depending on $scope.mData.currentDoneIn30period[$scope.mData.currentDayNumber]
    $scope.toggleAll = function(switched){

        $scope.mData.currentDoneIn30period[$scope.mData.currentDayNumber] = switched;

        for(var i = 0 ; i<$scope.mData.toggleCheckBoxList.length; i++){
            $scope.mData.toggleCheckBoxList[i] = switched;
        }
    }

    // $scope.mData.toggleCheckBoxList is a function to
    //     set $scope.mData.toggleCheckBoxList[index] to True/False
    // and set $scope.doneDay to True/False
    $scope.toggleListItem = function(index){

        $scope.mData.toggleCheckBoxList[index] = !$scope.mData.toggleCheckBoxList[index];

        //console.log('togglelistitem[index] = ' + $scope.toggleList[index]);
        //console.log("index= " + index);
        //console.log("mData.toggleCheckBoxList = " + $scope.toggleList);

        // set $scope.doneDay = true, if all checkboxes are checked
        var allChecked = null;
        for(var i = 0 ; i < $scope.dailyData.dailyIngredientsCount ; i++){
            allChecked = $scope.mData.toggleCheckBoxList[i];
            if(!$scope.mData.toggleCheckBoxList[i]){
                break;
            }
        }
        //$scope.doneDay = allChecked; //delete later
        $scope.mData.currentDoneIn30period[$scope.mData.currentDayNumber] = allChecked ;

        //console.log("doneday == " + $scope.doneDay);
    };


    $scope.getPrevDay = function(){

        $scope.mData.currentDayNumber -= 1;
        loadDailyIngredient($scope.mData.currentDayNumber);

        $scope.selectedDay = $scope.mData.currentDayNumber+1;
    };

    $scope.getNextDay = function(){
        $scope.mData.currentDayNumber += 1;
        loadDailyIngredient($scope.mData.currentDayNumber);

        $scope.selectedDay = $scope.mData.currentDayNumber+1;
    };

    $scope.prevBtnDisable = function(){
        if($scope.mData.currentDayNumber == 0){
            return true;
        }else{
            return false;
        }
    };

    $scope.nextBtnDisable = function(){
        if($scope.mData.currentDayNumber == 29){
            return true;
        }else{
            return false;
        }
    };

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


    };


    $scope.getMonthName = function(monthNumber){
        var rtnVal = "";
        switch(monthNumber){
            case 0:
                rtnVal = 'January';
                break;
            case 1:
                rtnVal = 'February';
                break;
            case 2:
                rtnVal = 'March';
                break;
            case 3:
                rtnVal = 'April';
                break;
            case 4:
                rtnVal = 'May';
                break;
            case 5:
                rtnVal = 'June';
                break;
            case 6:
                rtnVal = 'July';
                break;
            case 7:
                rtnVal = 'August';
                break;
            case 8:
                rtnVal = 'September';
                break;
            case 9:
                rtnVal = 'October';
                break;
            case 10:
                rtnVal = 'November';
                break;
            case 11:
                rtnVal = 'December';
        }
        return rtnVal;
    };

    $scope.getMonthNameThree = function(monthNumber){
        var rtnVal = $scope.getMonthName(monthNumber);
        rtnVal = rtnVal.toString();
        return rtnVal.substring(0, 3);
    }

    $scope.getDayName = function(dayNumber){
        var rtnVal = "";
        switch(dayNumber){
            case 0:
                rtnVal = 'Sunday';
                break;
            case 1:
                rtnVal = 'Monday';
                break;
            case 2:
                rtnVal = 'Tuesday';
                break;
            case 3:
                rtnVal = 'Wednesday';
                break;
            case 4:
                rtnVal = 'Thursday';
                break;
            case 5:
                rtnVal = 'Friday';
                break;
            case 6:
                rtnVal = 'Saturday';
        }
        return rtnVal;
    };





});
