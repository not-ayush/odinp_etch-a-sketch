/* 
Goal_1: create a 16x16 grid with divs using JS only.
    i. Let's try looping through a createElement 16x16 = 216 times to create 216 divs,
    these divs will be block by default ie they'll be added below each other.
    ii. TO make a grid with them I'll do:
        a. container display grid
        b. grid template-coloumn repaet(16, 1fr)
        c. grid template-row repaet(16, 1fr)
        This will be done by div.cssText.

Goal_2: hover effect to change color of cells
    i. add a mouseover eventlistener which changes cell.css.background-color to black.
    ii. then remove the event listener in the end so that color isn't changed on every mouse over. So, I just ended up using conditionals to prevent unessecary execution because it was simpler this way.
*/

const container = document.getElementById('container');

// Display 16 x 16 grid:
for (let i = 0; i <= 256; i++) {
    let newDivCell = document.createElement('div');
    newDivCell.setAttribute('id', `${i}`);
    container.appendChild(newDivCell);
    // add hovered class if not added already, which changes bgc to black:
    newDivCell.addEventListener("mouseover", (e) => {
        if ((e.target.classList)[0] == 'hovered') {
            return;
        } else {
            newDivCell.classList.add("hovered");
        }
    })
}
container.style.cssText = "display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);";