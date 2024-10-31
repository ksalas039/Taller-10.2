document.addEventListener('DOMContentLoaded', () => { 
    // Obtener el elemento donde mostraremos el dato
    const dataElement = document.querySelector('#data');
    
    // Obtener el dato del localStorage
    const savedData = localStorage.getItem('savedData');
    
    // Mostrar el dato en el elemento
    dataElement.textContent = savedData || 'No hay datos guardados';
});
