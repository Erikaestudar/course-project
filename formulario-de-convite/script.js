let radios = document.querySelectorAll('.radio-box input[type="radio"]');
let checkbox = document.getElementById('switch');
let label = document.querySelector('span #mode-label');

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    document.querySelectorAll('.radio-box').forEach(box => {
      box.classList.remove('selected');
    });
    radio.parentElement.classList.add('selected');
  });
});


window.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('switch');
  const label = document.getElementById('mode-label');

  checkbox.addEventListener('change', () => {
    label.textContent = checkbox.checked ? 'Claro' : 'Escuro';
  });
});