let boxes = document. querySelectorAll("#box");
let resetBtn = document. querySelector("#reset");
let msgContainer = document. querySelector(".msg-container");
let msg = document. querySelector("p")
let newbtn = document. querySelector("#newbtn");
let turnO = true;
const WinPatterns = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer. classList. add("hide");
};
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};
    

const enableBoxes = () => {
    for(let box of boxes) {
        box. disabled = false;
        box. innerText = "";
    }
};
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
    if(turnO){
        box. innerText = "O";
        box. style. color = "#ffa96a";
        turnO = false;
    }else{
        box. innerText = "X";
        box. style. color = "white";
        turnO = true;
    }
    box.disabled = true;
    
    checkwinner ();
    });
});
const showWinner = (winner) => {
    msg.innerText = `Congratulations  winner  is  ${winner}`;
    msgContainer. classList. remove("hide");
    disableBoxes ();
};
const checkwinner = () => {
    for(let pattern of WinPatterns){
        let pos1val =
        boxes[pattern[0]].innerText;
        let pos2val =
        boxes[pattern[1]].innerText;
        let pos3val =
        boxes[pattern[2]].innerText;
        
        if(pos1val != "" && pos2val != "" && pos3val != "") {
           if(pos1val === pos2val && pos2val === pos3val){
               console. log ("winner",pos1val);
               showWinner(pos1val);
           }
        }
    }
};

resetBtn. addEventListener("click",resetGame);
newbtn. addEventListener("click",resetGame);
