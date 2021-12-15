
const color = ["green","red","rgba(133,122,200)","#f15025"];
const btn = document.querySelector("#btn")
const colors = document.querySelector(".color")

btn.addEventListener('click',function(){
   const random = getRandomNum();
   document.body.style.backgroundColor=color[random]
   colors.textContent=color[random]
})

function getRandomNum(){
    return Math.floor(Math.random()*color.length);
}