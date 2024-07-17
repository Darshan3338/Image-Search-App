const accesskey="KOOqXEY_ZuS1fWCDCKQZyaKVS-MrHGGJ5D9B98dvNZA"
const formEl=document.querySelector("form")
const search_input=document.getElementById("text-input")
const search_results=document.querySelector(".search-results")
const showmore=document.getElementById("show-more")

let page=1;
let inputstore="";

async function searchfun()
{
    // debugger;
    inputstore=search_input.value
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputstore}&client_id=${accesskey}`
    console.log(url)
    const response=await fetch(url)
    const data=await response.json()
    console.log(data)
    if(page===1)
        {
            // debugger;
            search_results.innerHTML="";
            
        }
    const results=data.results
    console.log(results)
    results.map((result)=>{
        debugger;
        const imagewrapper=document.createElement("div")
        imagewrapper.classList.add("search-result")
        
        const image=document.createElement("img")
        image.src=result.urls.small
        image.alt=result.alt_description
        
        const imageLink=document.createElement("a")
        imageLink.href=result.links.html
        imageLink.target="_blank"
        imageLink.textContent=result.alt_description

        imagewrapper.appendChild(image)
        imagewrapper.appendChild(imageLink)
        search_results.appendChild(imagewrapper)
        console.log(result)
    })
  
    page++
    if(page>1)
        {
            showmore.style.display="block"
        }

}
formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=1
    
    searchfun()
})

showmore.addEventListener("click",()=>{
    searchfun()
})