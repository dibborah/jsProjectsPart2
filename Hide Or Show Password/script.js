const password = document.getElementById('password');
const eyeicon = document.getElementById('eyeicon');

eyeicon.onclick = () => {
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
}