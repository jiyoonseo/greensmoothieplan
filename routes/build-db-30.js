/**
    Build Database of 30 Day Green Smoothie Ingredients
    This will be implemented 'once' in app.js (server) to build database
 */

// DATABASE Build daiily_ingredients
//daily ingredient mongoose
// LOCATION: mongoose.connect('mongodb://localhost/daily_ingredients');


var eachIngredientSchema = new mongoose.Schema({
    amount: Number,
    unit: String,
    ingredient: String,
    calories: Number
});

var eachDaySchema = new mongoose.Schema({
    day: Number,
    dailyIngredients: [eachIngredientSchema],
    dailyIngredientsCount: Number,
    dailyCalories: Number
});


var eachDay = mongoose.model('dailyIngredients', eachDaySchema);


var map = [
//[0] day 1
    [
        //[0][0]
        [5, 'oz', 'spinach', 33], //"5oz spinach",
        [5, 'oz', 'spring mix', 35], // "5oz spring mix",
        [2, 'cups', 'water', 0] , // "2 cups water",
        [1, null, 'apple', 95], // // "1 apple",
        [1, null, 'banana', 105], // "1 Banana",
        [4, 'oz', 'frozen pineapple', 57], // "1 cup(4oz) Frozen Pineapples",
        [4, 'oz', 'frozen berries', 58], // "1 cup(4oz) Frozen Berries",
        [2, 'packets', 'Stevia', 0], //"2 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"],
    ],
//[1] day 2
    [
        [5, 'oz', 'spinach', 33],// "5oz spinach",
        [5, 'oz', 'spring mix', 35],// "5oz spring mix",
        [2, 'cups', 'water', 0],// "2 cups water",
        [1, null, 'apple', 95],// "1 apple",
        [1, null, 'banana', 105],// "1 banana",
        [4, 'oz', 'frozen mango', 90],// "1 cup(4oz) frozen mangos",
        [4, 'oz', 'frozen berries', 58],// "1 cup(4oz) frozen berries",
        [3, 'packets', 'Stevia', 0],// "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72],// "2 tablespoons Ground Flaxseeds"
    ],
    //[2] day 3
    [
        [5, 'oz', 'spinach', 33], //"5oz spinach",
        [5, 'oz', 'kale', 70], // "5oz kale",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'apple', 95], // "1 apple",
        [1, null, 'banana', 105], // "1 banana",
        [4, 'oz', 'frozen mango', 90], // "1 cup(4oz) frozen mangos",
        [4, 'oz', 'frozen pineapple', 57], // "1 cup(4oz) frozen pineapples",
        [2, 'packets', 'Stevia', 0], // "2 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72] // "2 tablespoons Ground Flaxseeds"
    ],
//[3] day 4
    [
        [5, 'oz', 'spring mix', 35],// "5oz spring mix",
        [5, 'oz', 'kale', 70], // "5oz kale",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'apple', 95], // "1 apple",
        [1, null, 'banana', 105], // "1 banana",
        [4, 'oz', 'frozen pineapple', 57], // "1 cup(4oz) frozen pineapples",
        [4, 'oz', 'frozen berries', 58], // "1 cup(4oz) frozen berries",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72] // "2 tablespoons Ground Flaxseeds"

    ],
//[4] day 5
    [
        [5, 'oz', 'spinach', 33], // "5oz spinach",
        [5, 'oz', 'spring mix', 35], // "5oz spring mix",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'apple', 95], // "1 apple",
        [1, null, 'banana', 105], // "1 banana",
        [4, 'oz', 'frozen pineapple', 57], // "1 cup(4oz) frozen pineapples",
        [4, 'oz', 'frozen berries', 58], // "1 cup(4oz) Frozen Berries",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ],

///////////////

//[5] day 6
    [
        [5, 'oz', 'spinach', 33], // "5oz spinach",
        [5, 'oz', 'kale', 70], // "5oz kale",
        [2, 'cups', 'water', 0], // "2 cups water",
        [8, 'oz', 'frozen mango', 180], // "2 cups(8oz) frozen mangos",
        [5, 'oz', 'frozen blueberry', 72], // "1 cups(5oz) frozen blueberries",
        [5, 'oz', 'grape', 96], // "1 cup(5oz) grapes",
        [1, null, 'pear', 100], // "1 pear",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72] // "2 tablespoons Ground Flaxseeds"
    ],
//[6] day 7
    [
        [5, 'oz', 'spring mix', 35], // "5oz spring mix",
        [5, 'oz', 'kale', 70], // "5oz kale",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'apple', 95], // "1 apple",
        [1, null, 'banana', 105], // "1 banana",
        [4, 'oz', 'frozen mango', 90], // "1 cup(4oz) frozen mango",
        [10, 'oz', 'grape', 192], // "2 cups(10oz) grapes",
        [3, 'packets', 'Stevia', 0], // "2 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72] // "2 tablespoons Ground Flaxseeds"
    ],
//[7] day 8
    [
        [5, 'oz', 'spinach', 33], //"5oz spinach",
        [5, 'oz', 'spring mix', 35], //"5oz Spring Mix",
        [2, 'cups', 'water', 0], //"2 cups water",
        [1, null, 'apple', 95], //"1 apple",
        [8, 'oz', 'frozen pineapple', 114], //"2 cups(8oz) frozen pineapples",
        [1, null, 'pear', 100], //"1 pear",
        [3, 'packets', 'Stevia', 0], //"3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  //"2 tablespoons Ground Flaxseeds"
    ],
//[8] day 9
    [
        [5, 'oz', 'spinach', 33], // "5oz spinach",
        [5, 'oz', 'kale', 70], // "5oz kale",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'banana', 105], // "1 banana",
        [8, 'oz', 'frozen pineapple', 114], // "2 cups(8oz) frozen pineapples",
        [10, 'oz', 'frozen blueberry', 144], // "2 cups(10oz) frozen blueberries",
        [1, null, 'pear', 100], // "1 pear",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ],
//[9] day 10
    [
        [5, 'oz', 'spring mix', 35], // "5oz Spring Mix",
        [5, 'oz', 'kale', 70], // "5oz kale",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'apple', 95], // "1 apple",
        [4, 'oz', 'frozen mango', 90], // "1 cup(4oz) frozen mango",
        [5, 'oz', 'frozen blueberry', 72], // "1 cups(5oz) frozen blueberries",
        [5, 'oz', 'grape', 96], // "1 cup(5oz) grapes",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ],
        // **************************  check
    [
        [10, 'oz', 'spinach', 66], // "10oz spinach",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'apple', 95], // "1 apple",
        [1, null, 'banana', 105], // "1 banana",
        [4, 'oz', 'frozen mango', 90], // "1 cup(4oz) frozen mango",
        [5, 'oz', 'grape', 96], // "1 cup(5oz) grapes",
        [1, null, 'kiwi', 42], // "1 kiwifruit",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ], //day 11
    [
        [10, 'oz', 'kale', 140], // "10oz kale",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'apple', 95], // "1 apple",
        [1, null, 'banana', 105], // "1 banana",
        [4, 'oz', 'frozen mango', 90], // "1 cup(4oz) frozen mango",
        [1, null, 'kiwi', 42], // "1 kiwifruit",
        [2, 'packets', 'Stevia', 0], // "2 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ], //day 12
    [
        [5, 'oz', 'spinach', 33], // "5oz spinach",
        [5, 'oz', 'spring mix', 35], // "5oz spring mix",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'banana', 105], // "1 banana",
        [4, 'oz', 'frozen mango', 90], // "1 cup(4oz) frozen mango",
        [1, null, 'pear', 100], // "1 pear",
        [1, null, 'kiwi', 42], // "1 kiwifruit",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ], //day 13
    [
        [5, 'oz', 'spinach', 33], // "5oz spinach",
        [5, 'oz', 'kale', 70], // "5oz kale",
        [2, 'cups', 'water', 0], // "2 cups water",
        [2, null, 'apple', 190], // "2 apples",
        [1, null, 'banana', 105], // "1 banana",
        [5, 'oz', 'grape', 96], // "1 cup(5oz) grapes",
        [1, null, 'pear', 100], // "1 pear",
        [1, null, 'kiwi', 42], // "1 kiwifruit",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ], //day 14
    [
        [10, 'oz', 'spring mix', 70], // "10oz spring mix",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'banana', 105], // "1 banana",
        [4, 'oz', 'frozen mango', 90], // "1 cup(4oz) frozen mango",
        [1, null, 'pear', 100], // "1 pear",
        [1, null, 'kiwi', 42], // "1 kiwifruit",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ], //day 15

    [
        [5, 'oz', 'spring mix', 35], // "5oz spring mix",
        [5, 'oz', 'kale', 70], // "5oz kale",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'apple', 95], // "1 apple",
        [1, null, 'banana', 105], // "1 banana",
        [4, 'oz', 'frozen pineapple', 57], // "1 cup(4oz) pineapples",
        [4, 'oz', 'frozen strawberry', 47], // "1 cup(4oz) frozen strawberries",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ], //day 16
    [
        [5, 'oz', 'spinach', 33], // "5oz spinach",
        [5, 'oz', 'kale', 70], // "5oz kale",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'apple', 95], // "1 apple",
        [1, null, 'banana', 105], // "1 banana",
        [4, 'oz', 'frozen mango', 90], // "1 cup(4oz) frozen mangos",
        [4, 'oz', 'frozen strawberry', 47], // "1 cup(4oz) frozen strawberries",
        [2, 'packets', 'Stevia', 0], // "2 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ], //day 17
    [
        [5, 'oz', 'spinach', 33], // "5oz spinach",
        [5, 'oz', 'spring mix', 35], // "5oz spring mix",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'apple', 95], // "1 apple",
        [1, null, 'banana', 105], // "1 banana",
        [4, 'oz', 'frozen pineapple', 57], // "1 cup(4oz) pineapples",
        [4, 'oz', 'frozen strawberry', 47], // "1 cup(4oz) frozen strawberries",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ], //day 18
    [
        [5, 'oz', 'spring mix', 35], // "5oz spring mix",
        [5, 'oz', 'kale', 70], // "5oz kale",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'apple', 95], // "1 apple",
        [1, null, 'banana', 105], // "1 banana",
        [4, 'oz', 'frozen mango', 90], // "1 cup(4oz) frozen mangos",
        [4, 'oz', 'frozen strawberry', 47], // "1 cup(4oz) frozen strawberries",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ], //day 19
    [
        [5, 'oz', 'spinach', 33], // "5oz spinach",
        [5, 'oz', 'kale', 70], // "5oz kale",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'apple', 95], // "1 apple",
        [1, null, 'banana', 105], // "1 banana",
        [4, 'oz', 'frozen pineapple', 57], // "1 cup(4oz) pineapples",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ], //day 20

    [
        [10, 'oz', 'kale', 140], // "10oz kale",
        [2, 'cups', 'water', 0], // "2 cups Water",
        [1, null, 'apple', 95], // "1 apple",
        [4, 'oz', 'frozen peach', 45], // "1 cup(4oz) frozen peaches",
        [5, 'oz', 'frozen blueberry', 72], // "1 cup(5oz) frozen buleberries",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ], //day 21
    [
        [5, 'oz', 'spinach', 33], // "5oz spinach",
        [5, 'oz', 'spring mix', 35], // "5oz spring mix",
        [2, 'cups', 'water', 0], // "2 cups Water",
        [1, null, 'apple', 95], // "1 apple",
        [4, 'oz', 'frozen peach', 45], // "1 cup(4oz) frozen peaches",
        [1, null, 'kiwi', 42], // "1 kiwifruit",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ], //day 22
    [
        [10, 'oz', 'kale', 140], // "10oz Kale",
        [2, 'cups', 'water', 0], // "2 cups Water",
        [1, null, 'apple', 95], // "1 apple",
        [4, 'oz', 'frozen peach', 45], // "1 cup(4oz) frozen peaches",
        [5, 'oz', 'frozen blueberry', 72], // "1 cup(5oz) frozen buleberries",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72] // "2 tablespoons Ground Flaxseeds"
    ], //day 23
    [
        [5, 'oz', 'spring mix', 35], // "5oz spring mix",
        [5, 'oz', 'kale', 70], // "5oz kale",
        [2, 'cups', 'water', 0], // "2 cups Water",
        [1, null, 'apple', 95], // "1 apple",
        [5, 'oz', 'frozen blueberry', 72], // "1 cup(5oz) frozen buleberries",
        [1, null, 'kiwi', 42], // "1 kiwifruit",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ], //day 24
    [
        [5, 'oz', 'spinach', 33], // "5oz spinach",
        [2, 'cups', 'water', 0], // "2 cups Water",
        [1, null, 'apple', 95], // "1 apple",
        [4, 'oz', 'frozen peach', 45], // "1 cup(4oz) frozen peaches",
        [1, null, 'kiwi', 42], // "1 kiwifruit",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ], //day 25

    [
        [5, 'oz', 'spinach', 33], // "5oz spinach",
        [5, 'oz', 'spring mix', 35], // "5oz spring mix",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'apple', 95], // "1 apple",
        [4, 'oz', 'frozen mango', 90], // "2 cups(8oz) frozen mango",
        [1, null, 'orange', 45], // "1 orange",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ], //day 26
    [
        [10, 'oz', 'kale', 140], // "10oz Kale",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'banana', 105], // "1 banana",
        [1, null, 'orange', 45], // "1 orange",
        [1, null, 'kiwi', 42], // "1 kiwifruit",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ], //day 27
    [
        [5, 'oz', 'spinach', 33], // "5oz spinach",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'apple', 95], // "1 apple",
        [4, 'oz', 'frozen mango', 90], // "1 cup(4oz) frozen mango",
        [1, null, 'orange', 45], // "1 orange",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ], //day 28
    [
        [10, 'oz', 'kale', 140], // "10oz Kale",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'apple', 95], // "1 apple",
        [1, null, 'orange', 45], // "1 orange",
        [1, null, 'kiwi', 42], // "1 kiwifruit",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ], //day 29
    [
        [5, 'oz', 'spinach', 33], // "5oz spinach",
        [5, 'oz', 'spring mix', 35], // "5oz spring mix",
        [2, 'cups', 'water', 0], // "2 cups water",
        [1, null, 'apple', 95], // "1 apple",
        [4, 'oz', 'frozen mango', 90], // "1 cup(4oz) frozen mango",
        [1, null, 'orange', 45], // "1 orange",
        [3, 'packets', 'Stevia', 0], // "3 packets Stevia",
        [2, 'tablespoons', 'ground Flaxseed', 72]  // "2 tablespoons Ground Flaxseeds"
    ] //day 30
];


var eachGS = null;
for(var i = 0; i<map.length; i++){
    eachGS = new eachDay({
        day: i+1,
        dailyIngredients: [],
        dailyIngredientsCount: map[i].length,
        dailyCalories: 100
    })
    //console.log("hey" + (eachGS));
    var totalCalories = 0;
    for(var j = 0 ; j < map[i].length; j++){
        eachGS.dailyIngredients.push({
            amount: map[i][j][0],
            unit: map[i][j][1],
            ingredient: map[i][j][2],
            calories: map[i][j][3]
        });

        totalCalories += map[i][j][3];
    }

    eachGS.dailyCalories =totalCalories;



    eachGS.save();
}





////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////

/**
 * WHEN RUN THE CODE AFTER SAVE DATABASE
 */

var eachIngredientSchema = new mongoose.Schema({
    count: Number,
    unit: String,
    ingredient: String,
    calories: Number
});

var eachDaySchema = new mongoose.Schema({
    day: Number,
    dailyIngredients: [eachIngredientSchema],
    dailyIngredientsCount: Number,
    dailyCalories: Number
});
var eachDay = mongoose.model('dailyIngredients', eachDaySchema);


app.get('/daily', function(req, res){
    eachDay.find(function(err, daily){
        res.send(daily);
    });
});

