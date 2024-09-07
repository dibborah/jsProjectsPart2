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
            initial_count += 5;
            counter.innerText = initial_count;
        }
        if(final_count >= 1000){
            initial_count += 50;
            counter.innerText = (initial_count/100).toFixed(2) + 'K+';
        };
        if(final_count >= 10000){
            initial_count += 100;
            counter.innerText = (initial_count/100).toFixed(2) + 'K+';
        };
        if(final_count >= 100000){
            initial_count += 1000;
        };
        if(final_count >= 1000000){
            initial_count += 5000;
            counter.innerText = (initial_count/1000000).toFixed(2) + 'M+';
        };
    } 
});

