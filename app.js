const inputMail = document.querySelector('.input-label input');
const labelMail = document.querySelector('.input-label label')


/* Input animation au focus page principale */

inputMail.addEventListener('focus', function(e) {
  e.target.parentNode.parentNode.classList.add('active-input')
})

inputMail.addEventListener('blur', function(e) {
  if(e.target.value === ""){
    e.target.parentNode.parentNode.classList.remove('active-input')
  }
  
})

labelMail.addEventListener('click', function(e) {
  e.target.parentNode.classList.add('active-input');
  inputMail.focus();
})

