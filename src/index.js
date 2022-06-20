import Logo from './logo.png'

function component() {
    const element = document.createElement('div')
    const myLogo = new Image();
    myLogo.src = Logo;
    element.appendChild(myLogo)
    const title = document.createElement('h2')
    title.textContent = 'Welcome to Globo Gym Restaurant'
    element.appendChild(title)
    const tagline = document.createElement('p')
    tagline.textContent = "Here at Globo Gym we're better than you, and we know it!"
    element.appendChild(tagline)
    const homeBtn = document.createElement('button')
    homeBtn.textContent = 'Home'
    element.appendChild(homeBtn)
    const menuBtn = document.createElement('button')
    menuBtn.textContent = 'Menu'
    element.appendChild(menuBtn)
    const contactBtn = document.createElement('button')
    contactBtn.textContent = 'Contact'
    element.appendChild(contactBtn)
    return element
}

const element = document.getElementById('content')
element.appendChild(component())

console.log('Hello')
console.log('Hi diddly ho neighbourino')