function upadateCaseNumber(isIncrease)
{
  const caseNumberFeild = document.getElementById('case-number-field');
  const caseNumberString = caseNumberFeild.value;
  const priviousCaseNumber = parseInt(caseNumberString);

let newCaseNumber ;
if(isIncrease === true)
{
  newCaseNumber = priviousCaseNumber + 1;
}
else{
  newCaseNumber = priviousCaseNumber - 1;
}
caseNumberFeild.value = newCaseNumber;
return newCaseNumber;
}


function updateCaseTotal(newCaseNumber)
{
  const caseTotalPrice = newCaseNumber * 60;
  const caseTotalElement = document.getElementById('case-total');
  caseTotalElement.innerText = caseTotalPrice;
 // console.log(caseTotalElement)
   return caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click',function(){
 const newCaseNumber = upadateCaseNumber(true);
 updateCaseTotal(newCaseNumber);
 claculteSubTotal();

});
document.getElementById('btn-case-minus').addEventListener('click',function(){
  const newCaseNumber = upadateCaseNumber(false);
  updateCaseTotal(newCaseNumber);
  claculteSubTotal();
});

