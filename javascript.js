 let count=0
let countEl=document.getElementById("count-el")
function increment(){
    count+=1
    countEl.innerText=count
    console.log(count)
}

function func(){
    let saveEl=document.getElementById("save-el")
    let basic=count+"- "
    saveEl.textContent+=basic
    console.log(saveEl.innerText)
    countEl.innerText=0
}
