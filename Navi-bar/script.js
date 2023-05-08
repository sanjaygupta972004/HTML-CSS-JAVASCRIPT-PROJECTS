const humburger= document.querySelector(".humburger") 
const ul=document.querySelector("ul");

humburger.addEventListener('click',()=>{
    ul.classList.toggle("ham-active");

    let hum_child=humburger.firstElementChild;
    if(ul.classList.contains('ham-active')){
        hum_child.classList.replace('fa-bars','fa-xmark')
    }
else{
    hum_child.classList.replace('fa-xmark','fa-bars')
}
})

const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});