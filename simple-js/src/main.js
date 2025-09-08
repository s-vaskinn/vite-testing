import './style.css'
import viteLogo from '/vite.svg'
import heart from '/heart.svg'
import javascriptLogo from './img/javascript.svg'
import likeButton from './img/like.svg'
import londonImg from './img/london.jpg'
import { setupCounter } from './counter.js'
import { average, randomUUID } from 'cool-math'  // to test if package is working

import '../assets/1.css'
import '../assets/2.css'
import colors from '../assets/3.module.css'

console.log('Colors: ', colors)

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${likeButton}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${heart}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${londonImg}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!!</h1>
    <p class=${colors.red}> This is colored by module css</p>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
console.log(import.meta.env)
console.log('Average of 2,3,4 is: ', average(2,3,4))
console.log('Random UUID: ', randomUUID())