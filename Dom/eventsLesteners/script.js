const grandparent=document.querySelector(".grandparent");
const parent=document.querySelector('.parent');
const child=document.querySelector(".child");

// function ev(){
//     grandparent.style.background="orange";
// }
// grandparent.addEventListener('click',ev)



//event Bubbling and capturing
grandparent.addEventListener('click',e=>{
    e.stopPropagation();
    console.log("grandparent")
},{capture:false})

parent.addEventListener('click',e=>{
    e.stopPropagation();
    console.log("parent")
},{capture:false})


child.addEventListener('click',e=>{
    e.stopPropagation();
    console.log("child")
},{capture:false})

document.addEventListener('click',e=>{
    e.stopPropagation();
    console.log("document")
},{capture:false})

/*
grandparent.addEventListener('click',e=>{
    console.log("grandparent capture")
},{capture:true})

grandparent.addEventListener('click',e=>{
    console.log("grandparent Bubbling")
})



parent.addEventListener('click',e=>{
    // e.stopPropagation()
    console.log("parent capture")
},{capture:true})

parent.addEventListener('click',e=>{
    e.stopPropagation()
    console.log("parent Bubbling")
})



child.addEventListener('click',e=>{
    console.log("child capture")
},{capture:true})
child.addEventListener('click',e=>{
    console.log("child bubbling")
})


document.addEventListener('click',e=>{
    console.log("document capture")
},{capture:true})

document.addEventListener('click',e=>{
    console.log("document Bubbling")
})
*/
