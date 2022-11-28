const grandparent=document.querySelector(".grandparent");
const parent=document.querySelector('.parent');
const child=document.querySelector(".child");

//event Bubbling and capturing///
//bubbling means that the event accure to the element and then to the parent of this element

//capuring is the opposite of bubbling the event accurs first to the parent of the element and to the element


//to make the event work one time we add the third prameter {once:true}

/*
grandparent.addEventListener('click',e=>{
    ////to stop bubbling and capturing /////
    e.stopPropagation();
    console.log("grandparent")
},{once:false})

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

*/



//removeing eventListener///

/*
parent.addEventListener("click",printI)

setTimeout(()=>{
    parent.removeEventListener('click',printI)
},5000)
function printI(){
    console.log("hi");
}
*/


//event delegation////
/*
const div=document.querySelectorAll("div")
div.forEach(div => {
    div.addEventListener('click',function(){
        console.log("hi")
    })
});
*/

/*
document.addEventListener("click",e=>{
    if(e.target.matches("div")){
        console.log("hi");
    }
})

*/
addGlobalEventListner("click","div",e=>{
    console.log("hi")
})
//this custome funcution take the type of event and the selected element and the function which do the action
function addGlobalEventListner(type,selector,callback){
    document.addEventListener(type,e=>{
        if(e.target.matches(selector))
            callback()
    })
}
//the problem here is that we add the event to the div but after this we add new div to the document so this div do not have the event .so we add new event lestener to the document elements that tage name matches (div)
const newDiv=document.createElement('div');
newDiv.style.width="200px";
newDiv.style.height="200px";
newDiv.style.background="orange";
document.body.append(newDiv)











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
