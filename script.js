// For Monitor

const handleProductChange = (isChange, product) => {
    const inputCount = document.getElementById(product + "-value");
    const inputValue = parseInt(inputCount.value);

    let newValue = inputValue;

    if(isChange == true){
        newValue = inputValue + 1;
    }if(isChange == false && inputValue > 0){
        newValue = inputValue - 1;
    }
    inputCount.value = newValue;

    let totalPrice = 0;
    if(product == 'monitor'){
        totalPrice = newValue * 627;
    }if(product == 'mouse'){
        totalPrice = newValue * 99;
    }if(product == 'headphone'){
        totalPrice = newValue * 67;
    }

    document.getElementById(product + "-price").innerText = `$${totalPrice}`;
}