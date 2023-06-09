var name = "John Doe"; // usually outdated but can be used if you want to
let newName = "Jane Doe"; // let allows you to change the value of the variable any time you want
const anotherNewName = "James Doe"; // opposite of let, it will not allow you to reassign the value of the variable

function Add(x, y) { // uses the add opperator (+) to calculate the sum of a number.
    return x + y;
}

function Subtract(x, y) { // uses the subtract opperator (-) to calculate the difference of a number.
    return x - y;
}

function Multiply(x, y) { // uses the multiply opperator (*) to calculate the product of a number.
    return x * y;
}

function Divide(x, y) { // uses the divide opperator (/) to calculate the quotient of a number.
    return x / y;
}

function Modulo(x, y) { // uses the modulus operator (%) to calculate the remainder of a number.
    return x % y;
}

function Pow(x, y) { // uses the exponent operator (**) to calculate the power of a number.
    return x ** y;
}

function Loop(n, k) { // uses the while loop to print the numbers from n to k.
    while (n < k) {
        n++;
        console.log(n);
    }
}

let a = 10;
let b = 10;

if (a > b) { // checls of a is greater than b using the greater than operator (>).
    console.log("a is greater than b");
}

else if (a < b) { // checls of a is less than b using the less than operator (<).
    console.log("a is less than b");
}

else { // if the previous conditonals are not true, then a and b are equal. You can check if two values are equal using the equal to opperator (==).
    console.log("a is equal to b");
}

