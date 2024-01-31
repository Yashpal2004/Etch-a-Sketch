
let size = 16




function setupGrid(s) {
    const grid = document.getElementById("grid")
    for (let i = 1; i <= s * s; i++) {
        const gridElement = document.createElement("div")
        gridElement.classList.add("grid-element")
        gridElement.addEventListener("mouseover", changeColor)

        grid.appendChild(gridElement)
    }

}

function changeColor(c) {
    
    c.target.style.backgroundColor = "#722b2b"
}


window.onload = () => {
    setupGrid(size)
}