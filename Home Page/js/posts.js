const getposts=()=>{
    fetch("https://admin.nextjavascript.com/fake-api/posts?_sort=id&_order=desc")
    .then((resp)=>resp.json())
    .then((postData)=>{
        const [feature_post, ...rest_post]= postData;
        const {featured_image,id, published_date,title, body} =feature_post;
        // document.querySelector(".feature-image").innerHTML= image_url;
    
        const featurePost= `
        <a href="../post/index.html?index-id=${id}"><img class="card-img-top feature-image" src="${featured_image}" alt="${title}" /></a>
        <div class="card-body">
            <div class="small text-muted">${published_date}</div>
            <h2 class="card-title feature-title">${title}</h2>
            <p class="card-text feature-body">${body}</p>
            <a class="btn btn-primary" href="../post/index.html?index-id=${id}">Read more →</a>
            <a class="btn btn-outline-danger delete-post"  data-id="${id}" href="#!">Delete Post</a>
        </div>
        `
        document.querySelector("#featurePost").innerHTML= featurePost;

        const restPost= rest_post.map((eachPost)=>{
            const {thumbnail,id, published_date,title,body} = eachPost;
            
           return `
            <div class="col-lg-6">
            <div class="card mb-4">
                <a href="#!"><img class="card-img-top" src="${thumbnail}"alt="..." width="700", height="350" /></a>
                <div class="card-body">
                    <div class="small text-muted">${published_date}</div>
                    <h2 class="card-title h4">${title}</h2>
                    <p class="card-text">${body}</p>
                    <a class="btn btn-primary" href="#!" >Read more →</a>
                    <a class="btn btn-outline-danger delete-post" data-id="${id}" href="#!">Delete Post</a>
                    
                </div>
            </div>
            </div>
            `  
        });
        document.querySelector("#restPost").innerHTML=restPost.join("\n"); 
         const deleteButton= document.querySelectorAll(".delete-post")
         deleteButton.forEach(el=>{
            el.addEventListener("click", ()=>{
                const postId= el.getAttribute("data-id");
                deletePost(`${postId}`)
                el.parentElement.parentElement.classList.add("d-none")
                
           
            })
         })
         const deletePost= (id)=>{
            fetch(`https://admin.nextjavascript.com/fake-api/posts/${id}`, {
                method:"DELETE"
    
            })
            
        }

    })
}

export default getposts;