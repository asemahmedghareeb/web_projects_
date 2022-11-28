// const grandparent=document.getElementById('grandparent')
const grandparent=document.querySelector('.grandparent');
//--query selector select the first class if we have multible elements with the same class name
// const parent1=document.querySelector('.parent');
// const allparents=document.querySelectorAll('.parent');



function changeColor(element){
    element.style.backgroundColor="#333";
}


// const parent=Array.from( document.querySelector('.parent'));


//selecting the childern
/*
const children=grandparent.querySelectorAll(".child");

children.forEach(changeColor)

const parents=Array.from(grandparent.children);

*/




//selecting parents
/*
const childOne=document.querySelector(".child");
//---closest select the first parent  with the class or id which we choosed---//
const closeGarndParent=childOne.closest(".grandparent")
const parent=childOne.parentElement;
const chlidOneGrandparent=childOne.parentElement.parentElement;
changeColor(parent)
changeColor(closeGarndParent)
*/


//selecting sibling


const childOne=document.querySelector(".child");
const childTwo=childOne.nextElementSibling;
changeColor(childTwo)
changeColor(childTwo.previousElementSibling)












