function monthlySavings(list, living_cost)
{
    if ((!Array.isArray(list)) || (typeof (living_cost) !== 'number'))
        return "invalid input";
    
    let earn = -living_cost;

    for (let x of list)
    {
        let vat = x * 0.2;
        earn += (x >= 3000 ? x - vat : x);
    }

    return (earn>=0 ? earn : 'earn more');
}
let result = monthlySavings([1000, 2000, 3000], 5400);
// let result = monthlySavings([900, 2700, 3400], 100000);
console.log(result);
