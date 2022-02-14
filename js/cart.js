// get using function method
function updateProductNumber(product, price, isIncrease){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if(isIncrease == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;

// update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate subtotal
    calculateTotal();
}

function getInputValue(product){
    const phoneInput = document.getElementById(product + '-number');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber
}
function calculateTotal(){  
    const phoneTotal =  getInputValue('phone') * 1219;
    const caseTotal =  getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax =  subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
// sub total update event handler
// document.getElementById('sub-total').addEventListener('click')

// increase decrease event handler for phone 

document.getElementById('phone-plus').addEventListener('click', function(){
    
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
})

// increase decrease event handler for case

document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
})