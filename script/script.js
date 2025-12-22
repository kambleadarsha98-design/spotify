const firstBox = document.querySelector(".fristbox");
const siderBtn = document.querySelector("#siderbtn");
const secondBox = document.querySelector(".secondbox");
const library = document.querySelector("#library");
const full = document.querySelector(".full");
const  box3 =  document.querySelector("#box3")
const   screen =   document.querySelector("#fullcreen")
const    pop  =  document.querySelector("#plusadd")
const   msgalert =  document.querySelector(".alertmsg");
let isExpanded = true; 

const  listBtn  = document.querySelector(".buttonlist");  

// 1. Show/Hide toggle button on hover
firstBox.addEventListener("mouseover", () => {
    siderBtn.style.visibility = "visible";
});

firstBox.addEventListener("mouseleave", () => {
    // Only hide if we aren't currently clicking/interacting
    if (firstBox.style.width !== "5rem") {
        siderBtn.style.visibility = "hidden";
    }
   
});

// 2. Toggle Logic
if (siderBtn && firstBox) {
    siderBtn.addEventListener("click", () => {
        if (isExpanded) {
            shrinkSidebar();
        } else {
            expandSidebar();
        }
        isExpanded = !isExpanded; // Flip the state
    });
}

function shrinkSidebar() {
    firstBox.style.width = "5rem";
    secondBox.style.width = "55rem";
    library.style.display = "none"; 
    full.style.display = "none"; 
    siderBtn.style.marginLeft = "2px"; // Fixed: camelCase
siderBtn.style.visibility = "visible"; 
pop.style.display ="none"
 listBtn.style.display  =  "  none"
}

function expandSidebar() {
    firstBox.style.width = "20rem";
    secondBox.style.width = "40rem";
    library.style.display = "block";
    full.style.display = "block";
    siderBtn.style.marginLeft = "1px"; // Fixed: camelCase
    siderBtn.style.visibility = "hidden";  
    pop.style.display= "block"; 
    listBtn.style.display  =  "block"
    
    
}
let isExpandeed = true; 

if (full && firstBox) {
    full.addEventListener("click", () => {
        if (isExpandeed) {
            shrinkSidebarr();
        } else {
            expandSidebarr();
        }
        isExpandeed = !isExpandeed; // Flip the state
    });
}


function shrinkSidebarr() {
firstBox.style.width = "80rem"
siderBtn.style.display = "none"
screen.style.marginLeft  =  "3.5rem";    
library.style.marginLeft  =  " 20rem"
secondBox.style.display ="none"
pop.style.marginLeft  =  "30rem";
msgalert.style.marginLeft = "53rem";
pop.style.borderRadius = "50px";
   pop.style.color =  "  white"
   pop.innerHTML =  " create " 
   pop.style.backgroundColor = "black";
   pop.style.borderRadius = "0.9em";
   pop.style.cursor = "pointer";
   pop.style.padding = "0.8em 1.2em 0.8em 1em";
   pop.style.transition = "all ease-in-out 0.2s";
   pop.style.fontSize = "16px";
   pop.style.height =  " 40px"
   library.style.width  = " 7rem"
   
  

 

}

function expandSidebarr() {
    firstBox.style.width = "20rem";
  secondBox.style.display ="block"
  siderBtn.style.display  =  " block" 
  screen.style.marginLeft  =  "1rem"; 
   library.style.marginLeft  =  "2rem"
 pop.style.marginLeft  =  "0.1rem"; 
 msgalert.style.marginLeft = "10rem";
pop.style.borderRadius = "none";
   pop.style.color =  "  white"
  pop.innerHTML = `
        <svg id="plussvg" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
            <path d="M440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z" />
        </svg>`;
   pop.style.backgroundColor = "transparent";
   pop.style.borderRadius = "none";
   pop.style.cursor = "pointer";
   pop.style.padding = "none";
   pop.style.transition = "none";
  
}


pop.addEventListener("click", () => {
  // Fixed the typo: msgalert.stye -> msgalert.style
  if (msgalert.style.display === "none" || msgalert.style.display === "") {
    msgalert.style.display = "block";
   
  } else {
    msgalert.style.display = "none";
     msgalert.style.width = "30rem"
  }
});




