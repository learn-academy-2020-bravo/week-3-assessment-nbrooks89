// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//first i want a function that takes in an argument of a  2 numbers

//create a statement that only allows the numbers to go to be ten indexes
//
// var i;
//  var fib = [0,1]; // Initialize array!
//
//
// for (i = 2; i <= 10; i++) {
// //   // Next fibonacci number = previous + one before previous
// //   // Translated to JavaScript:
//    fib[i] = fib[i - 2] + fib[i - 1];
//   console.log(fib[i]);
// }


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
//first i want to declare a function that takes in an array ass an argument

   const sortNumbers = (array) => {
      array.filter(value =>{
       typeof value === "number"

     })



  }

console.log(sortNumbers(fullArr1))

//i want to use .filter to filter out data and return the data to a new array
//use the typeof method to get only the numbers
//use an if/else statement to get only the odd numbers
//use the . sort method to sort the numbers from least to greatest
var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]






//-3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.




var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

 const getMiddle = (string) => {

    var middle = Math.floor(string.length/2);
    if (string.length % 2 == 0){
        return string[middle-1] + string[middle];
    }else{
        return string[middle];}
}
      console.log(getMiddle(middleLetters1))



// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)




// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []
