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

