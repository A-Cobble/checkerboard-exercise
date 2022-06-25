// Your JS goes here

function redBox(){
    
    let container = document.createElement('div');
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
                    container.append(div);
            }
        }else{
            if(j % 2 === 0){ 
                boxProperties(div);
                div.style.backgroundColor = 'black';
                container.append(div);
            }else{
                boxProperties(div);
                div.style.backgroundColor = 'red';
                container.append(div);
            }
        }
        }
    }
     let gradient = document.createElement('div');
     gradient.style.backgroundImage ='linear-gradient(rgba(0,0,255,1), rgba(255,0,0,0.7))';
     gradient.style.paddingBottom = '100%';
     gradient.style.width = '100%';
     gradient.style.opacity = '75%';
     container.append(gradient);
}

function boxProperties(div){
    
    div.style.width = "12.5%"; 
    div.style.float = "left"; 
    div.style.paddingBottom = "12.5%";
}

redBox()
