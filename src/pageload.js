import Logo from './logo.png'

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
    const menuItem1 = document.createElement('p')
    const menuItem2 = document.createElement('p')
    menuItem.textContent = 'Protein Shake........$12' 
    menuItem1.textContent = 'Energy Balls.......$16'
    menuItem2.textContent = 'Macro Salad.........$14'
    newElement.appendChild(menuItem)
    newElement.appendChild(menuItem1)
    newElement.appendChild(menuItem2)
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
    const tagline = document.createElement('p')
    tagline.textContent = "Contact page coming soon!"
    newElement.appendChild(tagline)
    content.appendChild(newElement)
}