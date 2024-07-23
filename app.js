const boxes = document.querySelectorAll(`.Box`)
const restartBtn = document.querySelector(`.restartBtn`)
const resetBtn = document.querySelector(`.resetBtn`)
const msgContainer = document.querySelector(`.msg-container`)
const msg = document.querySelector(`.msg`)
let turnX = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


boxes.forEach((box) =>{
    box.addEventListener(`click` , ()=>{
        if (turnX) {
            box.innerHTML = `X`;
            turnX = false;
        } else{
            box.innerHTML = `O`;
            turnX = true;
        }
        box.disabled = true;
        checkWin()
    })
})


// Checking who is winner

const checkWin = ()=>{
    for (let pattern of winPatterns) {
        
        // console.log(pattern[0], pattern[1], pattern[2]);
        
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;
        
        if (pos1Value != `` && pos2Value != `` && pos3Value != ``) {
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                
                // console.log(`Winner` , pos1Value);
                
                showWinner(pos1Value);
                return true;
            }
        }
    }
}

// Checking who is winner




// Disable  Boxes 

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

// Disable Boxes 




// Rendering Winner Of Game

const showWinner = (winner) =>{
    msg.innerHTML = `Congratulation Player${winner} Won The Game`
    msgContainer.classList.remove(`hidden`);
    disableBoxes();
}

// Rendering Winner Of Game


// If Game Draw rendering msg

const gameDraw = () =>{
    msg.innerHTML = `Game Draw`
    msgContainer.classList.remove(`hidden`);
    disableBoxes();
}

// If Game Draw rendering msg

// Enable boxes

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = ``
    }
}

// Enable boxes


// Play Again Button

const playAgain = ()=>{
    turnX = true;
    enableBoxes();
    msgContainer.classList.add(`hidden`)
}

restartBtn.addEventListener(`click` , ()=>{
    playAgain();
})
resetBtn.addEventListener(`click` , ()=>{
    playAgain();
})

// Play Again Button
