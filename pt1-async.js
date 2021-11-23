function getById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Got ${id}`);
      resolve(id);
    }, 1000);
  });
}
const ids = [10, 20, 30]

for (const id of ids){
  await getById
}

(async function () {
  const ids = [10, 20, 30];
  // for (const id of ids) {
  //   await getById(id);
  // }
  console.log(ids.forEach(async (id) => {
    await getById(id));
  }}]
