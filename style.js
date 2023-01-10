const counter = document.querySelector('.counter');
const btnStart = document.getElementById('start');
const btnPause = document.getElementById('pause');

//! counter shows the last count after refreshing the page.
let value = 0;
const getData = localStorage.getItem('data')
if(value = getData) {
   counter.innerHTML = getData;
}

let intervalID = null;

btnStart.addEventListener('click', () => {
   intervalID = setInterval( () => {
      counter.innerHTML = value;
      value++

      window.localStorage.setItem('data', counter.innerHTML)
   }, 1000)

})

btnPause.addEventListener('click', () => {
   clearInterval(intervalID)
})







