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
          square.innerHTML = `${summ++} steps`
    
          square.style.transition = 2 +'s'
          square.style.background = `linear-gradient(rgb(${color}, ${color2}, ${color3}), rgb(${color2}, ${color3}, ${color}))`
          console.log(square.style.background);
          
        },3000)
        
        isPaused = true;
      } else {
        isPaused = false;
      }
    })
     
  

    
    //! Перемещение с отскоком

const ball = document.querySelector('#ball') as HTMLDivElement
const line = document.querySelector('#line') as HTMLDivElement
const info = document.querySelector('#info') as HTMLDivElement
const info2 = document.querySelector('#info2') as HTMLDivElement
let deg2 = 0
let sec = 0

ball.addEventListener ('click', ()=> {
  ball.style.animation =  'jump 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) 2s alternate infinite'
  info.style.animation =  'jump 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) 2s alternate infinite'
  info2.style.animation =  'jump 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) 2s alternate infinite'
  // ball.style.rotate = 110 + 'deg'

  setInterval ( ()=>{
    let digital = Math.round(Math.random()*100) 
    deg2++
   
    ball.style.rotate = deg2*360 + 'deg'
    ball.style.left = digital + '%'
    line.style.left = digital + '%'
    info.style.left = digital + '%'
    info2.style.left = digital + '%'
    info.innerHTML = `
    количество:
    оборотов: ${deg2}
    `   
  },4000)

  setTimeout (()=> {
    setInterval ( ()=> {
      sec++
      info2.innerHTML = `
      отскоков: ${sec} 
      `
    },2000)
  },1000)
}, {once:true})







//! графики

const button = document.querySelector('#button') as HTMLDivElement
let age = [10, 14, 20, 45, 23, 55, 28]
let score = 0

//! через class
const recs = document.querySelectorAll  ('.rec') as NodeListOf<HTMLDivElement>

button.addEventListener('click', ()=> {
  button.classList.toggle('zero')
  for (let i = 0; i < age.length; i++) {
    recs[i].style.marginTop = -`${age[i]*3}` + 'px'
    recs[i].style.transition = 3.5 + 's'
    
    setInterval ( ()=> {
      score+=1      
      recs[i].innerHTML = `${Math.round(score/7)}`
        if (recs[i].innerHTML>=age[i]) {
          recs[i].innerHTML=age[i]
        } 
    }, 60)
  }
})


//! через id
const button2 = document.querySelector('#button2') as HTMLDivElement
const columns2 = document.querySelectorAll('#columns2') as NodeListOf<HTMLDivElement>
button2.addEventListener ('click', ()=> {
  columns2.forEach(columns2 => {
    columns2.style.color = 'red'

    columns2.style.marginTop = 100+ 'px'
    for (let i = 0; i < age.length; i++) {
      // const element = array[i];
      columns2.style.transition = 1 + 's'
      
    }

  });
  button2.childNodes
  console.log(button2.childNodes );
  
})




//! Крестики нолики
const cross = document.querySelector ('#cross')  as HTMLDivElement
const player1 = document.querySelector ('#player1')  as HTMLDivElement
const player2 = document.querySelector ('#player2')  as HTMLDivElement
const nobody = document.querySelector ('#nobody')  as HTMLDivElement
                                                    // NodeListOf<HTMLDivElement>



  let score1 = 1
  let score2 = 1
  let score3 = 1
cross.addEventListener('click', (event)=>{
  let cell = event.target as HTMLDivElement
  cell.classList.add('lightGreen')
  if (cell.innerHTML  =='X') {
      cell.innerHTML  ='O'
    } else {
        cell.innerHTML  ='X'
    }

  let num = cross.children
    if (num[0].innerHTML=='X' && num[1].innerHTML=='X' && num[2].innerHTML=='X' ||
        num[3].innerHTML=='X' && num[4].innerHTML=='X' && num[5].innerHTML=='X' ||
        num[6].innerHTML=='X' && num[7].innerHTML=='X' && num[8].innerHTML=='X' ||
        num[0].innerHTML=='X' && num[3].innerHTML=='X' && num[6].innerHTML=='X' ||
        num[1].innerHTML=='X' && num[4].innerHTML=='X' && num[7].innerHTML=='X' ||
        num[2].innerHTML=='X' && num[5].innerHTML=='X' && num[8].innerHTML=='X' ||
        num[0].innerHTML=='X' && num[4].innerHTML=='X' && num[8].innerHTML=='X' ||
        num[2].innerHTML=='X' && num[4].innerHTML=='X' && num[6].innerHTML=='X'
        ) {
          setTimeout(() => {
            alert('Поздравляем игрок 1 выиграл');
            for (let i = 0; i < 9; i++) {
              cross.children[i].innerHTML = ''
              cross.children[i].classList.remove('lightGreen')
            }
            player1.innerHTML = `${score1++}`
          }, 100);
        }

    else if (num[0].innerHTML=='O' && num[1].innerHTML=='O' && num[2].innerHTML=='O' ||
        num[3].innerHTML=='O' && num[4].innerHTML=='O' && num[5].innerHTML=='O' ||
        num[6].innerHTML=='O' && num[7].innerHTML=='O' && num[8].innerHTML=='O' ||
        num[0].innerHTML=='O' && num[3].innerHTML=='O' && num[6].innerHTML=='O' ||
        num[1].innerHTML=='O' && num[4].innerHTML=='O' && num[7].innerHTML=='O' ||
        num[2].innerHTML=='O' && num[5].innerHTML=='O' && num[8].innerHTML=='O' ||
        num[0].innerHTML=='O' && num[4].innerHTML=='O' && num[8].innerHTML=='O' ||
        num[2].innerHTML=='O' && num[4].innerHTML=='O' && num[6].innerHTML=='O'
        ) {
          setTimeout(() => {
            alert('Поздравляем игрок 2 выиграл');
            for (let i = 0; i < 9; i++) {
              cross.children[i].innerHTML = ''
              cross.children[i].classList.remove('lightGreen')
            }
            player2.innerHTML = `${score2++}`
          }, 100);
        }
        else {
          setTimeout(() => {
            for (let i = 0; i < 9; i++) {
              cross.children[i].innerHTML != ''
              // cross.children[i].classList.remove('lightGreen')
            }
            // alert('Ничья');
              
            nobody.innerHTML = `${score3++}`
        }, 100);
        
      }
      
      
    })

 

 