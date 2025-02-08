var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

numbers = [...(new Set(numbers))]
 

console.log(numbers);