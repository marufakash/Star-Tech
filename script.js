const deleteBtn = document.querySelector(".fa-x");
deleteBtn.addEventListener("click",() =>{
    const container = document.querySelector(".container");
    container.style.display = 'none';
})

const handleProductChange = (isChange, product) => {
    const inputValue = getInputValue(product);

    let newValue = inputValue;

    if(isChange == true){
        newValue = inputValue + 1;
    }if(isChange == false && inputValue > 0){
        newValue = inputValue - 1;
    }
    document.getElementById(product + '-value').value = newValue;

    let totalPrice = 0;
    if(product == 'monitor'){
        totalPrice = newValue * 627;
    }if(product == 'mouse'){
        totalPrice = newValue * 99;
    }if(product == 'headphone'){
        totalPrice = newValue * 67;
    }

    document.getElementById(product + "-price").innerText = `$${totalPrice}`;
    
    calculateTotal();
}

const calculateTotal = () => {
    const monitorCount = getInputValue('monitor');
    const mouseCount = getInputValue('mouse');
    const headphoneCount = getInputValue('headphone');

    const totalPrice = (monitorCount * 627) + (mouseCount * 99) + (headphoneCount * 67);
    document.getElementById('sub-amount').innerText = `$${totalPrice}`;

    const tax = totalPrice * 0.1;
    document.getElementById("tax-amount").innerText = `$${tax}`;

    const totalAmount = totalPrice + tax;
    document.getElementById("total-amount").innerText = `$${totalAmount}`;
}

const getInputValue = (product) => {
    const productInput = document.getElementById(product + '-value');
    const productCount = parseInt(productInput.value);
    return productCount;
}