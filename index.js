const flavorString = String(prompt(`Type a comma-separated list of flavors. (Options are Vanilla, Coffee, and Strawberry.)`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`));
const flavorArray = flavorString.split(`,`);
console.log(flavorArray);