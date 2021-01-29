let num1 = 2;
let num2 = 5;

function returnGreater(number1, number2){

    let result = "Liczby są równe";

    if (number1 > number2) {
        result = number1.toString();
    }
    else if (number1 < number2) {
        result = number2.toString();
    }

    return result;
}

console.log(returnGreater(num1, num2));