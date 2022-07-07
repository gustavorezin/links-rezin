const inputContainer = document.querySelector('input')
const rootElement = document.documentElement

const lightTheme = {
    '--bg-color': '#d1daf3',
    '--text-color': '#00082f',
    '--bg-primary': '#364fc7',
    '--bg-secondary': '#4a6aed',
}

const darkTheme = {
    '--bg-color': '#00082f',
    '--text-color': '#d1daf3',
    '--bg-primary': '#4a6aed',
    '--bg-secondary': '#364fc7',
}

inputContainer.addEventListener('change', function() {
    const isChecked = inputContainer.checked
    isChecked ? changeTheme(darkTheme) : changeTheme(lightTheme)
})

function changeTheme(theme) {
    for (let prop in theme){
        changeProperty(prop, theme[prop])
    }

    /*
    for (let [property,value] of Object.entries(theme)){
        changeProperty(property, value)
    }
    */
}

function changeProperty(property, value) {
    rootElement.style.setProperty(property, value)
}