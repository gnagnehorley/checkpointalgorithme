const str = "The quick brown fox jumps over the lazy dog.";

const vowells = ["a", "e", "i", "o", "u", "y"];

// On converti la chaîne de caractère en tableau suivant les espaces
const strToArray = str.split(" ");

// On recupère la taille du tableau
const nombreDeMot = strToArray.length;

let nombreVol = 0;

vowells.forEach((v) => {
  for (let i = 0; i < str.length; i++) {
    // On compare chaque voyelle à tous l'ensemble des élements du tableau
    if (v === str[i]) {
      nombreVol++;
    }
  }
});

console.log(nombreVol);
console.log(nombreDeMot);
