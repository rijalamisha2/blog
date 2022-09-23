import categories from "../../common/categories.js"

categories();

const url= new URLSearchParams(window.location.search)
const userId= url.get("index-id")
fetch(`https://admin.nextjavascript.com/fake-api/posts/${userId}`)
.then(resp=>resp.json())
.then((post)=>{
    const {title, author,pulished_date,categories = [],featured_image,content}= post;
    const HTML = `
    <header class="mb-4">
        <!-- Post title-->
        <h1 class="fw-bolder mb-1">${title}</h1>
        <!-- Post meta content-->
        <div class="text-muted fst-italic mb-2">Posted on ${pulished_date} by ${author}</div>
        <!-- Post categories-->

        ${categories.map(category=>(
        `<a class="badge bg-secondary text-decoration-none link-light text-capitalize" href="#!">${category}</a>`           
        )).join("\t")}
    </header>
    <!-- Preview image figure-->
    <figure class="mb-4">
        <img class="img-fluid rounded" src="${featured_image}" alt="${title}" height="400" width="950" />
    </figure>
    <!-- Post content-->
    <section class="mb-5">
    ${content}
    </section>
    `.trim()

   document.querySelector("#postReadmore article").innerHTML=HTML ;

})