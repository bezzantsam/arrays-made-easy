const numbers = [10, 20, 30, 40, 50];

for (const index in numbers) {
  console.log(index);
  console.log(numbers[index]);
}

for (const value of numbers) {
  if (value > 20) {
    break;
  }
  console.log(value);
}
//for loop good for creation of data but iterating through arrays no
//for in: use for index
//for of: use for the value
//forEach: use but has problems with async and cant break out of
