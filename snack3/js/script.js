/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */

const zucchine = [
    {
        varietà : "zucchina-chiara",
        peso : 200,
        lunghezza : "10",
    },

    {
        varietà : "zucchina-chiara",
        peso : 230,
        lunghezza: "10",
    },
    {
        varietà : "zucchina-chiara",
        peso : 200,
        lunghezza : "10",
    },

    {
        varietà : "zucchina-chiara",
        peso : 110,
        lunghezza : "10",
    },

    {
        varietà : "zucchina-chiara",
        peso : 260,
        lunghezza : "10",
    },

    {
        varietà : "zucchina-chiara",
        peso : 205,
        lunghezza : "10",
    },
    {
        varietà : "zucchina-chiara",
        peso : 187,
        lunghezza : "10",
    },
    {
        varietà : "zucchina-chiara",
        peso : 50,
        lunghezza : "10",
    },
    {
        varietà : "zucchina-chiara",
        peso : 20,
        lunghezza : "10",
    },
    {
        varietà : "zucchina-chiara",
        peso : 150,
        lunghezza : "10",
    }
];

  let pesoTotale = 0;

for (let i = 0; i < zucchine.length; i++) {

  pesoTotale += zucchine[i].peso;

}

  console.log(pesoTotale);


