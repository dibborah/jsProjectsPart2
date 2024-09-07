const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    let initial_count = 0;
    const final_count = counter.dataset.count;
    
    const intervalId = setInterval(updateCounting, 1);

    function updateCounting() {
        if(initial_count > final_count ){
            clearInterval(intervalId);
        }
        if(final_count < 1000){
            counter.innerText = initial_count;
            initial_count += 5;
        }
        if(final_count >= 1000){
            initial_count += 100;
            counter.innerText = initial_count/100 + 'K+';

        };
    } 
});

