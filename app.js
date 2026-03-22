let gameSeq  = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
   if(started == false){
    console.log("game started");
    started=true;
    levelup();
   }

})
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },160);


}


function levelup(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    //random button choose;
    randomindx =Math.floor(Math.random()*4);
    let randcolor = btns[randomindx];
    gameSeq.push(randcolor);
    console.log(gameSeq);
    let randbtn = document.querySelector(`.${randcolor}`);
    btnflash(randbtn);

}
function checkans(ind){
    // console.log(`current level ${level}`)
    
    if(userSeq[ind]==gameSeq[ind]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup(),1000);
        }
    }else{
        h2.innerHTML = `Game over!! Your score was <b>${5*level}</b><br>press any key to play agaiinn`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();

    }
}
function btnpress(){
    let btn = this;
    userSeq.push(btn.getAttribute("id"));
    btnflash(btn);
    checkans(userSeq.length-1);
}
let allbtns =document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    let gameSeq  = [];
    let userSeq = [];
    level =0;
}