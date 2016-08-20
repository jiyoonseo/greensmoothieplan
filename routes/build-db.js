/**
 * Created by junes on 1/2/2016.
 */

var daily_ingredients = [
//[0] day 1
{"Day01": ["5oz spinach", "5oz spring mix", "2 cups water", "1 apple",
    "1 Banana", "1 cup(4oz) Frozen Pineapples", "1 cup(4oz) Frozen Berries",
    "2 packets Stevia", "2 tablespoons Ground Flaxseeds"]},
//[1] day 2
{"Day02": ["5oz spinach", "5oz spring mix", "2 cups water", "1 apple",
    "1 banana", "1 cup(4oz) frozen mangos", "1 cup(4oz) frozen berries",
    "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]},
//[2] day 3
{"Day03": ["5oz spinach", "5oz kale", "2 cups water", "1 apple", "1 banana",
    "1 cup(4oz) frozen mangos", "1 cup(4oz) frozen pineapples",
    "2 packets Stevia", "2 tablespoons Ground Flaxseeds"]},
//[3] day 4
{"Day04": ["5oz spring mix", "5oz kale", "2 cups water", "1 apple", "1 banana",
    "1 cup(4oz) frozen pineapples", "1 cup(4oz) frozen berries",
    "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]},
//[4] day 5
{"Day05": ["5oz spinach", "5oz spring mix", "2 cups water", "1 apple", "1 banana",
    "1 cup(4oz) frozen pineapples", "1 cup(4oz) Frozen Berries",
    "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]},

///////////////

//[5] day 6
{"Day06": ["5oz spinach", "5oz kale", "2 cups water", "2 cups(8oz) frozen mangos",
    "1 cups(5oz) frozen blueberries", "1 cup(5oz) grapes", "1 pear",
    "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]},
//[6] day 7
{"Day07": ["5oz sprming mix", "5oz kale", "2 cups water", "1 apple", "1 baana",
    "1 cup(4oz) frozen mango",
    "2 cups(10oz) grapes", "2 packets Stevia", "2 tablespoons Ground Flaxseeds"]},
//[7] day 8
{"Day08": ["5oz spinach", "5oz Spring Mix", "2 cups water", "1 apple",
    "2 cups(8oz) frozen pineapples",
    "1 pear", "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]},
//[8] day 9
{"Day09": ["5oz spinach", "5oz kale", "2 cups water", "1 banana",
    "2 cups(8oz) frozen pineapples",
    "2 cups(10oz) frozen blueberries", "1 pear",
    "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]},
//[9] day 10
{"Day10": ["5oz Spring Mix", "5oz kale", "2 cups water", "1 apple",
    "1 cup(4oz) frozen mango", "1 cups(5oz) frozen blueberries",
    "1 cup(5oz) grapes", "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]},

{"Day11": ["10oz spinach", "2 cups water", "1 apple", "1 banana",
    "1 cup(4oz) frozen mango", "1 cup(5oz) grapes",
    "1 kiwifruit", "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]}, //day 11
{"Day12": ["10oz kale", "2 cups water", "1 apple", "1 banana", "1 cup(4oz) frozen mango",
    "1 kiwifruit", "2 packets Stevia", "2 tablespoons Ground Flaxseeds"]}, //day 12
{"Day13": ["5oz spinach", "5oz spring mix", "2 cups water", "1 banana",
    "1 cup(4oz) frozen mango",
    "1 pear", "1 kiwifruit", "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]}, //day 13
{"Day14": ["5oz spinach", "5oz kale", "2 cups water", "2 apples", "1 banana",
    "1 cup(5oz) grapes", "1 pear",
    "1 kiwifruit", "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]}, //day 14
{"Day15": ["10oz spring mix", "2 cups water", "1 banana", "1 cup(4oz) frozen mango",
    "1 pear", "1 kiwifruit", "3 packets Stevia",
    "2 tablespoons Ground Flaxseeds"]}, //day 15

{"Day16": ["5oz spring mix", "5oz kale", "2 cups water", "1 apple", "1 banana",
    "1 cup(4oz) pineapples", "1 cup(4oz) frozen strawberries", "3 packets Stevia",
    "2 tablespoons Ground Flaxseeds"]}, //day 16
{"Day17": ["5oz spinach", "5oz kale", "2 cups water", "1 apple",
    "1 banana", "1 cup(4oz) frozen mangos", "1 cup(4oz) frozen strawberries",
    "2 packets Stevia", "2 tablespoons Ground Flaxseeds"]}, //day 17
{"Day18": ["5oz spinach", "5oz spring mix", "2 cups water", "1 apple",
    "1 banana", "1 cup(4oz) pineapples", "1 cup(4oz) frozen strawberries",
    "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]}, //day 18
{"Day19": ["5oz spring mix", "5oz kale", "2 cups water", "1 apple",
    "1 banana", "1 cup(4oz) frozen mangos", "1 cup(4oz) frozen strawberries",
    "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]}, //day 19
{"Day20": ["5oz spinach", "5oz kale", "2 cups water", "1 apple",
    "1 banana", "1 cup(4oz) pineapples",
    "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]}, //day 20

{"Day21": ["10oz kale", "2 cups Water", "1 apple", "1 cup(4oz) frozen peaches",
    "1 cup(5oz) frozen buleberries", "3 packets Stevia",
    "2 tablespoons Ground Flaxseeds"]}, //day 21
{"Day22": ["5oz spinach", "5oz spring mix", "2 cups Water", "1 apple",
    "1 cup(4oz) frozen peaches",
    "1 kiwifruit", "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]}, //day 22
{"Day23": ["10oz Kale", "2 cups Water", "1 apple", "1 cup(4oz) frozen peaches",
    "1 cup(5oz) frozen buleberries",
    "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]}, //day 23
{"Day24": ["5oz spring mix", "5oz kale", "2 cups Water", "1 apple",
    "1 cup(5oz) frozen buleberries", "1 kiwifruit",
    "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]}, //day 24
{"Day25": ["5oz spinach", "2 cups Water", "1 apple", "1 cup(4oz) frozen peaches",
    "1 kiwifruit",
    "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]}, //day 25

{"Day26": ["5oz spinach", "5oz spring mix", "2 cups water", "1 apple",
    "2 cups(8oz) frozen mango",
    "1 orange", "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]}, //day 26
{"Day27": ["10oz Kale", "2 cups water", "1 banana", "1 orange", "1 kiwifruit",
    "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]}, //day 27
{"Day28": ["5oz spinach", "2 cups water", "1 apple", "1 cup(4oz) frozen mango", "1 orange",
    "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]}, //day 28
{"Day29": ["10oz Kale", "2 cups water", "1 apple", "1 orange", "1 kiwifruit",
    "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]}, //day 29
{"Day30": ["5oz spinach", "5oz spring mix", "2 cups water", "1 apple",
    "1 cup(4oz) frozen mango",
    "1 orange", "3 packets Stevia", "2 tablespoons Ground Flaxseeds"]} //day 30
];


//********************************************************************************8
// DATABASE Build daiily_ingredients
//daily ingredient mongoose
// LOCATION: mongoose.connect('mongodb://localhost/daily_ingredients');

var dailySchema = new mongoose.Schema({
    day: Number,
    dailyIngredients: [String]
});

var DG = mongoose.model('Daily_Ingredients', dailySchema);


var days = [
//[0] day 1
    ["5oz spinach", "5oz spring mix", "2 cups water", "1 apple",
        "1 Banana", "1 cup(4oz) Frozen Pineapples", "1 cup(4oz) Frozen Berries",
        "2 packets Stevia", "2 tablespoons Ground Flaxseeds"],
//[1] day 2
    ["5oz spinach", "5oz spring mix", "2 cups water", "1 apple",
        "1 banana", "1 cup(4oz) frozen mangos", "1 cup(4oz) frozen berries",
        "3 packets Stevia", "2 tablespoons Ground Flaxseeds"],
//[2] day 3
    ["5oz spinach", "5oz kale", "2 cups water", "1 apple", "1 banana",
        "1 cup(4oz) frozen mangos", "1 cup(4oz) frozen pineapples",
        "2 packets Stevia", "2 tablespoons Ground Flaxseeds"],
//[3] day 4
    ["5oz spring mix", "5oz kale", "2 cups water", "1 apple", "1 banana",
        "1 cup(4oz) frozen pineapples", "1 cup(4oz) frozen berries",
        "3 packets Stevia", "2 tablespoons Ground Flaxseeds"],
//[4] day 5
    ["5oz spinach", "5oz spring mix", "2 cups water", "1 apple", "1 banana",
        "1 cup(4oz) frozen pineapples", "1 cup(4oz) Frozen Berries",
        "3 packets Stevia", "2 tablespoons Ground Flaxseeds"],

///////////////

//[5] day 6
    ["5oz spinach", "5oz kale", "2 cups water", "2 cups(8oz) frozen mangos",
        "1 cups(5oz) frozen blueberries", "1 cup(5oz) grapes", "1 pear",
        "3 packets Stevia", "2 tablespoons Ground Flaxseeds"],
//[6] day 7
    ["5oz sprming mix", "5oz kale", "2 cups water", "1 apple", "1 baana",
        "1 cup(4oz) frozen mango",
        "2 cups(10oz) grapes", "2 packets Stevia", "2 tablespoons Ground Flaxseeds"],
//[7] day 8
    ["5oz spinach", "5oz Spring Mix", "2 cups water", "1 apple",
        "2 cups(8oz) frozen pineapples",
        "1 pear", "3 packets Stevia", "2 tablespoons Ground Flaxseeds"],
//[8] day 9
    ["5oz spinach", "5oz kale", "2 cups water", "1 banana",
        "2 cups(8oz) frozen pineapples",
        "2 cups(10oz) frozen blueberries", "1 pear",
        "3 packets Stevia", "2 tablespoons Ground Flaxseeds"],
//[9] day 10
    ["5oz Spring Mix", "5oz kale", "2 cups water", "1 apple",
        "1 cup(4oz) frozen mango", "1 cups(5oz) frozen blueberries",
        "1 cup(5oz) grapes", "3 packets Stevia", "2 tablespoons Ground Flaxseeds"],

    ["10oz spinach", "2 cups water", "1 apple", "1 banana",
        "1 cup(4oz) frozen mango", "1 cup(5oz) grapes",
        "1 kiwifruit", "3 packets Stevia", "2 tablespoons Ground Flaxseeds"], //day 11
    ["10oz kale", "2 cups water", "1 apple", "1 banana", "1 cup(4oz) frozen mango",
        "1 kiwifruit", "2 packets Stevia", "2 tablespoons Ground Flaxseeds"], //day 12
    ["5oz spinach", "5oz spring mix", "2 cups water", "1 banana",
        "1 cup(4oz) frozen mango",
        "1 pear", "1 kiwifruit", "3 packets Stevia", "2 tablespoons Ground Flaxseeds"], //day 13
    ["5oz spinach", "5oz kale", "2 cups water", "2 apples", "1 banana",
        "1 cup(5oz) grapes", "1 pear",
        "1 kiwifruit", "3 packets Stevia", "2 tablespoons Ground Flaxseeds"], //day 14
    ["10oz spring mix", "2 cups water", "1 banana", "1 cup(4oz) frozen mango",
        "1 pear", "1 kiwifruit", "3 packets Stevia",
        "2 tablespoons Ground Flaxseeds"], //day 15

    ["5oz spring mix", "5oz kale", "2 cups water", "1 apple", "1 banana",
        "1 cup(4oz) pineapples", "1 cup(4oz) frozen strawberries", "3 packets Stevia",
        "2 tablespoons Ground Flaxseeds"], //day 16
    ["5oz spinach", "5oz kale", "2 cups water", "1 apple",
        "1 banana", "1 cup(4oz) frozen mangos", "1 cup(4oz) frozen strawberries",
        "2 packets Stevia", "2 tablespoons Ground Flaxseeds"], //day 17
    ["5oz spinach", "5oz spring mix", "2 cups water", "1 apple",
        "1 banana", "1 cup(4oz) pineapples", "1 cup(4oz) frozen strawberries",
        "3 packets Stevia", "2 tablespoons Ground Flaxseeds"], //day 18
    ["5oz spring mix", "5oz kale", "2 cups water", "1 apple",
        "1 banana", "1 cup(4oz) frozen mangos", "1 cup(4oz) frozen strawberries",
        "3 packets Stevia", "2 tablespoons Ground Flaxseeds"], //day 19
    ["5oz spinach", "5oz kale", "2 cups water", "1 apple",
        "1 banana", "1 cup(4oz) pineapples",
        "3 packets Stevia", "2 tablespoons Ground Flaxseeds"], //day 20

    ["10oz kale", "2 cups Water", "1 apple", "1 cup(4oz) frozen peaches",
        "1 cup(5oz) frozen buleberries", "3 packets Stevia",
        "2 tablespoons Ground Flaxseeds"], //day 21
    ["5oz spinach", "5oz spring mix", "2 cups Water", "1 apple",
        "1 cup(4oz) frozen peaches",
        "1 kiwifruit", "3 packets Stevia", "2 tablespoons Ground Flaxseeds"], //day 22
    ["10oz Kale", "2 cups Water", "1 apple", "1 cup(4oz) frozen peaches",
        "1 cup(5oz) frozen buleberries",
        "3 packets Stevia", "2 tablespoons Ground Flaxseeds"], //day 23
    ["5oz spring mix", "5oz kale", "2 cups Water", "1 apple",
        "1 cup(5oz) frozen buleberries", "1 kiwifruit",
        "3 packets Stevia", "2 tablespoons Ground Flaxseeds"], //day 24
    ["5oz spinach", "2 cups Water", "1 apple", "1 cup(4oz) frozen peaches",
        "1 kiwifruit",
        "3 packets Stevia", "2 tablespoons Ground Flaxseeds"], //day 25

    ["5oz spinach", "5oz spring mix", "2 cups water", "1 apple",
        "2 cups(8oz) frozen mango",
        "1 orange", "3 packets Stevia", "2 tablespoons Ground Flaxseeds"], //day 26
    ["10oz Kale", "2 cups water", "1 banana", "1 orange", "1 kiwifruit",
        "3 packets Stevia", "2 tablespoons Ground Flaxseeds"], //day 27
    ["5oz spinach", "2 cups water", "1 apple", "1 cup(4oz) frozen mango", "1 orange",
        "3 packets Stevia", "2 tablespoons Ground Flaxseeds"], //day 28
    ["10oz Kale", "2 cups water", "1 apple", "1 orange", "1 kiwifruit",
        "3 packets Stevia", "2 tablespoons Ground Flaxseeds"], //day 29
    ["5oz spinach", "5oz spring mix", "2 cups water", "1 apple",
        "1 cup(4oz) frozen mango",
        "1 orange", "3 packets Stevia", "2 tablespoons Ground Flaxseeds"] //day 30
];

var eachGS = null;
for(var i = 1; i<31; i++){
    eachGS = new DG({
        day: i,
        dailyIngredients: days[i-1]
    })
    eachGS.save();
}




/// aNOTHER EXAMPLE

// Admin Daily Ingredients
var dailySchema = new mongoose.Schema({
    day: Number,
    dailyIngredients: [{
        ingredient: String,
        amount: Number,
        unit: String
    }]
});