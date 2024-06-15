let span=document.querySelectorAll('span');
for(let s of span)
{
s.classList.add("pos");
}
let count=0;
let input=document.querySelectorAll('input[type=checkbox]');
for(let i of input){
    for(let s of span){
    i.addEventListener("change", () => {
        if (i.checked) {
           count=count+1;
            s.classList.add("visible");
        
        }
        
   });
}}
