const getsite=()=>{
    fetch("https://admin.nextjavascript.com/fake-api/site")
    .then((res)=> res.json())
    .then((siteData)=>{
        const {heading, sub_heading}= siteData;
        document.querySelector(".heading").textContent= heading;
        document.querySelector(".sub-heading").textContent= sub_heading;
    })
}
export default getsite;
