const currencyElmOne = document.getElementById('currency-one');
const currencyElmTwo = document.getElementById('currency-two');
const amountElmOne = document.getElementById('amount-one');
const amountElmTwo = document.getElementById('amount-two');
const rateElm = document.getElementById('rate');
const change = document.getElementById('switch');

// Fetch exchange rates and update the DOM
function calculate() {
   const currencyOne = currencyElmOne.value;
   const currencyTwo = currencyElmTwo.value;


  fetch(`https://v6.exchangerate-api.com/v6/2270477901f4c03426e294e3/latest/${currencyOne}`)
     .then((res) => res.json())
    .then((data) => {
         console.log(data);
       const rate = data.conversion_rates[currencyTwo];
      rateElm.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

      amountElmTwo.value = (amountElmOne.value * rate).toFixed(2);
     });
 }

// Event Listeners
currencyElmOne.addEventListener('change', calculate);
currencyElmTwo.addEventListener('change', calculate);
amountElmOne.addEventListener('input', calculate);
amountElmTwo.addEventListener('input', calculate);
change.addEventListener('click', () => {
  let presentValue = currencyElmOne.value;
  currencyElmOne.value = currencyElmTwo.value;
  currencyElmTwo.value = presentValue;
 calculate();
 });

 calculate();