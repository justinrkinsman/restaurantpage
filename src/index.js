import Logo from './logo.png'

function component() {
    const element = document.createElement('div')
    const myLogo = new Image();
    myLogo.src = Logo;
    element.appendChild(myLogo)
    return element
}

const element = document.getElementById('content')
element.appendChild(component())

console.log('Hello')
console.log('Hi diddly ho neighbourino')