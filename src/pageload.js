import Logo from './logo.png'
import Shake from './shake.jpg'
import Balls from './balls.jpg'
import Salad from './salad.jpg'

export function onLoad(){
    const element = document.getElementById('content')
    function buttonsOnLoad() {
        const element = document.createElement('div')
        element.setAttribute('id', 'buttons')
        const homeBtn = document.createElement('button')
        homeBtn.textContent = 'Home'
        element.appendChild(homeBtn)
        homeBtn.setAttribute('id', 'home')
        const menuBtn = document.createElement('button')
        menuBtn.textContent = 'Menu'
        menuBtn.setAttribute('id', 'menu')
        element.appendChild(menuBtn)
        const contactBtn = document.createElement('button')
        contactBtn.textContent = 'Contact'
        contactBtn.setAttribute('id', 'contact')
        element.appendChild(contactBtn)
        return element
    }
    element.appendChild(buttonsOnLoad())
    function componentOnLoad() {
        const element = document.createElement('div')
        const myLogo = new Image();
        myLogo.src = Logo;
        element.setAttribute('id', 'element')
        element.appendChild(myLogo)
        const title = document.createElement('h2')
        title.textContent = 'Welcome to Globo Gym Restaurant'
        element.appendChild(title)
        const tagline = document.createElement('p')
        tagline.textContent = "Here at Globo Gym we're better than you, and we know it!"
        element.appendChild(tagline)
        return element
    }
    element.appendChild(componentOnLoad())
}

export function componentHome() {
    const content = document.getElementById('content')
    const element = document.getElementById('element')
    content.removeChild(element)
    const newElement = document.createElement('div')
    const myLogo = new Image();
    myLogo.src = Logo;
    newElement.setAttribute('id', 'element')
    newElement.appendChild(myLogo)
    const title = document.createElement('h2')
    title.textContent = 'Welcome to Globo Gym Restaurant'
    newElement.appendChild(title)
    const tagline = document.createElement('p')
    tagline.textContent = "Here at Globo Gym we're better than you, and we know it!"
    newElement.appendChild(tagline)
    content.appendChild(newElement)
}

export function componentMenu() {
    const content = document.getElementById('content')
    const element = document.getElementById('element')
    content.removeChild(element)
    const newElement = document.createElement('div')
    const myLogo = new Image();
    myLogo.src = Logo;
    newElement.setAttribute('id', 'element')
    newElement.appendChild(myLogo)
    const title = document.createElement('h2')
    title.textContent = 'Menu'
    newElement.appendChild(title)
    const menuItem = document.createElement('p')
    const menuItemPic = new Image();
    menuItemPic.src = Shake
    const menuItem1 = document.createElement('p')
    const menuItemPic1 = new Image();
    menuItemPic1.src = Balls
    const menuItem2 = document.createElement('p')
    const menuItemPic2 = new Image();
    menuItemPic2.src = Salad
    menuItem.textContent = 'Protein Shake........$12' 
    menuItem1.textContent = 'Energy Balls.......$16'
    menuItem2.textContent = 'Macro Salad.........$14'
    const menuEntry = document.createElement('div')
    const menuEntry1 = document.createElement('div')
    const menuEntry2 = document.createElement('div')
    menuEntry.setAttribute('id', 'menuEntry')
    menuEntry1.setAttribute('id', 'menuEntry1')
    menuEntry2.setAttribute('id', 'menuEntry2')
    menuEntry.appendChild(menuItem)
    menuEntry.appendChild(menuItemPic)
    menuEntry1.appendChild(menuItem1)
    menuEntry1.appendChild(menuItemPic1)
    menuEntry2.appendChild(menuItem2)
    menuEntry2.appendChild(menuItemPic2)
    newElement.appendChild(menuEntry)
    newElement.appendChild(menuEntry1)
    newElement.appendChild(menuEntry2)
    content.appendChild(newElement)
}

export function componentContact() {
    const content = document.getElementById('content')
    const element = document.getElementById('element')
    content.removeChild(element)
    const newElement = document.createElement('div')
    newElement.setAttribute('id', 'element')
    const myLogo = new Image();
    myLogo.src = Logo;
    newElement.appendChild(myLogo)
    const title = document.createElement('h2')
    title.textContent = 'Contact'
    newElement.appendChild(title)
    const address = document.createElement('p')
    const phoneNumber = document.createElement('p')
    address.textContent = "11124 Sunset Blvd. Los Angeles, CA"
    phoneNumber.textContent = '555-5555'
    newElement.appendChild(address)
    newElement.appendChild(phoneNumber)
    content.appendChild(newElement)
}


/*
Photo creds:
shake:
https://unsplash.com/photos/O_FTiCNJ1sE
https://unsplash.com/@nature_zen

balls:
https://unsplash.com/photos/e34KSdVAs1U
https://unsplash.com/@abbiew

salad:
https://unsplash.com/photos/IGfIGP5ONV0
https://unsplash.com/@annapelzer
*/