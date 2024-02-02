import './style.css'

let summ = 0
var isPaused = false;
const square = document.querySelector('#square') as HTMLDivElement
square.addEventListener ('click', ()=> {
  // if (square.style.backgroundColor == 'blue') {
    //   square.style.backgroundColor = 'red'
    // } else {
      //   square.style.backgroundColor = 'blue'
      // }
      
      square.classList.toggle('blueColor')
      
      if(!isPaused){
    setInterval(()=>{
      // let x = (getComputedStyle(document.body).height)
      square.style.left = `${Math.round(Math.random()*100) + '%'}`
      square.style.top = `${Math.random()*100 + '%'}`
      square.innerHTML = `
      ${summ++} <br>
      ${square.style.marginLeft}
      `
       
      console.log(Math.round(Math.random()*100) );
      
      


    },500)
		isPaused = true;
	} else {
    isPaused = false;
	}
  
  
})

console.log(getComputedStyle(document.body).height)
console.log(getComputedStyle(document.body).width)


