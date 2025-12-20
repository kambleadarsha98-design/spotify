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

// 1. Show/Hide toggle button on hover
firstBox.addEventListener("mouseover", () => {
    siderBtn.style.visibility = "visible";
});

firstBox.addEventListener("mouseleave", () => {
    // Only hide if we aren't currently clicking/interacting
    siderBtn.style.visibility = "hidden";
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
}

function expandSidebar() {
    firstBox.style.width = "20rem";
    secondBox.style.width = "40rem";
    library.style.display = "block";
    full.style.display = "block";
    siderBtn.style.marginLeft = "1px"; // Fixed: camelCase
    siderBtn.style.visibility = "hidden";  
    pop.style.display= "block"; 
    
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
screen.style.marginLeft  =  "20rem";    
library.style.marginLeft  =  " 20rem"
secondBox.style.display ="none"

}

function expandSidebarr() {
    firstBox.style.width = "20rem";
  secondBox.style.display ="block"
  siderBtn.style.display  =  " block" 
  screen.style.marginLeft  =  "1rem"; 
   library.style.marginLeft  =  "2rem"
    
}


pop.addEventListener("click", () => {
  // Fixed the typo: msgalert.stye -> msgalert.style
  if (msgalert.style.display === "none" || msgalert.style.display === "") {
    msgalert.style.display = "block";
  } else {
    msgalert.style.display = "none";
  }
});
