/*Creating nodes*/


function shuffleArray(array) {
    // Create a copy of the original array to avoid modifying it directly
    const shuffledArray = [...nameArray];

    // Start from the last element and swap with a randomly selected element before it
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
        // Swap elements at i and j
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

let nameArray = ["Alexandre Vandewiele", "Antoine Lansman", "Bastien Venturi", "Carole Gérard", "Dorian Vanden Eynde", "Elisabeth Leyder", "Elodie Ali", "Justin Michel", "Justine Frigo", "Justine Leleu", "Kimi Lefort", "Layla", "Lidwine Careme", "Lucas Beauloi", "Marie Tara", "Mathias Barbier", "okly2023", "Pierre Marien", "Robin Piot", "Rosalie Boulard", "Stephane Comblez", "Tim Desmet", "Toms", "Valentin Lefort", "Vens Alexandre", "Virginie Dourson"];

function randomC() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    return color = `rgb(${red}, ${green}, ${blue})`;
}

function fontcolor(red, green, blue) {
    let luminance = (red * 299 + green * 587 + blue * 114) / 1000;
    return luminance < 128 ? 'white' : 'black';
}

shuffleArray(nameArray);


function people() {
    for (let child of shuffleArray()) {
        let newSection = document.createElement("section");

        let people = document.createElement("p");

        let randomColor = randomC();

        let [red, green, blue] = randomColor.match(/\d+/g).map(Number);

        let color = fontcolor(red, green, blue);

        let name = document.createTextNode(child);

        people.appendChild(name);

        newSection.appendChild(people);

        people.style.color = color;

        newSection.style.backgroundColor = randomColor;

        document.querySelector('article').appendChild(newSection);
    }

}

people()



