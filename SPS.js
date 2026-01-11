const stone=document.getElementById("stone");
const paper=document.getElementById("paper");
const scissor=document.getElementById("scissor");
const winStatus=document.getElementById("win-status")
const userScore=document.getElementById("user-score")
const compScore=document.getElementById("comp-score")
const reset=document.getElementById("btn")

let uScore=0,cScore=0,cChoice;
function computer()
{
    cChoice= Math.floor(Math.random() * 3);
    return cChoice;
}

function check(cChoice,userchoice){
    console.log(cChoice,userchoice);
    if( userchoice==cChoice)
   {
    winStatus.innerText="Draw!!";
   }
   else 
   {
    if(userchoice==0 && cChoice==1)
    {
        winStatus.innerText="You lost! paper beats stone";
        cScore++;
    }
    else if(userchoice==0 && cChoice==2)
    {
        winStatus.innerText="You Won! stone beats scissor";
        uScore++;
    }
    else if(userchoice==1 && cChoice==0)
    {
        winStatus.innerText="you Won! paper beats stone";
        uScore++;

    }
    else if(userchoice==1 && cChoice==2)
    {
        winStatus.innerText="You lost! scissor beats paper";
        cScore++;
    }
    else if(userchoice==2 && cChoice==0)
    {
        winStatus.innerText="You lost! stone beats scissor";
        cScore++;
    }
    else if(userchoice==2 && cChoice==1)
    {
        winStatus.innerText="You Won! scissor beats paper";
        uScore++;
    }
   }
  userScore.innerText=`${uScore}`;
  compScore.innerText=`${cScore}`;
}

stone.addEventListener("click",() => {
    cChoice = computer();
   check(cChoice,0);
})

paper.addEventListener("click",() => {
   cChoice = computer();
   check(cChoice,1);
})

scissor.addEventListener("click",() => {
   cChoice = computer();
   check(cChoice,2);
})

reset.addEventListener("click",()=>{
     userScore.innerText="0";
  compScore.innerText="0";
  uScore=0;
  cScore=0;
   winStatus.innerText="Play your move !";

})