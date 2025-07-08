document.addEventListener('DOMContentLoaded', () => {
  // Elementos del DOM
  const card = document.getElementById('card');
  const messageElement = document.getElementById('hiddenText');
  const colorBtn = document.getElementById('colorBtn');
  const messageBtn = document.getElementById('messageBtn');
  const resetBtn = document.getElementById('resetBtn');
  const newBtn = document.getElementById('newBtn');

  // Colores disponibles
  const colors = [
    '#3b82f6', // blue-500
    '#10b981', // emerald-500
    '#f59e0b', // amber-500
    '#ef4444', // red-500
    '#8b5cf6'  // violet-500
  ];

  // Estado inicial
  let currentColor = null;

  // Event Listeners
  colorBtn.addEventListener('click', changeColor);
  messageBtn.addEventListener('click', toggleMessage);
  resetBtn.addEventListener('click', resetCard);
  newBtn.addEventListener('click', newFunction);

  // Funciones
  function changeColor() {
    // Filtra para no repetir el mismo color
    const availableColors = colors.filter(color => color !== currentColor);
    const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
    
    card.style.backgroundColor = randomColor;
    currentColor = randomColor;
  }

  function toggleMessage() {
    messageElement.classList.toggle('hidden');
    messageElement.classList.toggle('visible');
    
    // Cambiar texto del botón dinámicamente
    if (messageElement.classList.contains('visible')) {
      messageBtn.textContent = 'Ocultar mensaje';
    } else {
      messageBtn.textContent = 'Mostrar mensaje';
    }
  }

  function resetCard() {
    // Restablecer color
    card.style.backgroundColor = '';
    currentColor = null;
    
    // Ocultar mensaje si está visible
    if (messageElement.classList.contains('visible')) {
      messageElement.classList.remove('visible');
      messageElement.classList.add('hidden');
      messageBtn.textContent = 'Mostrar mensaje';
    }
  }

  function newFunction() {
    const cardTitle = document.querySelector('.card__title');
    const originalText = cardTitle.textContent;
    
    cardTitle.textContent = '¡Nueva Función Activada!';
    cardTitle.style.color = 'var(--accent-color)';
    
    setTimeout(() => {
      cardTitle.textContent = originalText;
      cardTitle.style.color = '';
    }, 1500);
  }
});