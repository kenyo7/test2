/*alert("Hello Kevin");
document.write("<h1>Welcome to JavaScript</h1>");
alert("Thanks for visiting");
var visitorName = prompt("what is your name?");
document.write(visitorName);
alert(visitorName);

var visitor = prompt("what is your name?");
var message = "hello " + visitor;
message += " we are glad to see you";
document.write(message);

var questions = 3
var remain = " " + questions + " questions left.";
var word1 = prompt('What is your name?' + remain);
questions -= 1;
remain = " " + questions + " questions left.";
var word2 = prompt('where are you from?' + remain);
questions -= 1;
remain = " " + questions + " questions left.";
var word3 = prompt('Hello ' + word1 + remain);
alert("Let us read your story!!");
document.write("<h1>There was a time when " + word1 + " initiated an adventure from " + word2 + " he said to the people: " + word3);*/

/*var word1 = prompt("How are you?");
var word2 = prompt("where are you from?");
var combine = (word1.toUpperCase() + " " + word2.toUpperCase());
var total = combine.length;
document.write(combine); 
alert("The string " + combine + " is " + total + " characters long.")

var secondsPerMin = 60;
var minPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weekPerYear = 52;
var secondsPerDay = secondsPerMin * minPerHour * hoursPerDay;
alert("How many seconds are in a day?");
document.write("There are " + secondsPerDay + " seconds in a day.");*/

/*var random1 = prompt('Insert a number from 1 to 5');
var number = parseInt(random1);
var ram = Math.floor(Math.random() * random1) + 1; 
document.write(ram);*/


/*alert("hello");
var word = prompt("Nice to see you");
if(word === 'thanks'){
	document.write('thank you too');
}

var a = 10;
var b = 20;
var c = 30;
if (a > b) {
alert('a is greater than b');
} else {
alert('a is not greater than b');
}*/  

/* //Game generates a ramdom number between 1 and 6 and the player needs to guess it, payer will have 2 attemps.

//Assume player did not guess correctly.
var correctGuess = false;

//Generate the random number between 1 and 6.
var randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);
var guess = prompt('Adivina un numero entre 1 y 6.');

/*Test to see of player is:
1 - Correct.
2 - Guessed too high.
3 - Guessed too low

if(parseInt(guess) === randomNumber ){
	correctGuess = true;
	
} else if (parseInt(guess) < randomNumber ){
	var guessMore = prompt (' Intenta de nuevo, el numero es mayor a ' + guess);
	}	if (parseInt(guessMore) === randomNumber){
		correctGuess = true;

} else if (parseInt(guess) > randomNumber ){
	var guessLow = prompt ('Intenta de nuevo, el numero es menor a ' + guess);
	}	if (parseInt(guessLow) === randomNumber){
		correctGuess = true 
}
//Provide response to player if right or wrong.
if (correctGuess){
	document.write('<h2>Correcto adivinaste!</h2>');
} else {
	document.write('<h2> Lo siento fallaste, el numero era: ' + randomNumber + '</h2>');
}*/

/*MATH EXERCICE  

alert("Let's do some math!");

var number = parseFloat(prompt("Insert a number"));
var number2 = parseFloat(prompt("Insert a number"));

if (isNaN(number)) {
	//alert("You did not insert a number in the 1st field, please reload");
	number = parseFloat(prompt("You did not insert a number in the 1st field, please insert a number"));
} else if (isNaN(number2)) {
	number2 = parseFloat(prompt("You did not insert a number in the 2nd fiel, please " + "Insert a number"));
} else if (number2 === 0 ){
	number2 = parseFloat(prompt("The second number is 0. You can't divide by zero. Reload and try again.")); 
} 

if (isNaN(number) || isNaN(number2)){
	alert("Invalid imputs");
} else {
	var message = "<h1>Math  with the numbers "  + number + " and " + number2 + "</h1>"

	message += number + " + " + number2 + " = " + (number + number2); 
	message += "<br>"
	message += number + " - " + number2 + " = " + (number - number2);
	message += "<br>"
	message += number + " * " + number2 + " = " + (number * number2);
	message += "<br>"
	message += number + " / " + number2 + " = " + (number / number2);

	document.write(message);
}*/




/*QUIZ APPLICATION.

var score = 0
var question1 = prompt('How Many continents are there?');
var question1Answer = 5 

var question2 = prompt('What is that name of this programing language?');
var question2Answer = 'JS'

var question3 = prompt('What is that name of England capital?');
var question3Answer = 'london'

var question4 = prompt('what year was the last world cup celebrated?');
var question4Answer = 2018

var question5 = prompt('who was the champion?');
var question5Answer = 'france'

if (parseInt(question1) === question1Answer){
	score += 1
}
if (question2.toUpperCase() === question2Answer){
	score += 1 
}	
if (question3.toLowerCase() === question3Answer){
	score += 1
}
if (parseInt(question4) === question4Answer){
	score += 1
}
if (question5.toLowerCase() === question5Answer){
	score += 1
		
}	
if (score){
	document.write('you got ' + score + ' right answers. ');
}

if (score === 5){
	document.write('Congratulations you won a gold crown!');
} else if (score === 4 || score === 3){
	document.write('Congratulations you won a silver crown!');
	
} else if (score === 2 || score === 1){
	document.write('Congratulations you won a bronze crown!');
	
} else {
	document.write('Sorry your score was 0, try again');
}*/


