let form = document.querySelector('form')
let inputs = form.querySelectorAll('input[required]')

form.addEventListener('submit', (e) => {
  let isValid = true;

  inputs.forEach(input => {
      let errorDiv = input.nextElementSibling; // pega a div .error
      if (!input.value.trim()) {
          input.classList.add('invalid'); 
          errorDiv.style.display = 'flex';
          isValid = false;
      } else {
          errorDiv.style.display = 'none';
          input.classList.remove('invalid');
      }
  });

  if (!isValid) {
      e.preventDefault(); // impede o envio do form se tiver erro
  }
});

window.addEventListener('DOMContentLoaded', () => {
  let checkbox = document.getElementById('switch');
  let label = document.getElementById('mode-label');

  checkbox.addEventListener('change', () => {
    label.textContent = checkbox.checked ? 'Claro' : 'Escuro';
  });
});

let radios = document.querySelectorAll('.radio-box input[type="radio"]');

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    document.querySelectorAll('.radio-box').forEach(box => {
      box.classList.remove('selected');
    });
    radio.parentElement.classList.add('selected');
  });
});

