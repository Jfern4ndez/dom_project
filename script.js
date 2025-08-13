document.querySelector("body").style.backgroundColor = "rgba(16, 16, 161)";
document.querySelector("h1").style.textDecoration = "underline";
document.querySelector('h2').style.justifySelf = "center";
document.querySelector('h2').innerHTML = "Here are Pokemon's incredible Gen 1 starters!";
document.querySelector('img').style.border = "3px dotted #FFCB05";
document.getElementById("bulbasaur_container").style.backgroundColor = "#05ff8a89";

let pokemon_images = document.getElementsByClassName('pokemon_images')

for(i = 0; i < pokemon_images.length; i ++) {
    pokemon_images[i].style.border = "3px dotted #FFCB05";
}

let pokemon_names = document.getElementsByClassName('pokemon_names')

for(i = 0; i < pokemon_names.length; i ++) {
    pokemon_names[i].append("!")
    pokemon_names[i].style.color = "#FDEFA6";
}