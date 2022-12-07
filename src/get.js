// Your code here
const character = document.getElementById("character-bar");
// const container = document.getElementById("detailed-info");
const animalName = document.getElementById("name");
const image = document.getElementById("image");
const form = document.getElementById("votes-form");
const animalVotes = document.getElementById("vote-count");
const input = document.getElementById("votes");
const resetVotes = document.getElementById("reset-btn");
let currentAnimal;
resetVotes.style.cursor = "pointer";
resetVotes.style.fontFamily = "'Roboto Mono', monospace";


function getCharacters() {
	fetch("https://api.npoint.io/335752306c8659234a70/characters/")
		.then((response) => response.json())
		.then(renderAnimals);
}

function renderAnimals(animals) {
	animals.forEach(renderCharacters);
}

function renderCharacters(animal) {
	const spanEle = document.createElement("span");
	spanEle.innerHTML = animal.name;
	spanEle.style.cursor = "pointer";
	character.appendChild(spanEle);
	spanEle.addEventListener("click", () => {
		currentAnimal = animal;
		showAnimal(animal);
	});
}

function showAnimal(animal) {
	animalName.innerHTML = animal.name;
	image.src = animal.image;
	animalVotes.innerHTML = animal.votes;
}
getCharacters();

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
