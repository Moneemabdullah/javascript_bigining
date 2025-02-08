var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

result = " ";

for (let x of friends)
{
    if (x.length > result.length) result = x; 
}

console.log(result);