//1

"use strict";
function max(x, y) {
    if (x > y) {
        console.log(x + " is larger.")

    } else {
        console.log(y + " is larger.")

    }
}
max(3, 7)

//2
function maxOfThree(x, y, z) {
    if (x > y && x > z)
        return x;
    else if (y > z && y > x)
        return y;
    else
        return z;
}
console.log(maxOfThree(11, 22, 33));

//3

function isVowel(b) {
    if (b == 'a' || b == 'e' || b == 'i' || b == 'o' || b == 'u')
        return true;

    else
        return false;


}
console.log(isVowel('e'));

//4
function sum(num) {
    let summ = 0;
    for (let x = 0; x < num.length; x++) {
        summ += num[x];

    }
    return summ;
}

console.log(sum([1, 2, 3, 4]));

function multiply(num) {
    let mul = 1;
    for (let x = 1; x < num.length; x++) {
        mul *= num[x];

    }
    return mul;
}

console.log(multiply([1, 2, 3, 4]));

//5
function reverse(s) {
    let rev = '';
    for (let index = s.length - 1; index >= 0; index--) {
        rev += s[index];
    }
    return rev;
}
console.log(reverse('winner'));

//6
function findLongestWord(a) {
    let result = 0;
    for (let index = 0; index < a.length; index++) {
        if (a[index].length > result)
            result = a[index].length;
    }
    return result;
}
console.log(findLongestWord(['Brukieee', 'Dani', 'Judy']))

//7

function filterLongWords(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i].length > b)
            result.push(a[i]);
    }
    return result;
}

console.log(filterLongWords(['Brukieeee Isaac', 'Daniel Tecle', 'Yodit Asmelash'], 14))

//8 
function computeSumOfSquares(a) {
    return a.reduce((x, y) => x + y * y, 0);
}

console.log(computeSumOfSquares([4, 2, 3]));

//9
function printOddNumbersOnly(a) {
    let result = []
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0)
            result = (a[i]);
    }
    return result
}
console.log(printOddNumbersOnly([1, 2, 3, 4, 5, 6, 7, 8]))

//10
function computeSumOfSquaresOfEvensOnly(a) {

    return a.filter(e => e % 2 == 0).map(e => e * e).reduce((x, y) => x + y, 0);
}
console.log(computeSumOfSquaresOfEvensOnly[1, 2, 3, 4, 5])