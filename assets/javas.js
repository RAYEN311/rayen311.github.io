let selector = document.getElementById("Selector"); 

// when client clicked on select element 
selector.addEventListener("change", () => {
  // if value switched by client
if(selector.value == 0){
console.log(selector.value)   
window.location = "../ar/index.html"

}
else if(selector.value == 1){
    console.log(selector.value)   
    window.location = "../index.html"

}
else if(selector.value == 2){
    console.log(selector.value)   
    window.location = "../fr/index.html"
}
});
var rayen_color_doc_changing_state = 0 ;
let clic = document.getElementById('clic');
clic.addEventListener("change",()=>{
  if(rayen_color_doc_changing_state == 0){
  // document.documentElement.style.setProperty('--my-variable', '#COLOR');
   document.documentElement.style.setProperty('--primary-background', 'rgb(255, 255, 255)');
   document.documentElement.style.setProperty('--primary-color', 'rgb(25, 25, 42)');
   document.documentElement.style.setProperty('--second-color', 'rgb(1, 108, 195)');
   document.documentElement.style.setProperty('--contact-link', '#006aff');
   document.documentElement.style.setProperty('--mini-dis', 'rgb(45,45,45)');
   document.getElementById('env1').setAttribute('fill','black')
   document.getElementById('env2').setAttribute('fill','black')
   rayen_color_doc_changing_state = 1 ;
  }else if(rayen_color_doc_changing_state == 1){
    document.documentElement.style.setProperty('--primary-color', 'rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--primary-background', 'rgb(25, 25, 42)');
    document.documentElement.style.setProperty('--second-color', 'white');
    document.documentElement.style.setProperty('--contact-link', 'aqua');
    document.documentElement.style.setProperty('--mini-dis', 'rgb(222,222,222)');
    document.getElementById('env1').setAttribute('fill','white')
    document.getElementById('env2').setAttribute('fill','white')
    rayen_color_doc_changing_state = 0 ;
  }
})
const main = document.getElementById('main')
const vid = document.getElementById('vid')
const home = document.getElementById('home')       
const career = document.getElementById('career')       
const projs = document.getElementById('projects')       
const direct = document.getElementById('direct')       
const homebtn = document.getElementById('homebtn')       
const careerbtn = document.getElementById('careerbtn')       
const projsbtn = document.getElementById('projectsbtn')       
const directbtn = document.getElementById('directbtn')       
vid.addEventListener('click', ()=>{
  vid.style.display = "none";
  home.style.display = "block"
  homebtn.style.color = "white"
  homebtn.style.backgroundColor = "green"
  main.style.backgroundColor = 'white'
})
function diabls(v0,v1,v2 ,v3 ,v4 , v5,v6,v7,v8){
v0.style.color = "white"
v0.style.backgroundColor = "green"
v1.style.display = "block";
v2.style.display = "none";
v3.style.display = "none";
v4.style.display = "none";
v5.style.display = "none";
main.style.backgroundColor = 'white'
document.getElementById('prg').style.width = "0%"
setTimeout(()=>{
  document.getElementById('prg').style.width = "100%"
},1000)
v6.style.color = "rgb(0, 174, 255)"
v6.style.backgroundColor = "#00003e"
v7.style.color = "rgb(0, 174, 255)"
v7.style.backgroundColor = "#00003e"
v8.style.color = "rgb(0, 174, 255)"
v8.style.backgroundColor = "#00003e"
}
homebtn.addEventListener('click', ()=>{
diabls(homebtn,home , career , projs , direct , vid , careerbtn, projsbtn ,directbtn)
})
careerbtn.addEventListener('click', ()=>{
diabls(careerbtn,career , home , projs , direct, vid, homebtn, projsbtn ,directbtn)
})
projsbtn.addEventListener('click', ()=>{
diabls(projsbtn ,projs , career , home , direct, vid ,homebtn, careerbtn ,directbtn)
})
directbtn.addEventListener('click', ()=>{
diabls(directbtn , direct , career , projs , home, vid ,homebtn, projsbtn ,careerbtn)
})
