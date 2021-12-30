import {
    sveVarijable
} from './varijable.js'

import {
    sveFunkcije
} from "./funkcije.js"

// Unos inputa 
sveVarijable.btnDodaj.addEventListener('click', () => {
    sveFunkcije.prikazi();
    sveFunkcije.resetuj();
})

// Skidanje podataka
sveVarijable.btnSave.addEventListener('click', () => {
    sveFunkcije.onDownload();
})