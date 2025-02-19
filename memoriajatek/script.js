function main(){
    list = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"];

    randomszam();

    var divek = document.querySelectorAll("main div");
    for (let index = 0; index < divek.length; index++) {
        const element = divek[index];
        element.id = list[randomlista[index]];
        element.addEventListener('click', klikk);
        element.felforditva = false;
    }
}

felcount = 0;
felegy = null;
lock = false;
katt = 0;

function klikk(e){
    if(lock == false){
        let elem = e.target;
        if(elem.felforditva == false){
            document.getElementById("click").innerHTML = parseInt(document.getElementById("click").innerHTML) + 1;
            lock = true;

            elem.felforditva = true;
            elem.innerHTML = elem.id;
            if(felegy != null){
                if(felcount == 0){
                    felcount = 1;
                    felegy = elem;
                    lock = false;
                }
                else if(felcount == 1){
                    felcount = 0;
                    if(felegy.id == elem.id){
                        felegy.style.backgroundColor = "palevioletred";
                        elem.style.backgroundColor = "palevioletred";
                        lock = false;
                        document.getElementById("par").style.color= "palevioletred";
                        document.getElementById("par").innerHTML = par;
                        setTimeout(() => {
                            document.getElementById("par").style.color= "";
                        }, 1000);
                    }
                    else{
                        felegy.style.backgroundColor = "black";
                        elem.style.backgroundColor = "black";
                        setTimeout(function(){    
                            felegy.innerHTML = "";
                            felegy.felforditva = false;
                            elem.innerHTML = "";
                            elem.felforditva = false;
                            
                            felegy.style.backgroundColor = "";
                            elem.style.backgroundColor = "";
                            
                            lock = false;
                        }, 1000);
                    }
                }
            }
            else{
                felegy = elem;
                felcount = 1;
                lock = false;
            }
        }   
    }
}

randomlista = [];
mennyivanbenne = 0;
function randomszam(){
    rand = Math.floor((Math.random() * 36))
    if(mennyivanbenne < 36){
        if(bennevane(rand, randomlista)){
            randomszam();
        }
        else{
            randomlista[mennyivanbenne] = rand;
            mennyivanbenne++;
            randomszam();
        }
    }
}

function bennevane(szam, lista){
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        if(lista[index] == szam){
            return true;
        }
    }
    return false;
}

main();