
const burgerBtn=document.querySelector('.burger__img')
const closeBtn=document.querySelector('.close__btn')
const list=document.querySelector('.list')


const plays=document.querySelectorAll('.play')



burgerBtn.addEventListener('click',function(){
    list.style.top=0;
})
closeBtn.addEventListener('click',function(){
   list.style.top="-216px";
})


plays.forEach(item=>{
    item.addEventListener('click',function(){
        item.style.display="none"
        item.previousElementSibling.play()
        item.previousElementSibling.controls=true
       
    }) 
    item.previousElementSibling.addEventListener('ended',function(){
            item.previousElementSibling.load()
            item.style.display="block"
            item.previousElementSibling.controls=false
        })
})