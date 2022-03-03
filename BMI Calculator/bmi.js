
document.getElementById('submit').addEventListener('click',bmicalculate);
function bmicalculate(){
    let wt = parseInt(document.querySelector('#kg').value);  
    let ht= parseInt(document.querySelector('#cm').value);

    let htM = (ht/100);
    const BMI = (wt/(htM ** 2));
    const bmi = BMI.toFixed(1);
    console.log(bmi);

    document.querySelector('#result').innerHTML = `${bmi}`
}
   



