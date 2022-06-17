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
    return element
}

const element = document.getElementById('content')
element.appendChild(component())

console.log('Hello')
console.log('Hi diddly ho neighbourino')