const numbers = [10, 20, 30, 40, 50];

numbers.forEach((value, index) => {
  console.log(value)
  console.log(index)
});

function getById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Got ${id}`);
      resolve(id);
    }, 1000);
  });
}


