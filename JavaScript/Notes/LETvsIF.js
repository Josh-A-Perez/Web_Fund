// same result, different code....

//let//

for (let i = 1; i <= 100; i++) {
    let string = "";

    if (i % 3 == 0) string += "fizz"
    if (i % 5 == 0) string += "buzz"
    if (string == "") string = i;
    
    console.log(string);
    }

//else if//

for(var i=1; i < 101; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    else{console.log(i);
    }
}