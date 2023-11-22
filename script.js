const gridSize = document.querySelector('#gridSize');
let size = 16;
const gridContainer = document.querySelector('.gridContainer');
gridSize.addEventListener('mouseup', (event) => {
    size = event.target.value
    gridSize.nextElementSibling.textContent = `Grid size: ${size} x ${size}`;
    removeAllChildNodes(gridContainer);
    for (let i = 0; i < size*size; i++) {
        addCel();
    }
});

function addCel() {
    const cel = document.createElement('div');
    cel.setAttribute('style',`height: ${600/size}px; width: ${600/size}px; border: 1px solid black; margin: 0; padding: 0;`);
    gridContainer.appendChild(cel);
}

function removeAllChildNodes(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

