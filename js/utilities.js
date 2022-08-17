function getInputFieldValueById(inputFieldId) {
  const inputFieldElement = document.getElementById(inputFieldId);
  const inputFieldValue = parseFloat(inputFieldElement.value);
  inputFieldElement.value = "";

  return inputFieldValue;
}

function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValue = parseFloat(element.innerText);

  return elementValue;
}

function setElementTextById(elementId, newValue) {
  const element = document.getElementById(elementId);
  element.innerText = newValue;
}
