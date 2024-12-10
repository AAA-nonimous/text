document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    // Esconde o conteúdo se estiver visível, caso contrário, mostra
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});





// Obtém todos os itens do acordeão
const accordionItems = document.querySelectorAll('.accordion-item');

// Para cada item do acordeão, adicione o evento de clique
accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');

  // Adiciona o evento de clique
  header.addEventListener('click', () => {
    // Alterna a classe 'active' para mostrar/esconder o conteúdo
    const content = item.querySelector('.accordion-content');

    // Verifica se o conteúdo já está visível
    if (content.style.maxHeight) {
      // Se estiver visível, esconde
      content.style.maxHeight = null;
      content.style.padding = '0 20px';
    } else {
      // Se não estiver visível, mostra
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.padding = '20px';
    }
  });
});



document.getElementById('role-form').addEventListener('submit', function (event) {
  const selectedOption = document.querySelector('input[name="role"]:checked');
  
  if (selectedOption && selectedOption.value === 'no') {
    event.preventDefault();
    alert('Não dá para marcar não!');
  } else if (selectedOption && selectedOption.value === 'yes') {
    alert('Eba! Vamos rolezar juntos!');
  }
});





