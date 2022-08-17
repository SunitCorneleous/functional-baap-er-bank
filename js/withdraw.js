// get the withdraw button and add event listener
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-input");
  const currentWithdrawAmount = getElementValueById("withdraw-total");
  const currentBalanceAmount = getElementValueById("balance-total");

  if (isNaN(newWithdrawAmount)) {
    alert("enter a valid number");
    return;
  }

  // set deposit
  const newTotalWithdrawAmount = currentWithdrawAmount + newWithdrawAmount;
  setElementTextById("withdraw-total", newTotalWithdrawAmount);
  // set balance
  const newTotalBalanceAmount = currentBalanceAmount - newWithdrawAmount;
  setElementTextById("balance-total", newTotalBalanceAmount);
});
