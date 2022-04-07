import input from 'input' ;
const correct = "I like dogs"
const usersanswer = await input.text ('Do you like dogs?');
if (correct == usersanswer) {
    console.log("correct")
} else {
    console.log("I dont like dogs")
}