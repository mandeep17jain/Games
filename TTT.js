const btn= document.getElementsByClassName("box");//accessing all required elements
const win=document.getElementById("win");
const reset=document.getElementById("reset");
const Newbtn =document.getElementById("New");


let Chance=true,count=0;//Chance variable to find whose turn(O or X)
let iswon=false;

//storing winning pattern indices in an 2D array
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

for(let i=0;i<9;i++)
{
    btn[i].addEventListener("click",()=>{  //eventListner for each button
        count++;//counts total button clicked

        if(Chance){
            btn[i].innerHTML="O";
            Chance=false;
        }
        else{
            btn[i].innerHTML="X";
            Chance=true;
        }
       btn[i].disabled=true;

       for(let j=0;j<8;j++)  //checking for winning condition
        {
            if(btn[winPattern[j][0]].innerHTML != "" && btn[winPattern[j][1]].innerHTML != "" && btn[winPattern[j][2]].innerHTML != "" )
                {
                    if(btn[winPattern[j][0]].innerHTML === btn[winPattern[j][1]].innerHTML && btn[winPattern[j][0]].innerHTML === btn[winPattern[j][2]].innerHTML)
                    {
                        iswon=true;
                        win.innerText=` Congratulations ${btn[winPattern[j][0]].innerHTML } is the Winner!!`;
                       
                        for(let bt of btn)//disable all buttons after win
                        {
                           bt.disabled=true;
                        }

                        btn[winPattern[j][0]].style.backgroundColor="red";//coloring the winning pattern box
                        btn[winPattern[j][1]].style.backgroundColor="red";
                        btn[winPattern[j][2]].style.backgroundColor="red";
                            
                        win.style.visibility="visible"; //winner shows on UI with Symbol and newGame Button
                        Newbtn.style.visibility="visible";
                        reset.style.visibility="hidden"; //reset button hides when newButton shows
                    }

                    //checking draw condition
                    if(count==9 && iswon==false){
                        win.style.visibility="visible";
                        win.innerText="Draw!";
                        Newbtn.style.visibility="visible";
                        reset.style.visibility="hidden";  

                    }
                }
        }   
    });
}

 //event listner for reset button
reset.addEventListener("click",()=>{
    for(let bt of btn)
    {
        Chance=true;
        count=0;
        iswon=false;
        bt.innerHTML="";
        bt.disabled=false;
        win.innerText="";
        bt.style.backgroundColor="#FFDAB3";
        Newbtn.style.visibility="hidden";
    }
})


 //event listner for newGame Button button
Newbtn.addEventListener("click",()=>{
    for(let bt of btn)
    {
        Chance=true;
        count=0;
        iswon=false;
        bt.innerHTML="";
        bt.disabled=false;
        win.innerText="";
        bt.style.backgroundColor="#FFDAB3";
        Newbtn.style.visibility="hidden";
        reset.style.visibility="visible";         
    }
})


