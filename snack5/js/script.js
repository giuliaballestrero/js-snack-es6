/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */


const persone = [
    { nome: 'chiara', cognome: 'licata', eta: 18 },
    { nome: 'mario', cognome: 'perez', eta: 11 },
    { nome: 'lucia', cognome: 'lombardi', eta: 32 },
    { nome: 'claudio', cognome: 'rossi', eta: 57 },
    { nome: 'giovanna', cognome: 'bianchi', eta: 44 },
    { nome: 'anna', cognome: 'neri', eta: 28 },
    { nome: 'michele', cognome: 'giannini', eta: 17 },
    { nome: 'francesca', cognome: 'giannetti', eta: 15 },
    { nome: 'giancarlo', cognome: 'volpe', eta: 4 },
    { nome: 'caterina', cognome: 'gatti', eta: 6 },

];



const patentati = persone.map((persona) => {
    if (persona.eta >= 18) {
      return persona.nome + " può guidare";  
    }  
});


console.log(patentati);