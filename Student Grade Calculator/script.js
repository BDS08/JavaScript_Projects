



function calcy(){
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let grade = '';
    let total = 0;
    total = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);

    let percentage = (total / 400 )*100;
    console.log(percentage);

    if(percentage <= 100  && percentage >= 80){
        grade = 'A';
    }else if(percentage <= 79  && percentage >= 60){
         grade = 'B';
    }else if(percentage <= 59  && percentage >= 40){
         grade = 'C';
    }else{
         grade = 'F';
    }
    
    let showData = document.getElementById('showData');
    if(percentage >= 39.5){  
        showData.innerHTML = ` Out of 400 your total is  ${total} and percentage is ${percentage}%. <br> Your grade is ${grade}. You are Pass. `
    }
    else{
       showData.innerHTML = ` Out of 400 your total is  ${total} and percentage is ${percentage}%. <br> Your grade is ${grade}. You are Fail. `
    }
}