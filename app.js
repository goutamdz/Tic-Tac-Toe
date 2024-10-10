let boxes=document.querySelectorAll('.box');
let turnX=true;
let message=document.getElementById('message');
let reset=document.querySelector('.reset');




let winners=[
    [0,1,2],
    [0,3,6],
    [6,7,8],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [3,4,5],
    [1,4,7]
]

let disableBtn=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}

let resetBtn=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerHTML='';
    })
}

reset.addEventListener('click',resetBtn);

let checkWinner=()=>{
    winners.forEach((winner)=>{
        let pos1Val=boxes[winner[0]].innerHTML;
        let pos2Val=boxes[winner[1]].innerHTML;
        let pos3Val=boxes[winner[2]].innerHTML;
        if(pos1Val!=='' && pos2Val!=='' && pos2Val!==''){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                disableBtn();
                message.innerHTML=`winner is ${pos1Val}`;
            }
        }
    })
}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnX){
            box.innerHTML='X';
            turnX=false;
        }
        else{
            box.innerHTML='O';
            turnX=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

