const setButton = (buttonText) => {
  document.querySelector('body').innerHTML = `<button>${buttonText}</button>`
}

setButton('Submit');