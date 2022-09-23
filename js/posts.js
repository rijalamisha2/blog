const getposts=()=>{
    fetch(" http://localhost:3000/posts?_sort=id&_order=desc")
    .then((resp)=>resp.json())
    .then((postData)=>{
        const [feature_post, ...rest_post]= postData;
        const {thumbnail,id, pulished_date,title, body} =feature_post;
        // document.querySelector(".feature-image").innerHTML= image_url;
        const featurePost= `
        <a href="../post/index.html?index-id=${id}"><img class="card-img-top feature-image" src="${thumbnail}" alt="${title}" /></a>
        <div class="card-body">
            <div class="small text-muted">${pulished_date}</div>
            <h2 class="card-title feature-title">${title}</h2>
            <p class="card-text feature-body">${body}</p>
            <a class="btn btn-primary" href="../post/index.html?index-id=${id}">Read more →</a>
        </div>
        `
        document.querySelector("#featurePost").innerHTML= featurePost;

        const restPost= rest_post.map((eachPost)=>{
            const {thumbnail, pulished_date,title,body} = eachPost;
            
           return `
            <div class="col-lg-6">
            <div class="card mb-4">
                <a href="#!"><img class="card-img-top" src="${thumbnail}"alt="..." width="700px", height="350px" /></a>
                <div class="card-body">
                    <div class="small text-muted">${pulished_date}</div>
                    <h2 class="card-title h4">${title}</h2>
                    <p class="card-text">${body}</p>
                    <a class="btn btn-primary" href="#!">Read more →</a>
                </div>
            </div>
            </div>
            `  
        });
        document.querySelector("#restPost").innerHTML=restPost.join("\n");



       
    })
}

export default getposts;