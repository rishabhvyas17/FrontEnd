let btn = document.getElementById("btn");
let msg = document.getElementById("msg");

btn.addEventListener("click",show);

function show(){
    msg.innerHTML = "I am clicked";
}