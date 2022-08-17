// get the deposit button and add event listener
document.getElementById("deposit-btn").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-input");
  const currentDepositAmount = getElementValueById("deposit-total");
  const currentBalanceAmount = getElementValueById("balance-total");

  if (isNaN(newDepositAmount)) {
    alert("enter a valid number");
    return;
  }

  // set deposit
  const newTotalDepositAmount = currentDepositAmount + newDepositAmount;
  setElementTextById("deposit-total", newTotalDepositAmount);
  // set balance
  const newTotalBalanceAmount = currentBalanceAmount + newDepositAmount;
  setElementTextById("balance-total", newTotalBalanceAmount);
});
