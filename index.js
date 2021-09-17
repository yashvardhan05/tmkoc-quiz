//HEY! This is Yashvardhan and i am creating this Quiz on Tarak Mehta ka oolta chashma


var readlineSync = require('readline-sync');
const chalk = require("chalk");

var score = 0;

var questionOne = "Q1:What is the name of Jethalal's father?";
var answerOne = "champaklal"


var myAge = readlineSync.question(questionOne + " ");

console.log ("Ans: you Entered " + myAge);

if(myAge==answerOne){
  console.log("you're Right")
  score = score +1;
  console.log("Your Score is : " + score);
}else{
  console.log("you're wrong")
  score = score -1;
   console.log("Your Score is : " + score);
}


//___-----_________-------


var questionTwo = "Q2: Does Jethalal have crush on Babita?";
var answerTwo = "yes"

var myAge = readlineSync.question(questionTwo + " ");


console.log ("Ans: you Entered " + myAge);

if(myAge==answerTwo){
  console.log("you're Right")
  score = score +1;
  console.log("Your Score is : " + score);
}else{
  console.log("you're wrong")
  score = score -1;
   console.log("Your Score is : " + score);
}



//-----------------//

var questionThree = "Q3: What is the name of Jethala's Best Friend?";
var answerThree = "tarak"


var myAge = readlineSync.question(questionThree + " ");

console.log ("Ans: you Entered " + myAge);

if(myAge==answerThree){
  console.log("you're Right")
  score = score +1;
  console.log("Your Score is : " + score);
}else{
  console.log("you're wrong")
  score = score -1;
   console.log("Your Score is : " + score);
}

//---------------------//

var questionFour = "Q4: What is the name of Bhide's wife?";
var answerFour = "madhvi"


var myAge = readlineSync.question(questionFour + " ");

console.log ("Ans: you Entered " + myAge);

if(myAge==answerFour){
  console.log("you're Right")
  score = score +1;
  console.log("Your Score is : " + score);
}else{
  console.log("you're wrong")
  score = score -1;
   console.log("Your Score is : " + score);
}

//-----------------//
var questionFive = "What is the name of Tapu's college?";
var answerFive = "gandhi"

var myAge = readlineSync.question(questionFive + " ");


console.log ("You Entered " + answerFive);

if(myAge==answerFive){
  console.log("you're Right")
  score = score +1;
  console.log("Your Score is : " + score);
}else{
  console.log("you're wrong")
  score = score -1;
   console.log("Your Score is : " + score);
}

//use of Chalk
console.log(chalk.green("Yayyyy! You comepleted this quiz and your final score is: ")+ score);




