const num1=Math.ceil(Math.random()*10)
const num2=Math.ceil(Math.random()*10)
let scoreEl=document.getElementById("score")
const formEl=document.getElementById("form")
let score= JSON.parse( localStorage.getItem("score"))
if(!score){
    score=0;
}
scoreEl.innerText=`score:${score}`

// console.log(num1)
const questionEl=document.getElementById("question");
const inputEl=document.getElementById("input")
questionEl.innerText=`What is ${num1} multiply by ${num2}`

const correctAns=num1 * num2;
formEl.addEventListener("submit",()=>{
    const userAns= +inputEl.value
    if(userAns === correctAns){
score++
updatelocalstorage()
    }
    else{
        score--
        updatelocalstorage()
    }
})

function updatelocalstorage(){
    localStorage.setItem("score",JSON.stringify(score))
}