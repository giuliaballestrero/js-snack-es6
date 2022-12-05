/**
 * 
   Crea un array composto da 10 automobili.
   Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

   Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
   Infine stampa separatamente i 3 array.
 */


   const cars = [
    {
        marca: "skoda",
        modello:"fabia" ,
        alimentazione: "benzina",
    },
    {
        marca: "skoda",
        modello: "fabia",
        alimentazione: "diesel",
    },
    {
        marca: "skoda",
        modello: "fabia",
        alimentazione: "gpl",
    },
    {
        marca: "skoda",
        modello: "fabia",
        alimentazione: "elettrico",
    },
    {
        marca: "skoda22",
        modello: "fabia",
        alimentazione: "benzina",
    },
    {
        marca: "skoda",
        modello: "fabia",
        alimentazione: "benzina",
    },
    {
        marca: "skoda",
        modello: "fabia",
        alimentazione: "gpl",
    },
    {
        marca: "skoda",
        modello: "fabia",
        alimentazione: "benzina",
    },
    {
        marca: "skoda",
        modello: "fabia",
        alimentazione: "diesel",
    },
    {
        marca: "skoda",
        modello: "fabia",
        alimentazione: "diesel",
    }
   ];

   const benzinaCars = [];
   const dieselCars = [];
   const miscCars = [];

   for (let i = 0; i < cars.length; i++) {
    const currentAuto = cars[i];
    if (currentAuto.alimentazione === "benzina") {
        benzinaCars.push(currentAuto);
    } else if (currentAuto.alimentazione === "diesel") {
        dieselCars.push(currentAuto);
    } else {
        miscCars.push(currentAuto)
    }
   }

   console.log(benzinaCars, dieselCars, miscCars);


