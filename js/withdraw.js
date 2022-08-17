document.getElementById("withdraw-btn").addEventListener("click", function () {
  // get the new withdraw amount from the input field
  const withdrawField = document.getElementById("withdraw-input");
  const newWithdrawAmount = parseFloat(withdrawField.value);

  // clear input field
  withdrawField.value = "";

  // check if the input is NaN
  if (isNaN(newWithdrawAmount)) {
    alert("enter a valid number");
    return;
  }

  // get the current withdraw total
  const withdrawElement = document.getElementById("withdraw-total");
  const currentWithdrawTotal = parseFloat(withdrawElement.innerText);

  // set the new total withdraw
  withdrawElement.innerText = currentWithdrawTotal + newWithdrawAmount;

  // get the current balance
  const totalBalanceElement = document.getElementById("balance-total");
  const currentTotalBalance = parseFloat(totalBalanceElement.innerText);

  // set the new balance
  totalBalanceElement.innerText = currentTotalBalance - newWithdrawAmount;
});
