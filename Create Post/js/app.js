import getPost from "./fetchAPI.js";
const form= ()=>{
    return document.getElementById("form")
}

form().onsubmit= (e)=>{
    e.preventDefault()
    getPost();
    // post();
    
}
// const post =(id)=>window.location.href=`../post/index.html?index-id=${id}`; 

