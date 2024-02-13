import './style.css'

let summ = 0
let deg = 0
var isPaused = false;

//! Рандомное перемещение квадрата

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



// !Работа с коллекциями ! важно !


//! Выведем все дочерние элементы списка .books
// let booklist = document.querySelector('.books') as HTMLDivElement

// let liveBooks  = booklist.children

// liveBooks [0].remove()
// console.log(liveBooks.length);

//! Выведем коллекцию, содержащую все элементы с классом book
let notLiveBooks = document.querySelectorAll(`.book`) 

notLiveBooks[0].remove()
console.log(Array.from(notLiveBooks));


let crossAndZero = document.getElementById('crossAndZero') as HTMLDivElement
crossAndZero.addEventListener('click', ()=> {
  console.log(777);

})

 

// ! Крестики нолики
const symbols = document.querySelectorAll ('#symbols')  
const player1 = document.querySelector ('#player1')  as HTMLDivElement
const player2 = document.querySelector ('#player2')  as HTMLDivElement
const nobody = document.querySelector ('#nobody')  as HTMLDivElement

// const cross = document.querySelector ('#crossAndZero') as HTMLDivElement 
// console.log(cross.children);

const cross = document.querySelectorAll ('#crossAndZero') 
// for (let elem of cross) {
//   console.log(elem.children);
  
//   console.log(elem.children[6].innerHTML = 'X');
// }

 
// cross.forEach(item=>
//   item.addEventListener('click', ()=> {
//   for (let i = 0; i < cross.length; i++) {
//     console.log(symbols.keys);
    
    
//   }
// }))
























// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const cross = document.querySelector ('#crossAndZero')  as HTMLDivElement
// const player1 = document.querySelector ('#player1')  as HTMLDivElement
// const player2 = document.querySelector ('#player2')  as HTMLDivElement
// const nobody = document.querySelector ('#nobody')  as HTMLDivElement



//   //! переключение между 'X' и 'О'
//   let move = true
//   move = !move
//   const simbol = {
//     true: 'X',
//     false: 'O'
//   } as any
// console.log(move);
// console.log(simbol[String(move)])


// let score1 = 1
// let score2 = 1
// let score3 = 1
// let step = 0


// cross.addEventListener('click', (event)=>{
//   let num = cross.children

  
    

//     if (simbol[String(move)]=='X') {
//       simbol[String(move)]='O'
//       // console.log(1);
      
//     } else {
//       simbol[String(move)]='X'
//       // console.log(2);
//     }
   
//   let cell = event.target as HTMLDivElement
//   cell.innerHTML = simbol[String(move)]
//   cell.classList.add('lightGreen')
//   if (cell.innerHTML = simbol[String(move)]){
//     console.log(555);
//   }
//   if(cell.innerHTML=='X') {
//     // cell.style.pointerEvents = 'none'
    
//   }

//   if (num[0].innerHTML=='X' && num[1].innerHTML=='X' && num[2].innerHTML=='X' ||
//   num[3].innerHTML=='X' && num[4].innerHTML=='X' && num[5].innerHTML=='X' ||
//   num[6].innerHTML=='X' && num[7].innerHTML=='X' && num[8].innerHTML=='X' ||
//   num[0].innerHTML=='X' && num[3].innerHTML=='X' && num[6].innerHTML=='X' ||
//   num[1].innerHTML=='X' && num[4].innerHTML=='X' && num[7].innerHTML=='X' ||
//   num[2].innerHTML=='X' && num[5].innerHTML=='X' && num[8].innerHTML=='X' ||
//   num[0].innerHTML=='X' && num[4].innerHTML=='X' && num[8].innerHTML=='X' ||
//   num[2].innerHTML=='X' && num[4].innerHTML=='X' && num[6].innerHTML=='X'
//   ) {
//     setTimeout(() => {
//       alert('Поздравляем игрок 1 выиграл');
//       for (let i = 0; i < 9; i++) {
//         cross.children[i].innerHTML = ''        
//         cross.children[i].classList.remove('lightGreen')
//       }
//       player1.innerHTML = `${score1++}`
//     }, 100);
//   }
  
