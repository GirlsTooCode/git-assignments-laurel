//*  question 1....loop//
//* making a loop from 0-7*//

for(let i=0;i <=7; i++){
    console.log(i);
}


//*  question 2 .... printing of "Fizzbuzz" *//

//* making a loop from 1-100 *//
for (var num=1; num<100; num++){

//* if the number is divisible by 3 or 5 *//
var checkforthree= num % 3;
var checkforfive= num % 5;

//* if is divisible by both 3 and 5 print "FizzBuzz"
if ((checkforthree==0)&& (checkforfive==0))
console.log("FizzBuzz");

//* if the number is divisible by 3 print "Fizz"
else if (checkforthree==0)
console.log("Fizz");

//* if the number is divisible by 5 print "Buzz"
else  if (checkforfive==0)
console.log("Buzz");

//*then just print num*//
else 
console.log(num);



//* question 3...creating a string representing 8>8 grid forming a chessboard*//
//* declaring of size and  an empty "board string"*//

var size =8;
var grid ="";
//outerloops for rows*//
for (var row = 1; row <=size; row++){


    //*inner columns for loop*//
    for (var column = 1; column <=size; column++){
if (column%2 !=0);{//check if column is even
    grid +=" ";
}         
 {// if col is odd
grid +="#";
}
    } 
    grid+="\n";//jump to next row
}
console.log(grid);


}



//* question 4*//
// functions//
function min (firstNum,secondeNum){
    if(firstNum<secondeNum)
    return firstNum;
    else
    return secondeNum;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10



//* question 5*//
function isEven (number){
if (number<0){
    return isEven(-number);
} else if (number==1){
    return false;
} else if (number==0){
    return true;
} else{
    return isEven(number-2);
}

}
console.log(isEven(50)); // true
console.log(isEven(75)); // falses
console.log(isEven(-1)); // false



//*question 6*//
var countBs = function(str) {
    return str.match(/B/g).length;
};

var countChar = function(str, character) {
    var matchExp = new RegExp(character, 'g');
    return str.match(matchExp).length;
};

//the old fashioned way
var countChar2 = function(str, character) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === character)
            count++;
    }
    return count;
};



//* question 6*//

var countBs = function(str) {
    return str.match().length;
};

var countChar = function(str, character) {
    var matchExp = new RegExp(character, '');
    return str.match(matchExp).length;
};

var countChar2 = function(str, character) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === character)
            count++;
    }
    return count;
};

console.log(countBs('BBC'));
// → 2
console.log(countChar('kakkerlak', 'k'));
// → 4




