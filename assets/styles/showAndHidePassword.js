const eyeOn = document.querySelectorAll('.eye-on');
const eyeOff = document.querySelectorAll('.eye-off');
const inputPassword = document.querySelectorAll('#inputPassword');

eyeOn.addEventListener('click', () => {
    eyeOn.style.display = 'none'; 
    eyeOff.style.display = 'block';
    inputPassword.type = 'text';
});

eyeOff.addEventListener('click', () => {
    eyeOff.style.display = 'none';
    eyeOn.style.display = 'block';
    inputPassword.type = 'password';
})