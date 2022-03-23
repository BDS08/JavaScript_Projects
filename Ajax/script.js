
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click',popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);

    //what to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementsById('list');
            str= "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name}</li>` 
            }
            list.innerHTML = str;
        }else{
            console.log('some error happened')
        }
    }

    xhr.send();

    console.log('we are done feting');

}

function buttonClickHandler(){
    console.log("btn clicked");
    // Instantiate an xhr object 
    const xhr = new XMLHttpRequest();
    
    //open the object
    // xhr.open('GET','https://dummyjson.com/products/1',true);

    //Use this for post requests
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    //what to do on progress(optional)
    xhr.onprogress = function(){
        console.log('on progress');
    }

    // xhr.onreadystatechange = function () {
    //    console.log('ready state is ', xhr.readyState);
            
    // }
    
    //what to do when response is ready
    //HTTP response code
    xhr.onload = function(){
        if(this.status === 200){
        console.log(this.responseText)
        }else{
            console.log('some error happened')
        }
    }

    // send the request
    params = "name=tet&salary=123&age=23";
    xhr.send(params);

    console.log('we are done');
}