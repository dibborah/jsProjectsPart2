
//   const scriptURL = '<SCRIPT URL>'
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzVyGbId2I2mCJv_KKW7_BIFTXjYzmiuD2oqPxtCnmnHoFpaJbNPLD56lz6TJ5ZXk8J/exec';
  const form = document.forms['submit-to-google-sheet']

  const msg = document.querySelector('#msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        // console.log('Success!', response);
        return response
    })
      .then((response) => {
        if(response.ok){
            msg.innerText = 'Thank You for subscribing!';
            setTimeout(() => {
                msg.innerText = '';
            }, 3000);
            // input.value = '';
            form.reset(); // This can be used in place of input.value = '';
        }
      })
      .catch(error => console.error('Error!', error.message))
  })


//   Thank You for subscribing!
