// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  // Hide results
  document.getElementById('results').style.display = 'none';

  // show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 800);

  e.preventDefault();
});

// Calculate Results
function calculateResults(){
  console.log('Calculating...');
  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

    monthlyPayment.value = numeral(monthlyPayment.value).format('$0,0.00');
    totalPayment.value = numeral(totalPayment.value).format('$0,0.00');
    totalInterest.value = numeral(totalInterest.value).format('$0,0.00');

    // show results
    document.getElementById('results').style.display = 'block';

    // hide loader
    document.getElementById('loading').style.display = 'none';

  } else {
    showError('Please check your numbers');
  }
}


// 500000
// 6
// 6


var string = numeral(1000).format('$0,0.00');
// '1,000'

console.log(string);

// Show error
function showError(error){

  // hide results
  document.getElementById('results').style.display = 'none';

  // hide loader
  document.getElementById('loading').style.display = 'none';

  // create div
  const errorDiv = document.createElement('div');

  // get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // add class
  errorDiv.className = 'alert alert-danger';

  // create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // insert error above heading
  card.insertBefore(errorDiv, heading);

  // clear error
  setTimeout(clearError, 3000);

  function clearError(){
    document.querySelector('.alert').remove();
  }
}