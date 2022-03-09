let btn = document.getElementById("btn") 
let bulb = document.getElementById("img") 
btn.addEventListener("click",togglebulb);

function togglebulb(e){
    
    if(btn.textContent.includes('On')){
        bulb.src = 'lightOn.jpg'
        btn.textContent = 'Turn Off'
    }
    else{
        bulb.src = 'lightOff.jpg'
        btn.textContent = 'Turn On'
    }
    

}
