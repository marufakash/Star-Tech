// For Monitor
const increment = document.getElementById("monitor-increment");
increment.addEventListener("click",() => {
    const inputCount = document.getElementById('inputValue');
    const inputValue = parseInt(inputCount.value);

    const  newValue = inputValue + 1;
    inputCount.value = newValue;

    const totalPrice = newValue * 627;
    document.getElementById("monitor-price").innerText = `$${totalPrice}`;
})