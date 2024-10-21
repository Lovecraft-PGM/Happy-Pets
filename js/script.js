const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('mail'); // Corrected to 'email' for clarity
const phoneNumberInput = document.getElementById('phoneNumber');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto
    if (nameInput.value === '' || lastnameInput.value === '' || emailInput.value === '' 
        || phoneNumberInput.value === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, completa todos los campos.'
        });
        return;
    }
    Swal.fire({
        icon: 'success',
        title: '¡Formulario enviado!',
        text: 'Tus datos han sido enviados correctamente.'
    });
})


