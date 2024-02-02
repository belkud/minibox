import './style.css'

let summ = 0
let deg = 0
var isPaused = false;
const square = document.querySelector('#square') as HTMLDivElement
square.addEventListener ('click', ()=> {
  // if (square.style.backgroundColor == 'blue') {
    //   square.style.backgroundColor = 'red'
    // } else {
      //   square.style.backgroundColor = 'blue'
      // }
      
      // square.classList.toggle('blueColor')
      
      if(!isPaused){
        setInterval(()=>{
          square.style.left = `${Math.round(Math.random()*100) + '%'}`
          square.style.top = `${Math.random()*100 + '%'}`
          let x = deg++
          square.style.rotate = x*90+'deg'
          console.log(x);
          

          square.innerHTML = `
          ${summ++} <br>
          ${square.style.marginLeft}
          `
          
          let color = Math.round(Math.random()*255)
          let color2 = Math.round(Math.random()*255)
          let color3 = Math.round(Math.random()*255)
          
          square.style.transition = 1 +'s'
          square.style.backgroundColor = `rgb(${color}, ${color2}, ${color3})`
      
      


    },3000)
		isPaused = true;
	} else {
    isPaused = false;
	}
  
  
})

// console.log(getComputedStyle(document.body).height)
// console.log(getComputedStyle(document.body).width)


setInterval (()=>{
},1000)