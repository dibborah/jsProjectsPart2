const showToast = (msg) => {
    const toastBox = document.querySelector('#toastBox');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.append(toast);
};