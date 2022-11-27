let title=document.getElementById('title');
let pirce=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total')
let count=document.getElementById('count');
let category=document.getElementById('category');
let submit=document.getElementById('submit');
let mode='create';
let searchMode="title";
let temp;
//get total
function getTotal(){
    if(pirce.value!=''){
        let result=(+pirce.value+ +taxes.value+ +ads.value)- +discount.value;
        total.innerHTML=result;
        total.style.background='#040';
    }
    else{
        total.innerHTML='';
        total.style.background='#a00d02';
    }
}

//create product

let proData=[];
//we do this because js will overwrite the object in the local storage
//so we bring the local storage  
if(localStorage.product!=null){
    proData=JSON.parse(localStorage.product)
}
else{
    proData=[]
}

submit.onclick=function(){
    let newpro={
        title:title.value.toLowerCase(),
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value.toLowerCase(),
    }
//save localstorage
    //count
    if(mode==='create'){

        if(newpro.count>=1){
            for(let i=0;i<newpro.count;i++)
            proData.push(newpro);
        }else{
            proData.push(newpro);
        }
    }else{
        proData[temp]=newpro;
        mood='create';
        submit.innerHTML="create";
        count.style.display="block";
    }

    localStorage.setItem('product',JSON.stringify(proData))
    clearData();
    showData();
}
//clear inputs
function clearData(){
    title.value="";
    price.value="";
    taxes.value="";
    discount.value="";
    ads.value="";
    total.innerHTML="";
    count.value=""
    category.value="";
}
//read
function showData(){
    let table=``;
    for(let i=0;i<proData.length;i++){
        table+=`
        <tr>
            <td>${i+1}</td>
            <td>${proData[i].title}</td>
            <td>${proData[i].price}</td>
            <td>${proData[i].taxes}</td>
            <td>${proData[i].ads}</td>
            <td>${proData[i].discount}</td>
            <td>${proData[i].total}</td>
            <td>${proData[i].category}</td>
            <td><button id="update" onclick="update(${i})">update</button></td>
            <td><button id="delete"  onclick="deleteData(${i})">delete</button></td>
        </tr>
        `
    }
    document.getElementById('tbody').innerHTML=table;
    let btnDelete=document.getElementById
    ('deleteAll');

    if(proData.length>0){
        btnDelete.innerHTML=`<button onclick="deleteAll()">delete All(${proData.length
        })</button>`
        console.log(proData.length);
    }else{
        btnDelete=innerHTML="";
    }

    getTotal();
}

showData();
//delete
function deleteData(i){
    proData.splice(i,1)
    localStorage.product=JSON.stringify(proData);
    showData();
}
//delete all
function deleteAll(){
    localStorage.clear();
    proData.splice(0);
    showData();
}
//update
function update(i){
    title.value=proData[i].title;
    price.value=proData[i].price;
    taxes.value=proData[i].taxes;
    ads.value=proData[i].ads;
    discount.value=proData[i].discount;
    category.value=proData[i].category;
    //this make total compute the sum when  we update
    getTotal();
    count.style.display="none";
    category.value=proData.category;
    submit.innerHTML='update';
    mode='update';
    temp=i;
    scroll({
        top:0,
        behavior:"smooth"
    })
        
}
//search
function getSearchMood(id){
    let search=document.getElementById("search");
    if(id=='SearchTitle'){
        searchMode='title';
        search.placeholder="searchByTitle";
    }else{
        searchMode='category';
        search.placeholder="searchByCategory";
    }
search.focus();
search.value="";
showData();
}
function search(value){
    let table="";
    if(searchMode=='title'){
        for(let i=0;i<proData.length;i++){
            if(proData[i].title.includes(value.toLowerCase())){
                table+=`
                <tr>
                    <td>${i}</td>
                    <td>${proData[i].title}</td>
                    <td>${proData[i].price}</td>
                    <td>${proData[i].taxes}</td>
                    <td>${proData[i].ads}</td>
                    <td>${proData[i].discount}</td>
                    <td>${proData[i].total}</td>
                    <td>${proData[i].category}</td>
                    <td><button id="update" onclick="update(${i})">update</button></td>
                    <td><button id="delete"  onclick="deleteData(${i})">delete</button></td>
                </tr>
                `
            }
        }
    }
    else{
        for(let i=0;i<proData.length;i++){
            if(proData[i].category.includes(value.toLowerCase())){
                table+=`
                <tr>
                    <td>${i}</td>
                    <td>${proData[i].title}</td>
                    <td>${proData[i].price}</td>
                    <td>${proData[i].taxes}</td>
                    <td>${proData[i].ads}</td>
                    <td>${proData[i].discount}</td>
                    <td>${proData[i].total}</td>
                    <td>${proData[i].category}</td>
                    <td><button id="update" onclick="update(${i})">update</button></td>
                    <td><button id="delete"  onclick="deleteData(${i})">delete</button></td>
                </tr>
                `
            }
        }
    }
    document.getElementById('tbody').innerHTML=table;
}
//clean data
