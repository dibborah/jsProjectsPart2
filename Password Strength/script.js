const password = document.getElementById('password');
const message = document.getElementById('message');
const strength = document.getElementById('strength');

password.addEventListener('input', () => {
    if(password.value.length > 0){
        message.style.display = 'block'
    } else {
        message.style.display = 'none'
    }
});