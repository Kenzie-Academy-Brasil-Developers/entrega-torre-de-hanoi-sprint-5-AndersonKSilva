//Cria variaveis e textos
let bodie = document.getElementById("game");
let header = document.createElement("header")
let title = document.createElement("h1")
let message = document.createElement("h2")
let newdiv = document.createElement("div")
let divMoves= document.createElement("div")
let newtower1 = document.createElement("div")
let newtower2 = document.createElement("div")
let newtower3 = document.createElement("div")
let spanMoves = document.createElement("span")

//Cria classes nas torres cinzas
newtower1.classList.add("tow","tow1")
newtower2.classList.add("tow","tow2")
newtower3.classList.add("tow","tow3")

newdiv.classList.add("direction")
bodie.appendChild(header)
title.innerText="Torre de Hánoi"
divMoves.classList.add("Moves")
divMoves.innerText="Movimentos: "
spanMoves.classList.add("moves")
divMoves.appendChild(spanMoves)
header.appendChild(title)
bodie.appendChild(message)
let start = document.createElement("span")
start.innerText="Start"
let offset = document.createElement("span")
offset.innerText="Offset"
let end = document.createElement("span")
end.innerText="Offset"

//Cria div onde contem torres
function creatDivContainer(){
    let newDiv = document.createElement("div");
    newDiv.id=("container");
    bodie.appendChild(newDiv);
}
creatDivContainer();


//Cria as div onde contem os discos
function creatTowers(){
    let newTower = document.getElementById("container");
    for(let i=0;i<3;i++){
        let tower = document.createElement("div");
        tower.id=(`tower${(i+1)}`);
        tower.classList.add('tower');
        newTower.appendChild(tower);
    }
}
creatTowers()

// Mostra torres cinzas e mensagens
bodie.appendChild(newtower1)
bodie.appendChild(newtower2)
bodie.appendChild(newtower3)
bodie.appendChild(newdiv)
newdiv.appendChild(start)
newdiv.appendChild(offset)
newdiv.appendChild(end)
bodie.appendChild(divMoves)


//Cria os discos na tower1
function creatDisks(){
    let towerOne = document.getElementById("tower1")
    for(let i =1;i<=5;i++){
        let disk = document.createElement('div');
        disk.id = `disk${i} `
        disk.className = `disk${i} disk`
        towerOne.appendChild(disk);
    }
}
creatDisks()

//Mensagem de vitória
function victory(){
    let lastTower = document.getElementById('tower3');
    if(lastTower.childElementCount === 5){
        message.innerText="Você Venceu a Torre de Hánoi"
    }
}

//Move discos
let nulo = null
let cont = 0
function moveDisk(event){
    
    const ids = event.currentTarget.id;
    const towers = document.getElementById(ids)
    if(nulo === null){
        nulo = towers.lastElementChild
    }else{
        if(towers.lastElementChild!==null){
            let test = towers.lastElementChild.id;
            let nulo_teste = nulo.id;
            let nulo_num = nulo_teste[4];
            if(nulo_num>test[4]){
                event.currentTarget.appendChild(nulo)
            }
            
        }else{
            event.currentTarget.appendChild(nulo)
            nulo=null
        }
        nulo=null
        cont++
            spanMoves.innerText=` ${cont}`

    }
    victory()   
}
function execute(){
    const idTower1 = document.getElementById("tower1")
    idTower1.addEventListener("click", moveDisk)
    const idTower2 = document.getElementById("tower2")
    idTower2.addEventListener("click", moveDisk)
    const idTower3 = document.getElementById("tower3")
    idTower3.addEventListener("click", moveDisk)
}
execute()