import {
    sveVarijable
} from "./varijable.js";


// Prikaz rashoda
function rashodiPrikaz() {

    if (!provera()) {
        sveVarijable.prikazSuma.textContent = 'GREŠKA PRI UNOSU PODATAKA!';
        sveVarijable.prikazSuma.classList.add('greska');

        setTimeout(() => {
            sveVarijable.prikazSuma.classList.remove('greska');
            sveVarijable.prikazSuma.textContent = 'Unesite podatke:'
        }, 3000)
        return
    }

    if (sveVarijable.inputSelect.value == 0) {

        let itemRashodi = {
            id: sveVarijable.brojacRashodi++,
            opis: sveVarijable.inputOpis.value,
            vrednost: Number(sveVarijable.inputBroj.value),
        }

        sveVarijable.rashodi.push(itemRashodi);
        console.log("dodat rashod:", itemRashodi);
        console.log("svi trenutni rashodi:", sveVarijable.rashodi);

        let paragraf = document.createElement('p')
        let spanOpis = document.createElement('span');
        let spanIznos = document.createElement('span');
        let noviRed = document.createElement('br');
        let spanProcenat = document.createElement('span');
        let linija = document.createElement('hr');
        let btnDel = document.createElement('button');

        paragraf.className = 'paragrafRashod';

        spanOpis.textContent = itemRashodi.opis;
        spanOpis.className = 'spanOpis';

        spanIznos.textContent = '-' + itemRashodi.vrednost;
        spanIznos.className = 'spanIznosRashod';

        spanProcenat.textContent = (itemRashodi.vrednost / suma(sveVarijable.prihodi) * 100).toFixed(2) + '%'
        spanProcenat.className = 'spanProcenat'

        sveVarijable.listaRashodi.append(paragraf);
        paragraf.append(spanOpis, spanIznos, spanProcenat, noviRed, linija);

        sveVarijable.prikazRashod.textContent = '-' + suma(sveVarijable.rashodi);
        sveVarijable.prikazRashodProcenat.textContent = procenat(sveVarijable.rashodi, sveVarijable.prihodi);
        sveVarijable.prikazSuma.textContent = konacnaSuma()

        paragraf.addEventListener('mouseenter', () => {

            btnDel.textContent = 'OBRIŠI';
            btnDel.className = 'btnDel';
            btnDel.style.display = 'inline';

            paragraf.append(btnDel);

            paragraf.addEventListener('mouseleave', () => {
                btnDel.style.display = 'none';
            })

            btnDel.addEventListener('click', () => {
                sveVarijable.rashodi = sveVarijable.rashodi.filter(element => element.id !== itemRashodi.id);
                console.log("niz rashoda posle brisanja:", sveVarijable.rashodi);

                paragraf.remove();
                btnDel.remove();

                suma(sveVarijable.prihodi)

                sveVarijable.prikazRashod.textContent = '-' + suma(sveVarijable.rashodi);
                sveVarijable.prikazRashodProcenat.textContent = procenat(sveVarijable.rashodi, sveVarijable.prihodi);
                sveVarijable.prikazSuma.textContent = konacnaSuma()

                console.log('SUMA RASHODA POSLE BRISANJA:', suma(sveVarijable.rashodi));
                console.log('KONACNA SUMA POSLE BRISANJA:', konacnaSuma());
            })
        })
    }
}

