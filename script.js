const openNav=document.querySelector("#open-nav-bar")
const closeNav=document.querySelector("#close-nav-bar")
const nav=document.querySelector("header nav")
openNav.addEventListener("click",()=>{
    nav.classList.toggle("opened")
})
closeNav.addEventListener("click",()=>{
openNav.click()
})