//   else if (num[0].innerHTML=='O' && num[1].innerHTML=='O' && num[2].innerHTML=='O' ||
//   num[3].innerHTML=='O' && num[4].innerHTML=='O' && num[5].innerHTML=='O' ||
//   num[6].innerHTML=='O' && num[7].innerHTML=='O' && num[8].innerHTML=='O' ||
//   num[0].innerHTML=='O' && num[3].innerHTML=='O' && num[6].innerHTML=='O' ||
//   num[1].innerHTML=='O' && num[4].innerHTML=='O' && num[7].innerHTML=='O' ||
//   num[2].innerHTML=='O' && num[5].innerHTML=='O' && num[8].innerHTML=='O' ||
//   num[0].innerHTML=='O' && num[4].innerHTML=='O' && num[8].innerHTML=='O' ||
//   num[2].innerHTML=='O' && num[4].innerHTML=='O' && num[6].innerHTML=='O'
//   ) {
//     setTimeout(() => {
//       alert('Поздравляем игрок 2 выиграл');
//       for (let i = 0; i < 9; i++) {
//         cross.children[i].innerHTML = ''
//         cross.children[i].classList.remove('lightGreen')
//       }
//       player2.innerHTML = `${score2++}`
//     }, 100);
//   }
//   else {
//     step++
//     setTimeout(() => {
//       if (step>=9) {
//         alert('Ничья');
//         for (let i = 0; i < 9; i++) {
//                 cross.children[i].innerHTML = ''
//                 cross.children[i].classList.remove('lightGreen')
//                 // document.location.reload()
//                 step==0
//               }
//               nobody.innerHTML = `${score3++}`
//       }

      
//     }, 100);
    
//   }
//   console.log(step);
  
//       })
       






//! Крестики нолики 2.0



const mainButton = document.querySelector('.mainButton') as HTMLDivElement
const changeDigital = document.querySelectorAll('.extraButton') 
const person1 = document.querySelector('#person1') as HTMLDivElement
const person2 = document.querySelector('#person2') as HTMLDivElement

let combo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


let stepps = 0 
let firstPlayer = 0
let secondPlayer = 0
let friendInfo = 0




for (let elem of changeDigital) {
  
  
  function check() {
    if (stepps%2==0) {
      elem.innerHTML = 'X'
      elem.classList.add('rotation')
      elem.classList.remove('rotation2')
    } else {
      elem.innerHTML = 'О'
      elem.classList.add('rotation')
      elem.classList.remove('rotation2')
    }
    stepps++
    if (stepps>=9) {
      stepps =0
      friendInfo++
      // return
    }
    
    letter.innerHTML = `${friendInfo}`
    elem.removeEventListener('click', check)
    
    for (let j = 0; j < combo.length; j++) {
      
      let num = changeDigital
      if(num[combo[j][0]].innerHTML=='X' && num[combo[j][1]].innerHTML=='X' && num[combo[j][2]].innerHTML=='X') {
        num[combo[j][0]].classList.add('winCombo')
        num[combo[j][1]].classList.add('winCombo')
        num[combo[j][2]].classList.add('winCombo')
        console.log(`игрок X выиграл`);
        firstPlayer++
        person1.innerHTML = `${firstPlayer}`
        mainButton.classList.add('pointer')
        return    
      }
      if(num[combo[j][0]].innerHTML=='О' && num[combo[j][1]].innerHTML=='О' && num[combo[j][2]].innerHTML=='О') {
        num[combo[j][0]].classList.add('winCombo')
        num[combo[j][1]].classList.add('winCombo')
        num[combo[j][2]].classList.add('winCombo')
        console.log(`игрок О выиграл`);
        secondPlayer++
        person2.innerHTML = `${secondPlayer}`
        mainButton.classList.add('pointer')
        return  
       }
   }
 

 
}


elem.addEventListener ('click', check)

const start = document.querySelector('#start') as HTMLDivElement
const letter = document.querySelector('#letter') as HTMLDivElement

start.addEventListener ('click', ()=> {
 
  stepps =0
  elem.addEventListener('click', check)
   for (let i = 0; i < changeDigital.length; i++) {
     changeDigital[i].innerHTML = ''
     elem.classList.remove('rotation')   
     elem.classList.add('rotation2')   
     mainButton.classList.remove('pointer')
     changeDigital[i].classList.remove('winCombo')
  }
})



}


 

















