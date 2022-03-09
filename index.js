const range = document.querySelector("input[type='range']");
const costMonth = document.getElementById('month');
const check = document.getElementById('check');



range.addEventListener('input', (event) => {
    range.style.backgroundSize = range.value + "% 100%";
    
    if(check.checked) {
        let value = (16 / 50) * (range.value);
        let desc =  (value * 25) / 100;
        let finalCost = value - desc;
        costMonth.innerText = "$" + String((Math.round(finalCost*100)/100));
    }

    else {
        let value = (16 / 50) * (range.value);
        costMonth.innerText = "$" + String((Math.round(value*100)/100));
    }
});


check.addEventListener( 'click', (event) => {
    if(check.checked) {
        let value = (16 / 50) * (range.value);
        let desc =  (value * 25) / 100;
        let finalCost = value - desc;
        costMonth.innerText = "$" + String((Math.round(finalCost*100)/100));
    }

    else {
        let value = (16 / 50) * (range.value);
        costMonth.innerText = "$" + String((Math.round(value*100)/100));
    }
});