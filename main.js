const num = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
const display = document.querySelector('#display')
const equal = document.querySelector('#equals')
const decimal = document.querySelector('.decimal')

let count = 0
let num1 = 0
let num2 = 0
let result = 0
let oper = ""

num.forEach((item)=>{
    item.addEventListener('click', ()=>{
        display.innerHTML += item.innerHTML
    })
})

operator.forEach((item)=>{
    item.addEventListener('click', ()=>{
        count = 0
        num1 = Number(display.innerHTML)
        oper = item.innerHTML
        console.log("num1 =", num1)
        console.log("oper =", oper)
        display.innerHTML = ''
    })
})

equal.addEventListener('click', ()=>{
    num2 = Number(display.innerHTML)
    console.log("num2 =", num2)

    if(oper === "+"){
        result = num1 + num2
        display.innerHTML = result
    }
    else if(oper === "-"){
        result = num1 - num2
        display.innerHTML = result
    }
     else if(oper === "*"){
        result = num1 * num2
        display.innerHTML = result
    }
     else if(oper === "/"){
        result = num1 / num2
        display.innerHTML = result
    }
})

on.addEventListener('click', ()=>{
    display.innerHTML = ''
})

clear.addEventListener('click', ()=>{
    if(display.innerHTML === 'Infinity'
    || display.innerHTML === "-Infinity"
    || display.innerHTML === "Error"
    || display.innerHTML === "NaN") display.innerHTML = ''
    display.innerHTML = display.innerHTML.slice(0,-1)
})

percentage.addEventListener('click', ()=>{
    display.innerHTML = display.innerHTML / 100
})

decimal.addEventListener('click', ()=>{
    if(count === 0){
         display.innerHTML +=decimal.innerHTML
         count++
    }
   
})

