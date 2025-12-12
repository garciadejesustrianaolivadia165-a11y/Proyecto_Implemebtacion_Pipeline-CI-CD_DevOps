document.getElementById('sendBtn').addEventListener('click', async () => {
  const name = document.getElementById('nameInput').value;
  const responseElement = document.getElementById('response');

  if (!name.trim()) {
    responseElement.innerText = '?? Por favor, escribe tu nombre';
    return;
  }

  try {
    responseElement.innerText = '? Cargando...';
    
    const response = await fetch(`http://localhost:3000/api/hello?name=${encodeURIComponent(name)}`);
    
    if (!response.ok) {
      throw new Error('Error en la petición');
    }
    
    const data = await response.json();
    responseElement.innerText = `? ${data.message}`;
  } catch (error) {
    responseElement.innerText = `? Error: ${error.message}`;
    console.error('Error:', error);
  }
});

document.getElementById('nameInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('sendBtn').click();
  }
});
