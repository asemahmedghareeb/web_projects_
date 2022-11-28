const body=document.body;
// body.appendChild("hello world")
//append child and append do the same thing


const div=document.createElement('div');
body.append(div);
// div.innerHTML="new div";
// div.textContent="new div2";
// div.innerText="new div3";

const d=document.querySelector('#div');
//innertext and innerHtml print text with the indentations
console.log(d.textContent)
console.log(d.innerHTML)
//innerText print only what visible in the screen
console.log(d.innerText)





//modifying the html element
/*
// div.innerHTML="<strong>hello world</strong>"

//--inner html have securit issues so we can do the following--//
const strong=document.createElement("strong");
strong.innerText="hello world 2";
div.append(strong)

*/
const spanHi=document.querySelector('#hi')
const spanBye=document.querySelector('#bye')

// d.removeChild(spanHi);
// spanBye.remove();
// d.append(spanBye)

console.log(spanHi.getAttribute('title'));
//this do the same thing
console.log(spanHi.title);
spanHi.setAttribute('title','hello there');

//removing attribute
// spanHi.removeAttribute('title');


spanBye.toggleAttribute("title","bye")

//adding classes and removing classes
spanBye.classList.add('red')
spanBye.classList.remove('red');

spanBye.classList.toggle('red');
spanBye.classList.toggle('red',false);

spanHi.style.color="lightblue";
spanHi.style.backgroundColor="gray";