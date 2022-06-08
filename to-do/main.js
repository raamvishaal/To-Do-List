let input=document.getElementById('input');
let button=document.getElementById('submit');
let container=document.getElementById('container');
let k=0;
button.addEventListener('click',()=>{
    let s=input.value;
    input.value=null;
    let o='';
    if(s!=''){
    k+=1;
    o+=`<li id="${k}">${s}
    <button onclick="get1(${k})" id="tic" class="tic">✓</button>
    <button onclick="get2(${k})" id="not" class="not">X</button>
    </li>`;
    container.innerHTML+=o;
}
});
function get1(n){
let li=document.getElementsByTagName("li");
let i1=0;
    console.log("ok");
    for(i1=0;i1<li.length;i1++){
        if(li[i1].id==n){
            if(li[i1].className==="hid"){
            li[i1].classList.remove("hid")
        }
        else{
    li[i1].classList.add("hid");
        }
        }
}
}
function get2(n){
    let li=document.getElementsByTagName("li");
    let i2=0;
    for(i2=0;i2<li.length;i2++){
        if(li[i2].id==n){
    li[i2].remove();
        }
    }
}