
//   const scriptURL = '<SCRIPT URL>'
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzVyGbId2I2mCJv_KKW7_BIFTXjYzmiuD2oqPxtCnmnHoFpaJbNPLD56lz6TJ5ZXk8J/exec';
  const form = document.forms['submit-to-google-sheet']

  const input = document.querySelector('input');
  const span = document.querySelector('span');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log('Success!', response)
        return response
    })
      .then((response) => {
        if(response.ok){
            input.value = '';
            span.style.display = 'block';
        }
      })
      .catch(error => console.error('Error!', error.message))
  })

