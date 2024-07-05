import './styles/style.sass'

const header = document.querySelector('h1')
const telegram = window.Telegram.WebApp


header.innerText = JSON.stringify(telegram)
