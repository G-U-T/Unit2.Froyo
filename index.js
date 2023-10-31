const flavorCounter = {
	vanilla: 0,
	coffee: 0,
	strawberry: 0,
};

// Displays text in the middle of the HTML document.
const updateTextLabel = (text) => {
	const centerText = document.getElementById("center-text");
	centerText.textContent = text;
}

const flavorString = String(prompt(`Type a comma-separated list of flavors. (Options are Vanilla, Coffee, and Strawberry.)`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`));
const flavorArray = flavorString.split(`,`);

for (flavorIndex in flavorArray) {
	const flavor = flavorArray[flavorIndex];

	// Checking the flavor names means it won't create a new key-value pair
	// if something wasn't an available flavor.
	if (flavor === `coffee` || flavor === `strawberry` || flavor === `vanilla`) {
		flavorCounter[flavor] += 1;
	}
}

console.log(flavorCounter);
updateTextLabel(JSON.stringify(flavorCounter));