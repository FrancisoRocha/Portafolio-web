const formContac = document.querySelector('.formcontato__form');
const inputsName = document.querySelector('.nombre');
const inputEmail = document.querySelector('.email');
const inputsMensaje = document.querySelector('.mnsj');
const formText = document.querySelector('.formcontato__textarea');

formContac.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe antes de la validación

    let validation = true;

    if(inputsName.value.trim() === ''){
        inputsName.value = 'Por favor, ingresa tu nombre';
        inputsName.style.color = 'red';
        validation = false;
    }

    if(inputEmail.value.trim() === ''){
        inputEmail.value = 'Por favor, ingresa su email';
        inputEmail.style.color = 'red';
        validation = false;
    }

    if(inputsMensaje.value.trim() === ''){
        inputsMensaje.value = 'Por favor, ingresa un asunto';
        inputsMensaje.style.color = 'red';
        validation = false;
    }

    if(formText.value.trim() === ''){
        formText.value = 'Por favor, ingresa un mensaje';
        formText.style.color = 'red';
        validation = false;
    }

    if (!validation) {

    } else {
        console.log('El formulario se envió correctamente.');
        formContac.submit(); // Envía el formulario
    }
});
