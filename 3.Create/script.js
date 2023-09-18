/*Creating nodes*/
function randomC() {
    let red = Math.floor(Math.random()* 256)
    let green = Math.floor(Math.random()* 256)
    let blue = Math.floor(Math.random()* 256)

    return color = `rgb(${red}, ${green}, ${blue})`;
}

function people() {
    let nameArray = ["Alexandre Vandewiele", "Antoine Lansman", "Bastien Venturi", "Carole Gérard", "Dorian Vanden Eynde", "Elisabeth Leyder", "Elodie Ali", "Justin Michel", "Justine Frigo", "Justine Leleu", "Kimi Lefort", "Layla", "Lidwine Careme", "Lucas Beauloi", "Marie Tara", "Mathias Barbier", "okly2023", "Pierre Marien", "Robin Piot", "Rosalie Boulard", "Stephane Comblez", "Tim Desmet", "Toms", "Valentin Lefort", "Vens Alexandre", "Virginie Dourson"];

    for (child of nameArray) {
        let randoColor = randomC()

        let newSection = document.createElement("section");

        let people = document.createElement("p");

        let name = document.createTextNode(child);

        people.appendChild(name);

        newSection.appendChild(people);

        document.querySelector('article').appendChild(newSection).style.backgroundColor = randoColor;
    }

}

people()

