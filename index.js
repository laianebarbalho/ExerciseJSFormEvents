/*Primeira forma de capturar dados no evento submit */

//const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   console.log(username.value)
// });

/*Segunda forma de capturar value do username sem usar seletor no input#username */
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
  e.preventDefault();
  // validation
  const username = form.username.value;
  

  if(usernamePattern.test(username)) {
    //feedback good info
    feedback.textContent = 'That username is valid';
  } else {
    // feedback help info
    feedback.textContent = 'That username is not valid(only letters, between 6 & 12 characters!';
  }
});

// testing RegEx

// const username = '1441shaunaas456';
// const pattern = /^[a-z]{6,}$/;

// // let result = pattern.test(username);
// // if(result) {
// //   console.log('regex test passed')
// // } else {
// //   console.log('regex test failed')
// // }

// let result = username.search(pattern);
// console.log(result);

// live feedback

form.username.addEventListener('keyup', e => {
  console.log(e)
  // console.log(e.target.value);
  if(usernamePattern.test(e.target.value)) {
    form.username.setAttribute('class', 'success');
    
  } else {
    form.username.setAttribute('class', 'error');
  }
});