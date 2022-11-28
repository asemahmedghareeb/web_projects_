const grandparent=document.getElementById('grandparent')
const parent=Array.from( document.getElementsByClassName('parent'));
// changeColor(grandparent)
parent.forEach(element => {
    changeColor(element)
});


function changeColor(element){
    element.style.backgroundColor="#333";
}


