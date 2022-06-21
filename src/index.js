import {onLoad} from './pageload.js'
import {componentHome} from './pageload.js'
import {componentMenu} from './pageload.js'
import {componentContact} from './pageload.js'

document.addEventListener("load", onLoad())

let homePage = document.getElementById('home')
homePage.addEventListener('click', componentHome)

let menuPage = document.getElementById('menu')
menuPage.addEventListener('click', componentMenu)

let contactPage = document.getElementById('contact')
contactPage.addEventListener('click', componentContact)