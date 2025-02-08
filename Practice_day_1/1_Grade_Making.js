function solution(x) {
    let result = "Invalid";

    if (x >= 80 && x <= 100)
        result = "A+";
    else if (x >= 70 && x < 80)
        result = "A"
    else if (x >= 60 && x < 70)
        result = "A-"
    else if (x >= 50 && x < 60)
        result = "B"
    else if (x >= 40 && x < 50)
        result = "C"
    else if (x >= 33 && x < 40)
        result = "D"
    else if (x >= 0 && x < 33)
        result = "F" 
    console.log(`Your Result is : ${result}`)
}

solution(40);