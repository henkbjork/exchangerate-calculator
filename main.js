const currencyElementOne = document.getElementById('currency-one');
const currencyElementTwo = document.getElementById('currency-two');
const amountElementOne = document.getElementById('amount-one');
const amountElementTwo = document.getElementById('amount-two');

const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');

// Event listeners
currencyElementOne.addEventListener('change', calculate);
amountElementOne.addEventListener('input', calculate);
currencyElementTwo.addEventListener('change', calculate);
amountElementTwo.addEventListener('input', calculate);
swap.addEventListener('click', e => {
    const temp = currencyElementOne.value;
    currencyElementOne.value = currencyElementTwo.value;
    currencyElementTwo.value = temp;
    calculate();
});

// Fetch exchange rates and update the DOM
function calculate() {
    const currencyOne = currencyElementOne.value;
    const currencyTwo = currencyElementTwo.value;

fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then(respond => respond.json())
    .then(data => {
        const rate = data.rates[currencyTwo];
        rateElement.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

        amountElementTwo.value = (amountElementOne.value * rate).toFixed(2);
    });
}

calculate();






