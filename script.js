// Toggle animal on click
const animalDiv = document.getElementById("animal-div");
const animalButton = document.getElementById("show-animal");

animalButton.addEventListener("click", () => 
{
    animalDiv.classList.toggle("hidden");
});


// Toggle power on click
const powerDiv = document.getElementById("power-div");
const powerButton = document.getElementById("show-power");

powerButton.addEventListener("click", () => 
{
    powerDiv.classList.toggle("hidden");
});


// Toggle skills on click
const skillsDiv = document.getElementById("skills-div");
const skillsButton = document.getElementById("show-skills");

skillsButton.addEventListener("click", () => 
{
    skillsDiv.classList.toggle("hidden");
});
/* By Ishani Sadagopan Jeyaram Malismitha */