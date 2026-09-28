const prompt = require("prompt-sync")();



//EXERCISE 1
/*
function findmin(x, y, z) {
    let min = x;
    if (y < min) {
        min = y;
    }
    if (z < min) {
        min = z;
    }
    return min;
}

console.log(findmin(8, 4, 6));

//EXERCISE 2

function isEven(num) {
    if (num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    } else if (num < 0) {
        return isEven(-num);
    } else {
        return isEven(num - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

*/

//EXERCISE 3

function nthOfSeries(series, num) {
    if (series === "plus4") {
        let result = [2];
        let add = 4;
        
        for (let i = 0; i < num - 1; i++) {
            result.push(result[i] + add);
            add += 4;
        }
        
        return result;

    } else if (series === "multiply") {
        let result = [1];
        let multiplier = 1;

        for (let i = 0; i < num - 1; i++) {
            result.push(result[i] * multiplier);
            multiplier++;
    }

        return result; 

    }
}


console.log(nthOfSeries("plus4", 1));
console.log(nthOfSeries("plus4", 3)); 
console.log(nthOfSeries("multiply", 5));
/*

function nthOfSeries(series, num) {
    if (series === "plus4") {
        let result = 2;
        let add = 0;
        for (let i = 0; i < num; i++) {
            result  = result + add;
            add = add + 4;
        }
        return result;
    } else if (series === "multiply") {
        let result = 1;
        let multiplier = 1;
        for (let i = 1; i <= num; i++) {
            result = result * multiplier;
            multiplier++;
        }
        return result;
    } else if (series === "fibonacci") {
        if (num === 1) {
            return 1;
        } else if (num === 2) {
            return 1;
        } else if (num > 2) {
            return nthOfSeries(series, num - 1) + nthOfSeries(series, num - 2);
        }
    }
}


function hcf(x, y) {
    if (y === 0) {
        return x;
    } else {
        return hcf(y, x % y);
    }
}

function lcm(x, y) {
    return (x * y) / hcf(x, y);
}

console.log(hcf(15, 10));
console.log(lcm(36, 40));
console.log(nthOfSeries("fibonacci", 7));


//EXERCISE 4

function options() {
    console.log("Press 1 to add \nPress 2 to subtract \nPress 3 to multiply \nPress 4 to divide \nPress 5 to quit");
    let option = Number(prompt("Enter your option: "));
    if (option < 1 || option > 5) {
        console.log("Invalid option. Please try again.");
        return options();
    }
    return option;
}

function getNumbers() {
    let num1 = Number(prompt("Enter first number: "));
    let num2 = Number(prompt("Enter second number: "));
    return [num1, num2];
}

function calculate() {
    let option = options();
    let [num1, num2] = getNumbers();
    if (option === 1) {
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    } else if (option === 2) {
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    } else if (option === 3) {
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
    } else if (option === 4) {
        if (num2 === 0) {
            console.log("Cannot divide by zero. Please try again.");
            return calculate();
        }
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    } else if (option === 5) {
        console.log("Exiting the program.");
        return;
    }
}

console.log(calculate());

//EXERCISE 5

function multiplytable() {
    let x = Number(prompt("Enter a number: "));
    let a = Number(prompt("Enter a number: "));
    let b = Number(prompt("Enter a number: "));
    if (b > a) {
        for (let i = a; i <= b; i++) {
            console.log(`${x} * ${i} = ${x * i}`);
        }
    } else {
        console.log("Third number should be greater than second number");
        multiplytable();
    }
}

console.log(multiplytable());

//EXERCISE 6

function multiplytable4() {
    let x = Number(prompt("Enter a number: "));
    let y = Number(prompt("Enter a number: "));
    let a = Number(prompt("Enter a number: "));
    let b = Number(prompt("Enter a number: "));
    if (b > a) {
        if (y > x) {
            for (let i = a; i <= b; i++) {
                for (let j = x; j <= y; j++) {
                    console.log(`${j} * ${i} = ${j * i}`);
                }
                console.log("------------")
            }
        } else {
            console.log("Second number should be greater than first number");
            multiplytable4();
        }
    } else {
        console.log("Fourth number should be greater than third number");
        multiplytable4();
    }
}

console.log(multiplytable4());

*/