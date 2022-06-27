// Your JS goes here
var arrayOfTiles = []
function redBox(){
    let container = document.createElement('div')
    document.body.append(container);
    
    for(let i = 0; i < 64; i++){
        let div = document.createElement('div');
        arrayOfTiles.push(div)
        boxProperties(div);
        div.style.backgroundColor = randomColors();
        container.append(div);
    }
}

function boxProperties(div){
    div.style.border = '1px solid black';
    div.style.width = "12%"; 
    div.style.float = "left"; 
    div.style.paddingBottom = "12%";
}

function randomColors(){
    var red = Math.floor((Math.random()* 255) + 1);
    var green =Math.floor((Math.random()* 255) + 1);
    var blue = Math.floor((Math.random()* 255) + 1);
    return `rgb(${red},${green},${blue})`
}

setInterval(function(){
    for(let i =0; i<arrayOfTiles.length;i++){
        arrayOfTiles[i].style.backgroundColor = randomColors();
    }
}, 2000);

redBox();