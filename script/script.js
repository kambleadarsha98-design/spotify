const  frisTbox = document.querySelector(".fristbox"); 

const   sider =   document.querySelector("#siderbtn");

frisTbox.addEventListener("mouseover",()=>{
 
    sider.style.visibility =   "visible";
    
    

});

frisTbox.addEventListener("mouseleave",() =>{
  
    sider.style.visibility =  "hidden";
});



const  siderbtn =  document.querySelector("#siderbtn"); 
const   secondbox =   document.querySelector(".secondbox"); 
const   thirdbox =   document.querySelector(".thirdbox");
const   library =  document.querySelector("#library");
const  full  =   document.querySelector(".full")
const  side =   document.querySelector(".side")
let  boxwidth  =   true ; 


if(siderbtn &&  frisTbox){
    siderbtn.addEventListener("click",()=>{
    if(boxwidth){
        fristfunction();
     }
     else{
        secondfunction();
     }

     boxwidth =  !boxwidth ;
    })
}


function fristfunction() {
     
    frisTbox.style.width  =  "10rem";
    secondbox.style.width  =   "60rem";
    library.style.display = "none"; 
    full.style.display  =  "none"; 
    siderbtn.style.marginleft   =  "50px"
    sider .style .visibility ="visible";

  
}

function secondfunction(){
    frisTbox.style.width =   "20rem";
    secondbox.style.width  =   "40rem"
    library.style.display = "block";
    full.style.display  =   "block";
    siderbtn.style.marginleft ="40px"
        
}