/* TEACHER'S CODE FOR Quiz

// quiz begins, no answers correct
var correct = 0;

// ask questions
var answer1 = prompt("Name a programming language that's also a gem");
if ( answer1.toUpperCase() === 'RUBY' ) {
 correct += 1; 
}
var answer2 = prompt("Name a programming language that's also a snake");
if ( answer2.toUpperCase() === 'PYTHON' ) {
 correct += 1; 
}
var answer3 = prompt("What language do you use to style web pages?");
if ( answer3.toUpperCase() === 'CSS' ) {
 correct += 1; 
}
var answer4 = prompt("What language do you use to build the structure of web pages?");
if ( answer4.toUpperCase() === 'HTML' ) {
 correct += 1; 
}
var answer5 = prompt("What language do you use to add interactivity to a web page?");
if ( answer5.toUpperCase() === 'JAVASCRIPT' ) {
 correct += 1; 
}

// output results
document.write("<p>You got " + correct + " out of 5 questions correct.<p>");

// output rank
if ( correct === 5 ) {
  document.write("<p><strong>You earned a gold crown!</strong></p>");  
} else if (correct >= 3) {
  document.write("<p><strong>You earned a silver crown.</strong></p>");  
} else if (correct >= 2) {
  document.write("<p><strong>You earned a bronze crown.</strong></p>");  
} else {
  document.write("<p><strong>No crown for you. You need to study.</strong></p>");
}*/ 

//FUNCTIONS  

/*function sayHi(){
	/*var hi = "Hello this is my first function";
	alert(hi);
	alert(hi + " hello again")
	return "This is the first function"
}
//sayHi()
alert(sayHi())
document.write(sayHi()+ " and it is great");

function max (firstNum, secondNum){
      if (firstNum > secondNum) {
      return firstNum
      } else {
      return secondNum  
      }
}

alert(max(8,9));

 
function randomNum(low, up){ 

	if ( isNaN(low) || isNaN(up) ) {
	
		throw new Error('One or both values inserted are not numbers');
		
	} 
	var number = Math.floor(Math.random() * (up - low + 1)) + low; 
	return number;
	
}
console.log(randomNum('a',7));

function rectangleArea (width, height) {
  var area = width * height;
  return area;

}
//document.write(rectangleArea(12,2));

function volumeRectangle(width, height, length){
return width * height * length;
  
}
//document.write(rectangleArea(3,3,1))

function circleArea (radius){
   return Math.PI * radius;
   
}
//document.write(circleArea(15));

function sphereVolume (radius){
return (4/3 *  Math.PI * radius);  
  
}
//document.write(sphereVolume(8));

console.log(rectangleArea(5,22));
console.log(volumeRectangle(4.5, 12.5, 17.4));
console.log(circleArea(Math.pow(7.2,2)));
console.log(sphereVolume(Math.pow(7.2,3)));
*/

//LOOPS (WHILE)
/*function randomNumber (upper){
	return Math.floor(Math.random() * upper) + 1; 
}
var counter = 0;
while (counter < 10){
	var randomNu = randomNumber(10)	
	console.log(counter)
			document.write(randomNu + ' ');
			counter += 1;
}
*/


/*Create random number up to 10000 and how many attems were taken.
var upper =10000;
var randomN = getRandomN(upper);
var guess;
var attemps = 0;

function getRandomN(upper){
	return Math.floor(Math.random() * upper) + 1;
}
while (guess !== randomN){
	guess = getRandomN(upper);
	attemps += 1;
}
 
document.write('random number was ' + randomN + ' in ' + attemps + ' attemps.')


var secret = prompt("What is the secret password?");

 while (secret !== "sesame") {
  secret = prompt("That's not it! Try again");
}

document.write("You know the secret password. Welcome.");


// LOOPS (DO WHILE)

var x = 1;
do {
  console.log('#' + x);
  x += 2; 
} while ( x <= 15 )


var secret ;
do {
	
  secret = prompt("What is the secret password?");    
  
} while ( secret !== "sesame" )
	
document.write("You know the secret password. Welcome.");
*/

//LOOP (FOR)

/*var html = '';

for ( var i = 1; i <= 10; i +=1) {
	html += '<div>' + i + '</div>'; 
} 
document.write(html);
 
//------------------------------------- 
 for ( var i = 4; (i <= 156); i +=1) {
		console.log(i);
 }*/
 
 /*for (i = 2; i < 26; i += 2) {
	 console.log(i);
 }  

 
let i = 5;
let text;


while (i <= 50) {
 text =  i + ' ';
 i += 5
  
 document.write(text);
 
}
*/
let i = 5;
let text;
do {text =  i + ' ';
 i += 5
  
 document.write(text);
}
while (i <= 50) 
 


 
 
 
 
 
 
 
 
 
 
 
 
 