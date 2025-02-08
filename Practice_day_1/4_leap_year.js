function leap()
{
    let year = document.getElementById('leap').value;

    let result = "Invalid";
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        result = "It is leap year";
    }
    else result = "Not a leap year";

    document.getElementById('leap_show').innerHTML = result;
}


//  first index.html open the live server