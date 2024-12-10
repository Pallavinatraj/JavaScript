//Problem 2 : Given any character, if it is a vowel print "Vowel"
let character = 'e';
if((character=='a') && (character=='e') && (character=='i') && (character=='o') && (character=='u')){
    console.log('Vowel');
}


//Given 3 numbers (all different values), print which is greatest
let num1 = 21;
let num2 = 32;
let num3 = 42;
if((num1>num2)&&(num1>num3)){
    console.log(num1);
}
else if((num2>num3)&&(num2>num1)){
    console.log(num2);
}
else if((num3>num2)&&(num3>num1)){
    console.log(num3);
}


//Problem 5: Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...
let day="Sat";

switch(day){
  case "Sun":
    console.log("Sunday")
     break;
  case "Mon":
    console.log("Monday")
     break; 
  case "Tue":
    console.log("Tuesday")
     break;
  case "Wed":
    console.log("Wednesday")
     break;
  case "Thu":
    console.log("Thursday")
     break;
  case "Fri":
    console.log("Friday")
     break;
  case "Sat":
    console.log("Saturday")
     break;     
}

