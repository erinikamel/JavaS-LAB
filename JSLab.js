
while (true) {
var age= parseInt (prompt ("How old are you?"));
if  (age<=0) {alert("Invalid number");}
    else if (age>0 && age<=10) {alert("You are a Child");}
    else if (age>10 && age<=18) {alert("You are a Teenager");}
    else if (age>18 && age<=50) {alert("You are a Grown up");}
    else if (age>50){alert("Your are Old");}
    else {alert("Bye!"); break;}
}


var string= prompt ("Enter your sentence: ");
var result = countVowels(string)
alert(result)

function countVowels (str) {
    const count = str.match(/[aeiou]/gi).length;
    return count;
}


while (true) {
var timeEntry= parseInt(prompt ("Enter time:"));
if (timeEntry<0 || timeEntry>24) { 
    alert("Invalid");}
    else if (timeEntry>0 && timeEntry<=11) 
    {alert("It is " + timeEntry + " " + "AM");}
    else if (timeEntry==12) {alert("It is " + timeEntry + " " + "PM")}
    else if (timeEntry>12 && timeEntry<=23)
     {alert("It is " + (timeEntry-12) + " " + "PM")}
    else if (timeEntry===0 || timeEntry==24) {alert("It is 12 AM");}
    else {alert("Bye!"); break;}
}