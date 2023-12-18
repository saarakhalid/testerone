// Sollution
const readline = require('readline');

const rl = readline.creatteinterface ({
    input: Proces.stdin,
    output:process.stdout
});


function studentgrade(marks)
{
    if (marks > 100 || marks < 0){
        console.log("The Marks should be between 0 and 100")
    }
    else{
        if (marks > 79){
            Grade = 'A'
        }
        else if (marks >= 60 && marks <= 79){
            Grade = 'B'
        }
        else if (marks >= 50 && marks <= 59){
            Grade = 'c'
        }
        else if (marks >= 40 && marks <= 49){
            grade = 'D'
        }
        else
         Grade = 'E'
       
    }
}
rl.question('Enter your marks: ', (userInput) => {
    const marks = parseFloat(userInput);
   
    if (!isNaN(marks)) {
        studentMarks(marks);
      } else {
        console.log("Invalid input. Please enter a valid marks value.");
      }

    rl.close();
  });