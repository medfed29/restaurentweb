


const x=document.getElementById("icone")
const act=document.getElementById("action")

x.addEventListener("click",()=>{
    hundlemenu();
});

function hundlemenu() {
    x.classList.toggle("is-active")
    act.classList.toggle("is-active")
}
function myFunction(y) {
    y.classList.toggle("change");
}

  

