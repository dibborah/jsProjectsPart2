const showToast = (msg) => {
    const toastBox = document.querySelector('#toastBox');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.append(toast);
    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }
};