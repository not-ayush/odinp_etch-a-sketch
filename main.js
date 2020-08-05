/* 
Goal_1: create a 16x16 grid with divs using JS only.
    i. Let's try looping through a createElement 16x16 = 216 times to create 216 divs,
    these divs will be block by default ie they'll be added below each other.
    ii. TO make a grid with them I'll do:
        a. container display grid
        b. grid template-coloumn repaet(16, 1fr)
        c. grid template-row repaet(16, 1fr)
        This will be done by div.cssText.
*/

const container = document.getElementById('container');

for (let i = 0; i <= 216; i++) {
    let newDivCell = document.createElement('div');
    newDivCell.setAttribute('id', `${i}`);
    container.appendChild(newDivCell);
}

container.style.cssText = "display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);";