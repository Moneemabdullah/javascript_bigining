function number_Chack(x)
{ 
    let result = "Invalid";
    if (x % 2 === 1) result = "Odd";
    else if (x % 2 === 0) result = "Even";
    return result;
}


function isOddEven()
{
    let x = document.getElementById("num").value;
    let result = `Your Value is ${number_Chack(x)}`;

    document.getElementById('track').innerHTML = result;
}

//  first index.html open the live server