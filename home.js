const validPin = 1234;

// function to get input values
function getInputValueNumber(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber
}
function getInputValue (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}
// function to get innertext
function getInnerText(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)

    return elementValueNumber
}
// function to set innerText
function setInnerText(value){
    console.log(value)
    const availableBalanceElement = document.getElementById("available-balance")
    availableBalanceElement.innerText = value
}

// add-money features
document.getElementById("add-money-btn").addEventListener("click", function (e){
    e.preventDefault();
    const bank = getInputValue("bank");
    const accountNumber = document.getElementById("account-number").value;

    const amount = getInputValueNumber("add-amount");

    if(amount<=0){
        alert("invalid amount")
        return;
    }

    const pinNumber = getInputValueNumber("add-pin");
    const availableBalance = getInnerText("available-balance");

    if (accountNumber.length < 11) {
      alert("Invalid account Number");
      return;
    }

    if (pinNumber !== validPin) {
      alert("Invalid pin Number");
      return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    setInnerText(totalNewAvailableBalance);
   

});

// add money feature

// document
//   .getElementById("add-money-btn")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     const bank = document.getElementById("bank").value;
//     const accountNumber = document.getElementById("account-number").value;

//     const amount = parseInt(document.getElementById("add-amount").value);

//     const pinNumber = parseInt(document.getElementById("add-pin").value);

//     const availableBalance = parseInt(
//       document.getElementById("available-balance").innerText
//     );

//     if (accountNumber.length < 11) {
//       alert("Invalid account Number");
//       return;
//     }

//     if (pinNumber !== validPin) {
//       alert("Invalid pin Number");
//       return;
//     }

//     const totalNewAvailableBalance = amount + availableBalance;
//     document.getElementById("available-balance").innerText =
//       totalNewAvailableBalance;
//   });

//   cashout money feature

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const amount = getInputValueNumber("withdraw-amount");

  const availableBalance = getInnerText("available-balance");

  if(amount<=0 || amount>availableBalance){
        alert("invalid amount")
        return
    }
  const totalNewAvailableBalance = availableBalance - amount;

  console.log(totalNewAvailableBalance);

  setInnerText(totalNewAvailableBalance);

  });

//   cashout money feature

// document.getElementById("withdraw-btn").addEventListener("click", function (e) {
//   e.preventDefault();

//   const amount = parseInt(document.getElementById("withdraw-amount").value);

//   const availableBalance = parseInt(
//     document.getElementById("available-balance").innerText
//   );

//   const totalNewAvailableBalance = availableBalance - amount;

//   console.log(totalNewAvailableBalance);

//   document.getElementById("available-balance").innerText =
//     totalNewAvailableBalance;

//   if (amount > availableBalance) {
//   alert("Insufficient balance");
//   return;
// }

// });

  // toggling feature

  document.getElementById("add-button").addEventListener("click",function(e) {
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
  })
  document.getElementById("cash-out-button").addEventListener("click",function() {
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
  })

  
