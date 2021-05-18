for(var i=0; i<10; i++){
    console.log(i);
    i= i+3;
}

console.log("outside of the loop" +i);

//////////////////////////////////////////////

var arrayOfNumbers = [1, 3, 5]
var sum = arrayOfNumbers[i]

for(var i=0; i<arrayOfNumbers.length; i++){
    sum += arrayOfNumbers[i];
    console.log("the current sum is:" + sum);
}

console.log("the total is:" + sum);