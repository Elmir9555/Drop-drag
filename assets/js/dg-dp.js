let dragElem = document.querySelector(".item")
let dropArea = document.getElementById("drop")

dragElem.ondragstart = (e) => {
    // e.dataTransfer.setData = ("id", e.target.id);
    id=e.target.id;
}

dropArea.ondragover = (e) => {
    e.preventDefault();
}

dropArea.ondrop = (e) => {
    // let id = e.dataTransfer.getData("id");
    e.target.append(document.getElementById(id))
 
}
