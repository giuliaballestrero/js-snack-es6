/*1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.
*/

const studentessa = {
    name: "Giovanna",
    lastname: "Corsi",
    age:"32",
};

for (let key in studentessa) {
    console.log(key, "->", studentessa[key])
};