let btn = document.getElementById("btn");
let msg = document.getElementById("msg");

btn.addEventListener("click",click);
function click(){
    msg.innerHTML = "I am clicked";
}

//mouse events

btn.addEventListener("dbclick", function(event){
    msg.innerHTML ="I am double clicked";
});
btn.addEventListener("mouseover",function(event){
    msg.innerHTML="Somebody has put mouse on me!!!";
});
btn.addEventListener("mouseout",function(event){
    msg.innerHTML="Thank God! I am free now!!";
    console.log(event);
    console.log(event.type);
    console.log(event.target);
});
btn.addEventListener("mousemove",function(event){
    msg.innerHTML="the mouse just moved";
});