// Prikaz prihoda
function prihodiPrikaz() {

    if (!provera()) {
        sveVarijable.prikazSuma.textContent = 'GREŠKA PRI UNOSU PODATAKA!';
        sveVarijable.prikazSuma.className = 'greska';
        return
    }

    if (sveVarijable.inputSelect.value == 1) {

        let itemPrihodi = {
            id: sveVarijable.brojacPrihodi++,
            opis: sveVarijable.inputOpis.value,
            vrednost: Number(sveVarijable.inputBroj.value),
        }

        sveVarijable.prihodi.push(itemPrihodi);
        console.log("dodat prihod:", itemPrihodi);
        console.log("svi trenutni prihodi:", sveVarijable.prihodi);

        let paragraf = document.createElement('p')
        let spanOpis = document.createElement('span');
        let spanIznos = document.createElement('span');
        let noviRed = document.createElement('br');
        let linija = document.createElement('hr');
        let btnDel = document.createElement('button');

        spanOpis.textContent = itemPrihodi.opis;
        spanOpis.className = 'spanOpis';

        spanIznos.textContent = '+' + itemPrihodi.vrednost;
        spanIznos.className = 'spanIznos';

        sveVarijable.listaPrihodi.append(paragraf);
        paragraf.append(spanOpis, spanIznos, noviRed, linija);

        sveVarijable.prikazSuma.textContent = konacnaSuma();
        sveVarijable.prikazRashodProcenat.textContent = procenat(sveVarijable.rashodi, sveVarijable.prihodi);
        sveVarijable.prikazPrihod.textContent = '+' + suma(sveVarijable.prihodi);
        sveVarijable.prikazRashodProcenat

        paragraf.addEventListener('mouseenter', () => {

            btnDel.textContent = 'OBRIŠI';
            btnDel.className = 'btnDel';
            btnDel.style.display = 'inline';

            paragraf.append(btnDel);


            paragraf.addEventListener('mouseleave', () => {
                btnDel.style.display = 'none';
            })

            btnDel.addEventListener('click', () => {
                sveVarijable.prihodi = sveVarijable.prihodi.filter(element => element.id !== itemPrihodi.id);
                console.log("niz prihoda posle brisanja:", sveVarijable.prihodi);

                paragraf.remove();
                btnDel.remove();

                suma(sveVarijable.rashodi)

                sveVarijable.prikazPrihod.textContent = '+' + suma(sveVarijable.prihodi);
                sveVarijable.prikazSuma.textContent = konacnaSuma();
                sveVarijable.prikazRashodProcenat.textContent = procenat(sveVarijable.rashodi, sveVarijable.prihodi);

                console.log('SUMA PRIHODA POSLE BRISANJA:', suma(sveVarijable.prihodi));
                console.log('KONACNA SUMA POSLE BRISANJA:', konacnaSuma());
            })
        })
    }
}

// Prikaz prihoda i rashoda
function prikazi() {
    rashodiPrikaz();
    prihodiPrikaz();
}

// Suma vrednosti elemenata niza
function suma(niz) {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i].vrednost;
    }
    return suma
}

// Konacna suma
function konacnaSuma() {
    let sumaKonacna = suma(sveVarijable.prihodi) - suma(sveVarijable.rashodi);

    if (sumaKonacna > 0) {
        return "+" + (sumaKonacna.toFixed(2));
    } else {
        return (sumaKonacna.toFixed(2));
    }

}

// Procenat rashoda u odnosu na prihod
function procenat(rashod, zarada) {
    return Math.round((suma(rashod) / suma(zarada)) * 100) + '%'
}

// Resetovanje inputa
function resetuj() {
    sveVarijable.inputOpis.value = '';
    sveVarijable.inputBroj.value = '';
}

// Provera unosa inputa
function provera() {
    if (sveVarijable.inputOpis.value.trim().length > 0 && sveVarijable.inputBroj.value > 0) {
        return true
    }
}

// Cuvanje racunice kao downloadovanog fajla
function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], {
        type: contentType
    });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

// Prikupljanje podataka o unosima sa dodatim vremenom skidanja podataka
function skupiSve(niz1, niz2) {

    let objekat = {
        PRIHODI: niz1,
        RASHODI: niz2,
        PRIHODI_UKUPNO: suma(niz1),
        RASHODI_UKUPNO: suma(niz2),
        STANJE: suma(niz1) - suma(niz2),
        VREME_OBRACUNA: sveVarijable.timestamp
    }
    return objekat
}

//  Cuvanje podataka u formatu .txt
function onDownload() {
    download(JSON.stringify(skupiSve(sveVarijable.prihodi, sveVarijable.rashodi)), "Kalkulator prihoda podaci.txt", "text/plain");
}

let sveFunkcije = {
    rashodiPrikaz,
    prihodiPrikaz,
    prikazi,
    suma,
    konacnaSuma,
    procenat,
    resetuj,
    provera,
    download,
    skupiSve,
    onDownload
}

export {
    sveFunkcije
}