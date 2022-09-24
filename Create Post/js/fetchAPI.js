const getPost= ()=>{
    const title= document.getElementById("title").value
    const thumbnail = document.getElementById("thumbnail").value
    const author=document.getElementById("author").value;
    const featured_image=document.getElementById("featuredImage").value;
    const body= document.getElementById("body").value;
    const content= $('#summernote').summernote('code');
    const date= new Date();

    const formData= {
        title,
        published_date: date,
        thumbnail,
        author,
        featured_image,
        body,
        content
    }

  
    fetch("https://admin.nextjavascript.com/fake-api/posts",{
        method: "POST",
        body: JSON.stringify(formData),
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

                alert("Data sucessfully send");
                
            }
        } )

}

export default getPost;
