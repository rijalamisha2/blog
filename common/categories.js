
const categories= ()=>{
    fetch(" 
https://admin.nextjavascript.com/fake-api/categories")
    .then(resp=>resp.json())
    .then((categories)=>{
        const { name }=categories
        const eachCategories= categories.map(({name})=>{
            return `
            
            <div class="col-sm-6">
                <ul class="list-unstyled mb-0">
                    <li><a href="#!">${name}</a></li>                    
                </ul>
            </div>
           
            `
        }).join("\n")
        document.getElementById("categories").innerHTML= eachCategories;
    })
}
export default categories