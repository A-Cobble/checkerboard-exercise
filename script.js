// Your JS goes here

function redBox(){
    
    let container = document.createElement('div')
    document.body.append(container);
    
    for(let i = 0; i < 8; i++){
        for(let j=0; j< 8; j++){
            let div = document.createElement('div');
            if(i % 2 === 0){
                if(j % 2 === 0){   
                    boxProperties(div);
                    div.style.backgroundColor = 'red';
                    container.append(div);
                }else{
                    boxProperties(div);
                    div.style.backgroundColor = 'black';
                    container.append(div)
            }
        }else{
            if(j % 2 === 0){ 
                boxProperties(div);
                div.style.backgroundColor = 'black';
                container.append(div);
            }else{
                boxProperties(div);
                div.style.backgroundColor = 'red';
                container.append(div)
            }
        }
        }
    }
}

function boxProperties(div){
    
    div.style.border = '1px solid black';
    div.style.width = "12.0%"; 
    div.style.float = "left"; 
    div.style.paddingBottom = "12.0%";
}
redBox()
