function dark()
{
      let bd=document.querySelector("body");
let div=document.querySelectorAll("div");
let dorae=document.querySelectorAll(".gif"); 
bd.classList.toggle("darkmodehead");
    for(let d of div){
    d.classList.toggle("darkmoderemain");
 
}

for(let d of dorae)
      {
d.classList.toggle("opacity");
      }
}