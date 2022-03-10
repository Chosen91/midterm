// Please include the correct number of parameters in each function!
// Make sure every function returns something
// You can console.log() the functions with test input to test your functions in the space provided
// Read each question carefully
// Good luck!

/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
Note: This problem should account for negative number input
*/

function sumOfOdds(num1, num2) {
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        if (i % 2 > 0) {

            sum += i;
        }
    }
    return sum;
}

/* console.logs to test */
console.log("sumOfOdds");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(sumOfOdds(100, 20));
console.log(sumOfOdds(-1, -6));
console.log(sumOfOdds(10, 2000));
console.log(sumOfOdds(-50, -200));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");

/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For exmaple arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length
*/

function arraySubtract(array1, array2) {
    let result = [];
    let result2 = 0;
    for (let i = 0; i < array1.length; i++) {
        result2 = array1[i] - array2[i];
        result.push(result2);
        result2 = 0;
    }
    return result;
}
/* console.logs to test */
console.log("arraySubtract");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log(arraySubtract([35], [6]));
console.log(arraySubtract([6, 36, 1], [16, 13, 3]));
console.log(arraySubtract([63, 6, 12], [1, 3, 31]));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/

function surroundArray(first, second, third) {
    first.unshift(second);
    first.push(third);
    return first;
}

/* console.logs to test */
console.log("surroundArray");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(surroundArray(["eggs", "bacon", "cheese",700,7,70,17], "toast"));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/

function longestString(array)
{
    if(array.length == 0)
    {
         return '';
    }
    let longestarray = array[0];
    for(let i = 0; i < array.length; i++)
    {
        if(array[i].length > longestarray.length)
        {
            longestarray = array[i];
        }
    }
    return longestarray;
}
/* console.logs to test */
console.log("longestString");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(longestString(['bird','animal','elephant','freedom']));
console.log(longestString(['you','tree','santa','spree']));
console.log(longestString([]));
console.log(longestString(['i']));
console.log(longestString(['']));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)
*/

function sToR(){

}

/* console.logs to test */
console.log("sToR");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/

function divisibleBy4And7(num){
    if(num % 4 === 0 && num % 7 === 0){
        return true
    }else {
        return false
    }
}
let num = 28
console.log(divisibleBy4And7(num))
/* console.logs to test */



/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/

function exclamationAndQuestion(str) {
    if(str.includes("!") && str.includes("?")){
        return true;
    } else{
    return false
    }
} 
    
   

/* console.logs to test */
console.log("exclamationAndQuestion");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(exclamationAndQuestion("I love my life! do you love yours?"));
console.log(exclamationAndQuestion("I want to go to the beach!"));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
Your function should account for both cases (upper and lower) of each letter.
*/

function countAB(str) {
    const letters = (str + "").toUpperCase().split("");
    let count = [0, 0];
    for (let i in letters) {
        if (letters[i] == 'A') {
            count[0]++;
        } else if (letters[i] == 'B') {
            count[1]++;
        }
    }
    return count;
}
/* console.logs to test */
console.log("countAB");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(countAB("applebabblecabblesabble"));
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
Finally, return your modified array.
Example: addStringIfLastS(['test', 'testing', 'testings'], 'TEST') => ['test', 'testing', 'testingsTEST']
*/

function addStringIfLastS(){

}

/* console.logs to test */
console.log("addStringIfLastS");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called twoSmallest that takes in a single array of numbers as a parameter and returns the smallest two numbers in the following array format where the smallest number always comes before the 2nd smallest number (ie, the bigger number should come second): 
[smallestNumber, secondSmallestNumber]
If the array is shorter than length 2, return undefined to the user
You can assume that every number in the array will be unique
*/

function twoSmallest(){

}

/* console.logs to test */
console.log("twoSmallest");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like

console.log("\n////////////////////////////////////////////////////////////////////////////\n");