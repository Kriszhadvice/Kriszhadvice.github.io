function keveres(t){
    let l = [...t];
    for (let i = 0; i < l.length; i++) {
        let t = l[i];
        let x = veletlenEgesz(i, l.length);
        l[i] = l[x];
        l[x]=t;
        
    }
    return l;
}


function veletlenEgesz(a, b){
    return a+Math.floor(Math.random()*(b-a));
}


let divekListaja = document.querySelectorAll('main div');

function sorsolas(db){
    
    let l = keveres(divekListaja);
    for (let i = 0; i < db; i++) {
        l[i].classList.toggle('mole');
        
    }
}

for (const kocka of divekListaja) {
    kocka.addEventListener('click', ujra)
}
let score = 0;

function ujra(e){
    if(e.target.classList.contains('mole')){
        e.target.classList.toggle('mole');
        sorsolas(1);
        score ++; 
        pontszam.innerHTML = score;
    } else{
        alert('Rossz kocka. Vesztettél, próbáld újra!');
        score=0;
        pontszam.innerHTML = score;
    }
}
pontszam.innerHTML = score;

sorsolas(1);