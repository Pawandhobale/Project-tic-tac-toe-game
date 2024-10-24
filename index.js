console.log("welcome to tic toc")

let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "x"
let isgameover = false;

//functon to change the turn 

const changeturn = () => {
    return turn === "x" ? "0" : "x"
}

//function to check for win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2, 6, 6, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],


    ]
    win.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
            // document.querySelector('.info').innerText = innerText + "won"
            isgameover = true
            document.querySelector(".line").style.width="20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }
    })

}


//main game logic
//music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn();
            audioTurn.play();
            checkwin();
            if (!isgameover) {

                document.querySelector('.info').innerText = "Turn for  " + turn;

            }

        }
    })
})

//add reset button

reset.addEventListener('click', () => {

    let boxtext = document.querySelectorAll('.boxtext')
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    });
    turn = 'x';
    isgameover = false
    document.querySelector(".line").style.width="0vw";
    if (!isgameover) {

        document.querySelector('.info').innerText = "Turn for  " + turn;

    }


})
