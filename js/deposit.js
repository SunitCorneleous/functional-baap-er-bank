document.getElementById("deposit-btn").addEventListener("click", function () {
  // get input from the deposit field
  const depositfield = document.getElementById("deposit-input");
  const newDepositAmount = parseFloat(depositfield.value);

  // clear input field
  depositfield.value = "";
  //   console.log(typeof newDepositAmount);
});
