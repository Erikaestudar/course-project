let radios = document.querySelectorAll('.radio-box input[type="radio"]');

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    document.querySelectorAll('.radio-box').forEach(box => {
      box.classList.remove('selected');
    });
    radio.parentElement.classList.add('selected');
  });
});
