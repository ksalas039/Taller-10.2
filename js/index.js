const input = document.getElementById("inputText"); 
const button = document.getElementById("buttonText");

button.onclick = () => {
    // Guardar el valor del input en localStorage
    localStorage.setItem('savedData', input.value);
    // Limpiar el input después de guardar
    input.value = '';
};
