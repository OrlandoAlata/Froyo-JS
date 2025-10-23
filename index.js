const flavorInput = prompt(
  "Please enter your desired ice cream flavors like listed in the prompt below:",
  "vanilla,vanilla,oreo,oreo,banana,coffee"
);

const flavors = flavorInput.split(",");
const flavorCount = count(flavors);
console.table(flavorCount);

function count(flavors) {
  const counts = {};
  for (const flavor of flavors) {
    if (flavor in counts) {
      counts[flavor] += 1;
    } else {
      counts[flavor] = 1;
    }
  }
  return counts;
}
