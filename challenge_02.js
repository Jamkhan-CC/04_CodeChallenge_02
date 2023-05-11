/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

/**** Switch Case ****/


const firstName = prompt("Bitte Namen eingeben");
const age = parseInt(prompt(" geben Sie Ihr Alter ein! ")); 

if(age <= 5) 
{
    console.log(firstName + " trinken Milch. ");
}

else if(age >= 6 , age <= 12 ) 
{
    console.log(firstName + " trinken Saft. ");
}

else if(age >=13 , age <= 17 )
{
    console.log(firstName + " trinken Cola. ");
}

else if(age >= 18 , age <=100 )
{
    console.log(firstName + " trinken Wein ");
}    
else if( age > 100 )
{
    console.log(firstName + " trinken Milch ");
}
