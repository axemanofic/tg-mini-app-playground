// import './styles/style.sass'

const header = document.querySelector('h1')
const telegram = window.Telegram.WebApp

const user = telegram.initDataUnsafe?.user

if (user) {
  header.innerText = `Hi, ${user.first_name}!`
} else {
  header.innerText = 'Hi, Anonimous!'
}

