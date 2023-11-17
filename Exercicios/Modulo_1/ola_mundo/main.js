const myButton = document.querySelector('.btn-welcome');

myButton.addEventListener('click', function() {
  const newTextContainer = document.querySelector('.message_to_user');
  console.log('Welcome, User')

  newTextContainer.innerHTML = 'Welcome, user!'; 
  newTextContainer.appendChild(newText);
});
