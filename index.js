const range = document.querySelector("input[type='range']");

range.addEventListener('input', (event) => {
    range.style.backgroundSize = range.value + "% 100%";
});
console.log(range);
