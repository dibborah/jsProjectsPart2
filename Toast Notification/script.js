const showToast = () => {
    const toastBox = document.querySelector('#toastBox');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = 'Success'
    toastBox.append(toastDiv);
};