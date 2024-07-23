const boxes = document.querySelectorAll(`.Box`)
const resetBtn = document.querySelector(`.resetBtn`)
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

const checkWin = ()=>{
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;
        if (pos1Value != `` && pos2Value != `` && pos3Value != ``) {
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                console.log(`Winner` , pos1Value);
            }
        }
    }
}