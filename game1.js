let num=25;
alert("Lets play a number game!!")
let usernum= prompt("Guess a number :");
while(usernum !=num){
    usernum=prompt(usernum,"is a wrong number, Guess again");
    if(usernum==num){
        alert("Congratulations You had entered a correct number");
    }
}