function joined( ){
    let height=document.getElementById('height')
    let weight=document.getElementById('weight')
let bmi=weight.value/(height.value*height.value)
let thank=document.getElementById('thank')
bmi=bmi.toFixed(0)
console.log(bmi)
if (bmi<18)
{thank.innerText='underweight'}
else if (bmi>=18 && bmi<=24)
{thank.innerText="normal"}
else if (bmi>24 && bmi <=29)
{thank.innerText='overweight'}
else{thank.innertext='obese'}






}