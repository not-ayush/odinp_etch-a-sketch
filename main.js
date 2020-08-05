const container = document.getElementById('container');
const resetBtn = document.getElementById('reset');
const clearGridBtn = document.getElementById('clear');
const randomClrBtn = document.getElementById('random');
const grayscaleBtn = document.getElementById('gray');
const defaultBtn = document.getElementById('default');

let sideSize = 16;
let gridTotalCells = sideSize ** 2;

function clearGrid() {
    let cellDivsArr = document.querySelectorAll('#container div')
    cellDivsArr.forEach((node) => {
        node.style.backgroundColor = "rgb(0,0,0,0)";
        node.style.opacity = "1";
        node.style = "";
    })
}

function makeGrid() {
    for (let i = 0; i <= gridTotalCells; i++) {
        let newDivCell = document.createElement('div');
        newDivCell.setAttribute('id', `${i}`);
        container.appendChild(newDivCell);
        newDivCell.addEventListener("mouseover", (e) => {
            if (newDivCell.style.backgroundColor == "black") return;
            else newDivCell.style.backgroundColor = "black";
        })
    }
    container.style.cssText = `display: grid; grid-template-columns: repeat(${sideSize}, 
        1fr); grid-template-rows: repeat(${sideSize}, 1fr);`;
}
makeGrid();

resetBtn.addEventListener('click', () => {
    container.innerHTML = "";
    sideSize = prompt("What size do you want it to be?");
    if (sideSize > 150) {
        sideSize = prompt("It will take forever, enter something lower than 150!");
    } else if (isNaN(sideSize)) sideSize = 16;
    gridTotalCells = sideSize ** 2;
    makeGrid();
})

clearGridBtn.addEventListener('click', () => {
    clearGrid();
})

defaultBtn.addEventListener('click', () => {
    container.innerHTML = "";
    makeGrid();
    let cellDivsArr = document.querySelectorAll('#container > div')
    cellDivsArr.forEach((node) => {
        node.addEventListener('mouseover', () => {
            if (node.style.backgroundColor == "black") {
                return;
            } else node.style.backgroundColor = "black";
        })
    })
})

randomClrBtn.addEventListener('click', () => {
    container.innerHTML = "";
    makeGrid();
    let cellDivsArr = document.querySelectorAll('#container > div')
    cellDivsArr.forEach((node) => {
        node.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            node.style.backgroundColor = `rgb(${r},${g},${b})`;
        })
    })
})

grayscaleBtn.addEventListener('click', () => {
    container.innerHTML = "";
    makeGrid();
    let cellDivsArr = document.querySelectorAll('#container > div');
    cellDivsArr.forEach((node) => {
        node.style.backgroundColor = "black";
        node.style.opacity = "0.0";
        node.addEventListener('mouseover', (e) => {
            let currentOpacity = e.target.style.opacity;
            node.style.opacity = Number(currentOpacity) + 0.1;
        })
    })
})



// My "plan":
/* Goal_1: create a 16x16 grid with divs using JS only.
    i. Let's try looping through a createElement 16x16 = 216 times to create 216 divs,
    these divs will be block by default ie they'll be added below each other.
    ii. TO make a grid with them I'll do:
        a. container display grid
        b. grid template-coloumn repaet(16, 1fr)
        c. grid template-row repaet(16, 1fr)
        This will be done by div.cssText.

Goal_2: hover effect to change color of cells
    i. add a mouseover eventlistener which changes cell.css.background-color to black.
    ii. then remove the event listener in the end so that color isn't changed on every mouse over. 
    So, I just ended up using conditionals to prevent unessecary execution because it was simpler this way.

Goal_3: reset grid size button
    i. Add an event listenr to button#reset which trigger a function.
    ii. That function should: 
        a. Remove 'hovered' class from all cells.
            - queryselect all the cells into an array.
            - then forEach classList.remove should work.
        b. prompt user for row size eg. 16.
        c. square that row size and store it in the gridTotalCells variable.
        d. then make the grid again.
    - I didn't recalculate gridTotalSize when reset button was clicked, 
    that led to only 256 divs being created, but it's fixed now.  */