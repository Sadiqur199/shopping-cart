function updatePhoneNumber(isIncrease)
{
  const phoneNumberField = document.getElementById('phone-number-field')
  const phoneNumberString = phoneNumberField.value;
  const priviousePhoneNumber = parseInt(phoneNumberString);

let newPhoneNumber;
if (isIncrease)
{
   newPhoneNumber = priviousePhoneNumber + 1;
}
else
{
  newPhoneNumber = priviousePhoneNumber - 1 ;
}

phoneNumberField.value = newPhoneNumber ;

 return newPhoneNumber ;
 
}
function updatePhoneTotalPrice(newPhoneNumber){
  const phoneTotalElement = document.getElementById('phone-total');
  const phoneTotalPrice = newPhoneNumber * 1300;
  phoneTotalElement.innerText = phoneTotalPrice;
  //console.log(phoneTotalPrice)
}

document.getElementById('btn-phone-plus').addEventListener('click',function(){
 const newPhoneNumber =  updatePhoneNumber(true);
 //updatePhoneNumber (newPhoneNumber);
 updatePhoneTotalPrice (newPhoneNumber);
claculteSubTotal();
});

document.getElementById('btn-phone-minus').addEventListener('click',function(){
 const newPhoneNumber =  updatePhoneNumber(false);
 //updatePhoneNumber (NewphoneNumber);
 updatePhoneTotalPrice (newPhoneNumber);
claculteSubTotal();
});