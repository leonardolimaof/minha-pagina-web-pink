document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita o envio do formulário
  
      // Exibe um alerta ao enviar o formulário
      alert('Formulário enviado com sucesso!');
    });
  });