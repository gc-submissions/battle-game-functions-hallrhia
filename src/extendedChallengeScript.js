//extended challenges

function getGrade(grade){

    if(grade >= 90 && grade <= 100){
        return "A";
    }
    else if(grade >=80 && grade < 90){
        return "B";
    }
    else if(grade >= 70 && grade < 80){
        return "C";
    } 
    else if(grade >= 60 && grade < 70){
        return "D";
    }
    else if(grade < 60 && grade >= 0){
        return "F";
    }
}

console.log(getGrade(100));
console.log(getGrade(92));
console.log(getGrade(83));
console.log(getGrade(75));
console.log(getGrade(63));

function prioritize(urgent, important){
  
    if(urgent && important){
        return 1;
    }
    else if(!urgent && important) {
        return 2;
    }
    else if(urgent && !important){
        return 3;
    }
    else {
        return 4;
    }
}

console.log(prioritize(true, true));
console.log(prioritize(false, true));
console.log(prioritize(true, false));
console.log(prioritize(false, false));




// function calculatePay(wage, hours){
//     //return weekly pay based on extended challenge in life events
// }