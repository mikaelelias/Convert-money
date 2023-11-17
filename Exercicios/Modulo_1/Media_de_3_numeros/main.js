const myButton = document.querySelector('.btn-welcome');

myButton.addEventListener('click', function () {
  let n1 = parseFloat(document.querySelector('.number_1').value);
  let n2 = parseFloat(document.querySelector('.number_2').value);
  let n3 = parseFloat(document.querySelector('.number_3').value);

  let calc = (n1 + n2 + n3) / 3;

  const newTextContainer = document.querySelector('.message_to_user');

  newTextContainer.innerHTML = 'A Média dos valores é: ' + calc.toFixed(1);
});
