import {getHero} from './model.js'

const heroImg = document.getElementById('char-img')
const heroName = document.getElementById('char-name')
const heroDescr = document.getElementById('char-publ')
const res = await getHero('spider-man')
heroImg.src = res[0].image.url
heroName.innerText = `${res[0].name} - ${res[0].biography["full-name"]}`
