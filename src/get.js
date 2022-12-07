// Your code here
const character = document.getElementById("character-bar");
const animalName = document.getElementById("name");
const image = document.getElementById("image");
const form = document.getElementById("votes-form");
const animalVotes = document.getElementById("vote-count");
const input = document.getElementById("votes");
const resetVotes = document.getElementById("reset-btn");
let currentAnimal;
resetVotes.style.cursor = "pointer";
resetVotes.style.fontFamily = "'Roboto Mono', monospace";

function getTheCharacters() {
	fetch("https://api.npoint.io/335752306c8659234a70/characters/")
		.then((response) => response.json())
		.then(showTheAnimals);
}

function showTheAnimals(animals) {
	animals.forEach(showTheCharacters);
}

function showTheCharacters(animal) {
	const newSpan = document.createElement("span");
	newSpan.innerHTML = animal.name;
	newSpan.style.cursor = "pointer";
	character.appendChild(newSpan);
	newSpan.addEventListener("click", () => {
		currentAnimal = animal;
		showAnimal(animal);
	});
}

function showAnimal(animal) {
	animalName.innerHTML = animal.name;
	image.src = animal.image;
	animalVotes.innerHTML = animal.votes;
}
getTheCharacters();

form.addEventListener("submit", (e) => {
	e.preventDefault();
	currentAnimal.votes += parseInt(e.target.votes.value);
	showAnimal(currentAnimal);
	form.reset();
});

resetVotes.addEventListener("click", () => {
	currentAnimal.votes = 0;
	showAnimal(currentAnimal);
});
