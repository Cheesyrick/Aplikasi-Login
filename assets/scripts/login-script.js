/** @module Login-Script */
/**
* Making a Variable for loginFormElement.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
* Making a Variable for inputEmailElement.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
* Making a Variable for inputPasswordElement.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* Making a Variable for expectedEmail to save the data of current email.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/**
* Making a Variable for expectedPassword to save the data of current password.
* @constant {string}
*/
const expectedPassword = 'superpassword';

/* Comment : adding click action for button */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /** 
  *  Making a email variable to save the email data when the button is pressed
  * @constant {string}
  */
  const email = inputEmailElement.value;\

  /** 
  *  Making a email variable to save the password data when the button is pressed
  * @constant {string}
  */
  const password = inputPasswordElement.value;
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});
