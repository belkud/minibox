import './style.css'

let summ = 0
let deg = 0
var isPaused = false;

//! Рандомное перемещение
let color = Math.round(Math.random()*255)
let color2 = Math.round(Math.random()*255)
let color3 = Math.round(Math.random()*255)
const square = document.querySelector('#square') as HTMLDivElement
square.addEventListener ('click', ()=> {

      if(!isPaused){
        setInterval(()=>{
          square.style.left = `${Math.round(Math.random()*100) + '%'}`
          square.style.top = `${Math.random()*100 + '%'}`
          console.log(square.style.left);
          console.log(square.style.top);
          
          let rotatesquare = deg++
          square.style.rotate = rotatesquare*90+'deg'
          square.innerHTML = `${summ++}`
    
          square.style.transition = 1 +'s'
          square.style.background = `linear-gradient(rgb(${color}, ${color2}, ${color3}), rgb(${color2}, ${color3}, ${color}))`
        },1000)
        
        isPaused = true;
      } else {
        isPaused = false;
      }
    })
    
    // console.log(getComputedStyle(document.body).height)
  
    
    //! Перемещение с отскоком
const ball = document.querySelector('#ball') as HTMLDivElement
const line = document.querySelector('#line') as HTMLDivElement
ball.addEventListener ('click', ()=> {
  setInterval ( ()=>{
    let digital = Math.round(Math.random()*100) 
    deg++
    ball.style.rotate = deg*65 + 'deg'
    ball.style.left = digital + '%'
    line.style.left = digital + '%'

    console.log(deg);
  },3000)


})



