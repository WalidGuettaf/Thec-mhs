const openNav=document.querySelector("#open-nav-bar")
const closeNav=document.querySelector("#close-nav-bar")
const nav=document.querySelector("header nav")
openNav.addEventListener("click",()=>{
    nav.classList.toggle("opened")
})
closeNav.addEventListener("click",()=>{
openNav.click()
})
//Api part (for messages)
const url="https://theccomments.onrender.com"
function sendMessage(){
const firstName=document.querySelector('#firstname').value
const familyName=document.querySelector('#familyname').value
const email=document.querySelector('#email').value
const message=document.querySelector('#message').value
const body={
    first_name:firstName ,
    family_name:familyName,
    email:email ,
    message:message
}
axios.post(`${url}/comment`,body)
.then((res)=>{
    console.log(res.status)
})
}