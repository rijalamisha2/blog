import setPost from "./fetchAPI.js";
const form= ()=>{
    return document.getElementById("form")
}

form().onsubmit= (e)=>{
    e.preventDefault()
    setPost();
}
