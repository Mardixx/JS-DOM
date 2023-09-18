let myTitle = document.title;

console.log(myTitle);



let red = Math.floor(Math.random()* 256)
let green = Math.floor(Math.random()* 256)
let blue = Math.floor(Math.random()* 256)

let randomColor = `rgb(${red}, ${green}, ${blue})`;

document.body.style.backgroundColor = randomColor;

let childElem = document.body.children;

for (child of childElem) {
    console.log(child);
}