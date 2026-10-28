const colorOptions = [
  'blue-light',
  'navy',
  'purple',
  'fuschia',
  'pink',
  'red',
  'orange',
  'yellow',
  'lime',
  'green',
  'cyran',
];

const themeOptions = [
  { id: 'bithday', title: 'Aniversário', alt: 'Tema de aniversário', image: 'image01.png' },
  { id: 'kids', title: 'Infantil', alt: 'Tema de festa Infantil', image: 'image02.png' },
  { id: 'graduation', title: 'Formatura', alt: 'Tema de Formatura', image: 'image03.png' },
  { id: 'marriage', title: 'Casamento', alt: 'Tema de Casamento', image: 'image04.png' },
  { id: 'baby-shower', title: 'Chá de bebê', alt: 'Tema de Chá de bebê', image: 'image05.png' },
  { id: 'bridal-shower', title: 'Chá de panela', alt: 'Tema de Chá de panela', image: 'image06.png' },
  { id: 'Carnival', title: 'Carnaval', alt: 'Tema de Carnaval', image: 'image07.png' },
  { id: 'Easter', title: 'Páscoa', alt: 'Tema de Páscoa', image: 'image08.png' },
  { id: 'June-festival', title: 'São João', alt: 'Tema de São João', image: 'image09.png' },
  { id: 'Halloween', title: 'Halloween', alt: 'Tema de Halloween', image: 'image10.png' },
  { id: 'Christmas', title: 'Natal', alt: 'Tema de Natal', image: 'image11.png' },
  { id: 'Others', title: 'Outro', alt: 'Tema de Outro', image: 'image12.png' },
];

const form = document.querySelector('form');
const requiredInputs = [...form.querySelectorAll('input[required]')];
const formStatus = document.getElementById('form-status');

colorOptions.forEach((id) => {
  const label = document.createElement('label');
  label.className = 'color';
  label.htmlFor = id;
  label.setAttribute('aria-label', id);

  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'colors';
  input.id = id;

  const circle = document.createElement('div');
  circle.className = 'circle';

  label.append(input, circle);
  document.getElementById('color-options').append(label);
});

themeOptions.forEach(({ id, title, alt, image }) => {
  const card = document.createElement('div');
  card.className = 'card';

  const label = document.createElement('label');
  const input = document.createElement('input');
  input.type = 'radio';
  input.name = 'themes';
  input.id = id;

  const imageElement = document.createElement('img');
  imageElement.src = `assets/themes/${image}`;
  imageElement.alt = alt;

  const titleElement = document.createElement('span');
  titleElement.textContent = title;

  label.append(input, imageElement, titleElement);
  card.append(label);
  document.getElementById('theme-options').append(card);
});

function validateInput(input) {
  const error = input.nextElementSibling;
  const message = error.querySelector('span');
  const isEmpty = input.value.trim() === '';
  const isValid = !isEmpty && input.validity.valid;

  input.classList.toggle('invalid', !isValid);
  error.style.display = isValid ? 'none' : 'flex';
  message.textContent = isEmpty ? 'Campo obrigatório' : 'Informe um e-mail válido';

  return isValid;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = '';

  const invalidInputs = requiredInputs.filter((input) => !validateInput(input));

  if (invalidInputs.length > 0) {
    invalidInputs[0].focus();
    return;
  }

  formStatus.textContent = 'Dados validados. A geração do convite ainda não está implementada.';
});

requiredInputs.forEach((input) => {
  input.addEventListener('input', () => {
    validateInput(input);
    formStatus.textContent = '';
  });
});

const checkbox = document.getElementById('switch');
const label = document.getElementById('mode-label');

checkbox.addEventListener('change', () => {
  label.textContent = checkbox.checked ? 'Claro' : 'Escuro';
});
