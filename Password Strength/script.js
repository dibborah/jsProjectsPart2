const password = document.getElementById('password');
const message = document.getElementById('message');
const strength = document.getElementById('strength');

password.addEventListener('input', () => {
    if(password.value.length > 0){
        message.style.display = 'block'
        strength.innerText = 'Weak';
        strength.style.color = 'red';
    } else {
        message.style.display = 'none'
    }
    if(password.value.length >= 5) {
        strength.innerText = 'Medium';
        strength.style.color = 'orange';
    }
    if(password.value.length >= 8) {
        strength.innerText = 'Strong';
        strength.style.color = 'green';
    }
});