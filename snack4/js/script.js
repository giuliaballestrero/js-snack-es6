// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]

// Crea un nuovo array con la lista dei mammiferi.
// Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, tipo // leone => lEONE, canidi => cANIDI


const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'volpe', famiglia: 'canidi', classe: 'mammiferi'},
    { nome: 'daino', famiglia: 'cervide', classe: 'mammiferi' },
    { nome: 'tasso', famiglia: 'canide', classe: 'mammiferi' },
    { nome: 'procione', famiglia: 'canide', classe: 'mammiferi' },
    { nome: 'pipistrello', famiglia: 'Vespertilionidae', classe: 'chirottero' },
    { nome: 'arvicola', famiglia: 'cricetidi', classe: 'roditori' },
    { nome: 'scoiattolo', famiglia: 'sciuridi', classe: 'roditori' },
];

const mammiferi = animals.filter((animal) => animal.classe === 'mammiferi');
console.log(mammiferi);

const upperAnimals = animals.map ((animal) => {
    animal.nome = animal.nome.charAt(0) + animal.nome.substring(1).toUpperCase ();

    return animal;
});

console.log(upperAnimals);