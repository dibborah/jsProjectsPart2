const searchButton = document.querySelector('.btn');
const search = document.querySelector('.search');// Not putting . Dot

searchButton.addEventListener('click', () => {
    search.classList.toggle('active');
})