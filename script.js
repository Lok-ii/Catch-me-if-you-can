let mainContainer = document.querySelector(".container");

let pageHeight = document.documentElement.clientHeight;
let pageWidth = document.documentElement.clientWidth;

mainContainer.addEventListener("mouseover", (e)=>{
    let left = Math.floor((Math.random() * pageWidth) - 160);
    let top = Math.floor((Math.random() * pageHeight) - 240);

    if(left < 1){
        left = 0;
    }
    if(top < 1){
        top = 0;
    }
    mainContainer.style.top = top + "px";
    mainContainer.style.left = left + "px";    
});
