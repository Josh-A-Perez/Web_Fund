//The Pizza Oven
//Create a function called pizzaOven. We should feel free 
//to customize what information we keep track of for our pizza,
//but let's make sure that we include the following: 
//crustType, sauceType, cheeses, and toppings.

//(1) Create a function called pizzaOven that 
//returns a JavaScript (Pizza) Object

//(2) Create a pizza with: 
//"deep dish", "traditional", ["mozzarella"],
//and ["pepperoni", "sausage"]

//(3) Create a pizza with: 
//"hand tossed", "marinara", ["mozzarella", "feta"],
//and ["mushrooms", "olives", "onions"]

//(4) Create 2 more pizzas with any toppings we like!

//***Bonus Challenge: Create a function called randomPizza 
//that uses Math.random() to create a random pizza!***//

var pizza = {
    "crust": "deep dish",
    "sauce": "traditional",
    "cheese": "mozzarella",
    "toppings": ["pepperoni", "sausage"],
    "pizzaOven": function() {
        console.log("crust type: " + this.crust)
        console.log("sauce type: " + this.sauce)
        console.log("cheese type: " + this.cheese)
        console.log("toppings type: " + this.toppings)
    }
}

pizza.pizzaOven()

//*******************************************//
var pizza2 = {
    "crust": "hand tossed",
    "sauce": "marinara",
    "cheese": ["mozzarella", "fetta"],
    "toppings": ["mushrooms", "olives", "onions"],
    "pizzaOven": function() {
        console.log("crust type: " + this.crust)
        console.log("sauce type: " + this.sauce)
        console.log("cheese type: " + this.cheese)
        console.log("toppings type: " + this.toppings)
    }
}

pizza2.pizzaOven()

//*******************************************//
var pizza3 = {
    "crust": "thin crispy",
    "sauce": "white sauce",
    "cheese": "mozzarella",
    "toppings": ["pepperoni", "tomato"],
    "pizzaOven": function() {
        console.log("crust type: " + this.crust)
        console.log("sauce type: " + this.sauce)
        console.log("cheese type: " + this.cheese)
        console.log("toppings type: " + this.toppings)
    }
}

pizza3.pizzaOven()

//*******************************************//
var pizza4 = {
    "crust": "thin crispy",
    "sauce": "pesto",
    "cheese": ["mozzarella", "feta"],
    "toppings": ["olives", "tomato"],
    "pizzaOven": function() {
        console.log("crust type: " + this.crust)
        console.log("sauce type: " + this.sauce)
        console.log("cheese type: " + this.cheese)
        console.log("toppings type: " + this.toppings)
    }
}

pizza4.pizzaOven()

//*******************************************//


//dont mind below i was playing around with the bonus had a 
//hard time solving.......//////

let crust = ["deep dish", "hand tossed", "thin crispy", "cheese filled"];
let sauce = ["traditional", "marinara", "white sauce", "pesto"];
let cheese = ["mozzarella", "feta", "ricotta", "vegan"];
let toppings = ["pepperoni", "sausage", "mushrooms", "olives"]

function pizzaOven(min,max){
    let step1 = max - min +1;
    let step2 = Math.random() * step1;
    let pizza = Math.floor(step2) + min;

        return pizza
}


let

    console.log("crust type: " + this.crust)
    console.log("sauce type: " + this.sauce)
    console.log("cheese type: " + this.cheese)
    console.log("toppings type: " + this.toppings)


}
        
    let PzzaOven = function() {
    }
}      

pizza.pizzaOven()













