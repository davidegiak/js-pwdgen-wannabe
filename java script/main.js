// // Dichiaro (con let) una variabile, senza assegnare valore 
// let miaStringa;
// // Assegno il valore a una variabile già esistente (senza let)
// miaStringa = 'Ciao';
// // utilizzo/richiamo (senza let)
// alert(miaStringa);

let nome=prompt ("Nome")

let cognome=prompt ("Cognome")

let colorePreferito=prompt ("Colore preferito")

let laTuaPassword=("La Tua Password è:")

let numero=("#24")

alert (laTuaPassword + nome + cognome + colorePreferito + numero)

document.getElementById("password").innerHTML =laTuaPassword + nome + cognome + colorePreferito + numero
