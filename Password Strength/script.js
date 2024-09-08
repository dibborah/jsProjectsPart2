const password = document.getElementById('password');
const message = document.getElementById('message');
const strength = document.getElementById('strength');

password.addEventListener('input', () => {
    if(password.value.length > 0){
        message.style.display = 'block'
        strength.innerText = 'weak';
        strength.style.color = 'red';
        password.style.borderColor = 'red';
    } else {
        message.style.display = 'none'
    }
    if(password.value.length >= 5) {
        strength.innerText = 'medium';
        strength.style.color = 'orange';
        password.style.borderColor = 'orange';
    }
    if(password.value.length >= 8) {
        strength.innerText = 'strong';
        strength.style.color = 'green';
        password.style.borderColor = 'green';
    }
});