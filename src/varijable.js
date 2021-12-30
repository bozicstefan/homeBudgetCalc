//prikaz
let prikazSuma = document.querySelector('#prikaz-suma');
let prikazPrihod = document.querySelector('#prihod-suma');
let prikazRashod = document.querySelector('#rashod-suma');
let prikazRashodProcenat = document.querySelector('#rashod-procenat')

//input
let inputSelect = document.querySelector('#input-select');
let inputOpis = document.querySelector('#input-opis');
let inputBroj = document.querySelector('#input-broj');
let btnDodaj = document.querySelector('#btn-dodaj');

// cuvanje informacija
let btnSave = document.querySelector('#btnSave');

//liste
let listaPrihodi = document.querySelector('#lista-prihodi');
let listaRashodi = document.querySelector('#lista-rashodi');

let prihodi = [];
let rashodi = [];
let brojacPrihodi = 0;
let brojacRashodi = 0;
let vreme = new Date();
let timestamp = `${vreme.toDateString()} ${vreme.toTimeString()}`

let sveVarijable = {
    prikazSuma,
    prikazPrihod,
    prikazRashod,
    prikazRashodProcenat,
    inputSelect,
    inputOpis,
    inputBroj,
    btnDodaj,
    btnSave,
    listaPrihodi,
    listaRashodi,
    prihodi,
    rashodi,
    brojacPrihodi,
    brojacRashodi,
    vreme,
    timestamp
}

export {
    sveVarijable
}