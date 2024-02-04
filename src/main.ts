import './style.css'

let summ = 0
let deg = 0
var isPaused = false;

//! Рандомное перемещение

const square = document.querySelector('#square') as HTMLDivElement
square.addEventListener ('click', ()=> {
  
  if(!isPaused){
    setInterval(()=>{
          let color = Math.round(Math.random()*255)
          let color2 = Math.round(Math.random()*255)
          let color3 = Math.round(Math.random()*255)
          square.style.left = `${Math.round(Math.random()*90) + '%'}`
          square.style.top = `${Math.round(Math.random()*90) + '%'}`
          console.log(square.style.left);
          console.log(square.style.top);
          
          square.style.rotate = deg++*90+'deg'
          square.innerHTML = `${summ++}`
    
          square.style.transition = 2 +'s'
          square.style.background = `linear-gradient(rgb(${color}, ${color2}, ${color3}), rgb(${color2}, ${color3}, ${color}))`
          console.log(square.style.background);
          
        },3000)
        
        isPaused = true;
      } else {
        isPaused = false;
      }
    })
    
    // console.log(getComputedStyle(document.body).height)
  

    
    //! Перемещение с отскоком

const ball = document.querySelector('#ball') as HTMLDivElement
const line = document.querySelector('#line') as HTMLDivElement
let deg2 = 0
ball.addEventListener ('click', ()=> {
  ball.style.animation =  'jump 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) 2s alternate infinite'
  ball.style.rotate = 90 + 'deg'
  // ball.style.transition = 1 + 's'
  setInterval ( ()=>{
    let digital = Math.round(Math.random()*100) 
    deg2++
    ball.style.rotate = deg2*360 + 'deg'
    ball.style.left = digital + '%'
    line.style.left = digital + '%'
    console.log(ball.style.rotate);
    
  },4000)
}, {once:true})





let age = [10, 14, 20, 45, 23, 55, 28]
const list = document.querySelector('#list') as HTMLDivElement
// const columns = document.querySelectorAll <HTMLDivElement> ('#columns') 


let score = 0

//! через class
const recs = document.querySelectorAll  ('.rec') as NodeListOf<HTMLDivElement>

list.addEventListener('click', ()=> {
  for (let i = 0; i < age.length; i++) {
    recs[i].style.marginTop = -`${age[i]*2}` + 'px'
    recs[i].style.transition = 3 + 's'
    
    setInterval ( ()=> {
      score+=1      
      recs[i].innerHTML = `${Math.round(score/7)}`
        if (recs[i].innerHTML>=age[i]) {
          recs[i].innerHTML=age[i]
        } 
    }, 60)
  }
})
// `${age[i]}`
// ,{once:true}