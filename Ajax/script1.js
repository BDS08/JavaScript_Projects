let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);



function buttonClickHandler(){
    console.log("load");
    let xhr = new XMLHttpRequest();

    xhr.open('GET','library.txt',true);
   
    xhr.onprogress = function(){
        console.log('on progress');
    }
    xhr.onload = function(){
        if (xhr.status == 200){
            console.log(this.responseText);
        }else{
            console.log("Error Found");
        }
    }
    
    xhr.send();
}