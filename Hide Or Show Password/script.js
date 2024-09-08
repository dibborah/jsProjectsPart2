const password = document.getElementById('password');
const eyeicon = document.getElementById('eyeicon');

eyeicon.onclick = () => {
    if (password.type === 'password') {
        password.type = 'text';
        eyeicon.classList.add('fa-eye');
        eyeicon.classList.remove('fa-eye-slash');
    } else {
        password.type = 'password';
        eyeicon.classList.add('fa-eye-slash');
        eyeicon.classList.remove('fa-eye');
    }
}