const openmodal=document.querySelector(".open-model");
const contain=document.querySelector(".container2");
const closemodal=document.querySelector(".close-btn");

openmodal.addEventListener('click',function(){
    contain.classList.add('modal');
});

closemodal.addEventListener('click',function(){
    contain.classList.remove('modal');
})