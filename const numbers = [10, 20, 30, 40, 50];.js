const numbers = [10, 20, 30, 40, 50];
numbers;
const copyOfNumbers = [...numbers];
copyOfNumbers;
copyOfNumbers[0] = 100;
copyOfNumbers;
numbers;

const people = [{ name: "John" }, { name: "Jane" }];
people;
const copyOfPeople = [...people];
copyOfPeople;
copyOfPeople[0].name = "Jack";
copyOfPeople;
people;

const copyOfNumbers = [...numbers];
// const first = numbers[0];
// const second = numbers[1];
const [first, second, third, ...rest] = numbers;
first;
second;
rest;
// const [state, setState] = useState()

const people = [{ name: "John" }, { name: "Sue" }];
people;
const copyOfPeople = [...people];
copyOfPeople;
copyOfPeople[0].name = "Jack";
// copyOfPeople
const people = [{ name: "john" }, { name: "sam" }];
// const names = ["alice", "bob", "sam", "Jim", "chuck"];
// names;
// console.log(names.lastIndexOf('chuck'));
// console.log(names.findIndex((name) => name === 'Jim'));
// console.log(names.find((value) => value === "sam"));
const person = people.find((p) => p.name === "john");
person;
person.name = "Sally";

const numbers = [10, -20, 30, -40, 50];

numbers.includes(-40);
console.log(numbers.some((num) => num > 0));
console.log(numbers.every((num) => num >= -40));
