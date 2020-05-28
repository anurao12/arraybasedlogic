
//find the missing integer from the sequence

var numArray = [0189459, 0189460, 0189468, 0189463, 0189465];
var mia = numArray.reduce(function(acc, cur, ind, arr) {
  var diff = cur - arr[ind-1];
  if (diff > 1) {
    var i = 1;
    while (i < diff) {
      acc.push(arr[ind-1]+i);
      i++;  
    }
  }
  return acc;
}, []);
console.log(mia); //[189462, 189464, 189465]

// if array count given 

var a = [5],
  count = 5,
  missing = [];

for (var i = 1; i <= count; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing) //[1, 2, 3, 4]



// finding duplicates

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {})
///// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }


//find min & max

// using min max spread operator
const numbers = [2, 4, 9, 2, 0, 16, 24];

const smallest_number = Math.min(...numbers);
const largest_number = Math.max(...numbers);

console.log('Smallest Value:', smallest_number); // Smallest Value: 0
console.log('Largest Value:', largest_number); 


//// using sort 

var numbers = [2, 4, 9, 2, 0, 16, 24];

var sorted = numbers.slice().sort(function(a, b) {
  return a - b;
});

var smallest = sorted[0],                      
    secondSmallest = sorted[1],                
    secondLargest = sorted[sorted.length - 2], 
    largest  = sorted[sorted.length - 1];

console.log('Smallest: ' + smallest);
console.log('Second Smallest: ' + secondSmallest);
console.log('Second Largest: ' + secondLargest);
console.log('Largest: ' + largest);

/// removing duplicates in array using reduce

let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue)
  }
  return accumulator
}, [])

console.log(myOrderedArray) // [a,b,c,d]

// compare 2 strings whcih are anagrams
input : "mary", to  o/p "army"


function compare (a, b) {
    var y = a.split("").sort().join(""),
        z = b.split("").sort().join("");
    console.log(z === y
        ? a + " and " + b + " are anagrams!"
        : a + " and " + b + " are not anagrams."
    );
}


// 2 method

function checkAnagrams(str1, str2){

    var newstr1 = str1.toLowerCase().split('').sort().join();
    var newstr2 = str2.toLowerCase().split('').sort().join();
  
    if(newstr1 == newstr2){
      console.log("String is Anagrams");
    }
    else{
      console.log("String is Not Anagrams");
    }
  
  }
  
  checkAnagrams("Hello", "lolHe");
  checkAnagrams("Indian", "nIndisn");

//How do you count a number of vowels and consonants in a given string

const countVowels = str => Array.from(str)
  .filter(letter => 'aeiou'.includes(letter)).length;

console.log(countVowels('abcdefghijklmnopqrstuvwxyz')); // 5
console.log(countVowels('test')); // 1
console.log(countVowels('ddd'));  //0




