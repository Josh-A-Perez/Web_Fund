// 1. Create a function called pizzaOven that returns a JavaScript (Pizza) Object

function pizzaOven(crustType=[], sauceType=[], cheese=[], toppings=[]) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

// 2. Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]

var pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", "['pepperoni','sausage']");
console.log(pizza1);

// 3. Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]

var pizza2 = pizzaOven("hand tossed", "marinara", "['mozzarella', 'feta']", "['mushrooms', 'olives', 'onions']");
console.log(pizza2);

// 4. Create 2 more pizzas with any toppings we like!

var pizza3 = pizzaOven("cheessey crust", "marinara", "['mozzarella', 'ricotta']", "['tomatoe', 'pepperoni']");
console.log(pizza3);

var pizza4 = pizzaOven("brooklyn style", "pesto", "['mozzarella', 'feta']", "['olives', 'anchovies', 'tomatoe']");
console.log(pizza4);

// BONUS CHALLENGE. Create a function called randomPizza that uses Math.random() to create a random pizza!

let randomPizza = function() {
    let crusts = ["deep dish", "hand tossed", "cheese filled", "brooklyn style"];
    let sauces = ["traditional", "marinara", "white", "pesto"];
    let cheeses = ["mozzarella", "feta", "ricotta", "parmesian"];
    let toppings = ["peperoni", "sausage", "tomatoe", "mushrooms"];

    let randomToppings = [];
    let randomCheeses = [];

    for(let topping of toppings) {
        if(Math.round(Math.random())) randomToppings.push(topping);
    }

    for(let cheese of cheeses) {
        if(Math.round(Math.random())) randomCheeses.push(cheese);
    }

    let crust = crusts[Math.floor(Math.random()*crusts.length)];
    let sauce = sauces[Math.floor(Math.random()*sauces.length)]

    return pizzaOven(crust, sauce, randomCheeses, randomToppings);
}

console.log(randomPizza(), randomPizza());
