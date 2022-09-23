const setPost= ()=>{
    const title= document.getElementById("title").value
    const pulished_date= document.getElementById("publishDate").value
    const thumbnail = document.getElementById("thumbnail").value
    const author=document.getElementById("author").value;
    const featured_image=document.getElementById("featuredImage").value;
    const body= document.getElementById("body").value;
    const content= $('#summernote').summernote('code');

    fetch("http://localhost:3000/posts",{
        method: "POST",
        body: JSON.stringify({
            title,
            pulished_date,
            thumbnail,
            author,
            featured_image,
            body,
            content

        }),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(resp=>{
        if(!resp.ok){
            resp.json().then(()=>{
                alert("Error Occur !")
            })
        }
        else if(resp.ok){
            alert("Data is sucessfully send")
        }
    } )
}
export default setPost;
