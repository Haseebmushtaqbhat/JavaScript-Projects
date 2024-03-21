let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");

choices.forEach((choice) => {
//    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
   console.log("choice was clicked",userchoice);

   playgame(userchoice);
    });
    
});
 
const gencompchoice=()=>{
    //  rock paper scissors
    let options=["rock","paper","scissors"];
   const randidx= Math.floor(Math.random()*3);
   return options[randidx];
}

const playgame=(userchoice)=>{
console.log("user choice= ",userchoice);
// generate computer choie -> modular 
const compchoice=gencompchoice();
console.log("comp choice= ",compchoice);
 

if(userchoice===compchoice){
    //    draw
    drawgame();
    
}
else{
    let userwin = true;
    if(userchoice==="rock"){
        //  scissor ,paper
        userwin=!(compchoice==="paper");
    }
    else if(userchoice==="paper"){
        //  scissor,rock
       userwin = !(compchoice==="scissors");
    }
    else{
        //  rock paper
        userwin=!(compchoice==="rock");
    }

    showwinner(userwin,userchoice,compchoice);
}
  
}

const drawgame=()=>{
    console.log("game was draw.");
    msg.innerText=" Game Draw!. play again ";
    msg.style.backgroundColor="#081b31";

}

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        console.log("you won!");
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You Win!, your ${userchoice } beats ${compchoice}` ;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose");
        msg.innerText=`You lose,${compchoice}  beats  your ${userchoice }  ` ;
        msg.style.backgroundColor="red";
    }
}
const msg=document.querySelector("#msg");