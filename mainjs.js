

const lowerCountBtn = document.querySelector('[data-lower-count]');
const addCountBtn = document.querySelector('[data-add-count]');
const counterNumber = document.querySelector('[data-counter-number]');

let counter = 0;

lowerCountBtn.addEventListener('click', ()=>{
    counter--;
    counterNumber.textContent = counter;
    if(counterNumber.textContent < 0){
        counterNumber.style.color = 'rgba(235, 13, 13, 0.904)';
    }
    else if(counterNumber.textContent === '0')
        counterNumber.style.color = 'white';
    counterNumber.animate([
        {opacity: 0.4},
         {opacity: 1.0}], {
             duration: 1000,
             fill: 'forwards',
             delay: 10
         })
})

addCountBtn.addEventListener('click', ()=>{
    counter++;
    counterNumber.textContent = counter;
    if(counterNumber.textContent > 0){
        counterNumber.style.color = 'rgba(17, 80, 74, 0.93)';
    }
    else if(counterNumber.textContent === '0')
        counterNumber.style.color = 'white';
        counterNumber.animate([
            {opacity: 0.4},
             {opacity: 1.0}], {
                 duration: 1000,
                 fill: 'forwards',
                 delay: 10
             })
})

