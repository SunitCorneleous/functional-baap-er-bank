document.getElementById("deposit-btn").addEventListener("click", function () {
  // get input from the deposit field
  const depositfield = document.getElementById("deposit-input");
  const newDepositAmount = parseFloat(depositfield.value);

  // clear input field
  depositfield.value = "";

  // check if the input is NaN
  if (isNaN(newDepositAmount)) {
    alert("enter a valid number");
    return;
  }

  // get the current total deposit
  const depositElement = document.getElementById("deposit-total");
  const currentTotalDeposit = parseFloat(depositElement.innerText);

  // set the total deposit
  depositElement.innerText = newDepositAmount + currentTotalDeposit;

  // get the current balance
  const totalBalanceElement = document.getElementById("balance-total");
  const currentTotalBalance = parseFloat(totalBalanceElement.innerText);

  // set new balance
  totalBalanceElement.innerText = currentTotalBalance + newDepositAmount;

  /* console.log(typeof currentTotalBalance);
  console.log(currentTotalBalance); */
});
