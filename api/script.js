async function main(){
    let random = Math.floor(Math.random()*80)+1;
    let link  = 'https://www.swapi.tech/api/people/' + random;
    let p = await fetch(link);

    let adat = await p.json()
    let result = adat.result.properties;

    document.getElementById('nev').innerHTML = result.name;
    document.getElementById('nem').innerHTML = result.gender;
    document.getElementById('borszin').innerHTML = result.skin_color;
    document.getElementById('hajszin').innerHTML = result.hair_color;
    document.getElementById('magassag').innerHTML = result.height;
    document.getElementById('szemszin').innerHTML = result.eye_color;
}


main();