const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkboxes);

function checkboxes() {
    const triggerButton = window.innerHeight /  5 * 4;
    // const triggerButton = window.innerHeight /  2;
    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerButton) {
            box.classList.add('show');
        }else {
            box.classList.remove('show');
        }
    })
}