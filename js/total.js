function getElementValueId(ElementId)
{
  const phoneTotalElement = document.getElementById(ElementId);
  const currentPhoneTotalString = phoneTotalElement.innerText;
  const currentPhoneTotal = parseInt(currentPhoneTotalString);
  return currentPhoneTotal;
}
function setTexElementValueById(ElementId,value)
{
  const subTotalElement = document.getElementById(ElementId);
  subTotalElement.innerText = value
}
function claculteSubTotal()
{
  const currentPhoneTotal = getElementValueId('phone-total');
  console.log(currentPhoneTotal);
  const currentCaseTotal = getElementValueId('case-total');
  const currentSubTotal = currentPhoneTotal + currentCaseTotal;
  setTexElementValueById ('sub-total',currentSubTotal);

  const taxAmountString = (currentSubTotal*0.3).toFixed(3);
  const taxAmount = parseFloat(taxAmountString);
  // 
  setTexElementValueById('tax-amount',taxAmount)
  const Total = currentSubTotal + taxAmount;
  setTexElementValueById ('final-total',Total);

}