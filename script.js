let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset")
let msgcont=document.querySelector(".msgcontainer")
let msg=document.querySelector("#msg")
let newbtn=document.querySelector("#newb")
let turnO =true;

const arr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const reset=() => {
    turnO=true;
    enableboxes();
    msgcont.classList.add("hide");
}
const enableboxes=() => {
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
}
const disablebtns=() => {
    for(let box of boxes){
        box.disabled=true;
    }
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box clicked");
        if (turnO) {
            box.innerText="O";
            turnO=false;
        }
        else {
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkwinner();
    })
})
const showwinner = (winner) => {
    msg.innerText=`Congratulations! Winner is ${winner} .` ;
    msgcont.classList.remove("hide");
}
const checkwinner = () => {
    for(let pos of arr){
        let pos1=boxes[pos[0]].innerText;
        let pos2=boxes[pos[1]].innerText;
        let pos3=boxes[pos[2]].innerText;
        if (pos1 != "" && pos2 !="" && pos3!=""){
            if (pos1===pos2 && pos2===pos3){
                console.log("winner", pos1);
                disablebtns();
                showwinner(pos1);
            }
        }
    }
}

newbtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);