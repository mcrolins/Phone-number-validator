const checkBtn = document.getElementById("check-btn");

const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const regex = /^1?\s*(?:\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

function validateNumber() {

  const phoneNumber = document.getElementById("user-input").value;

  if(phoneNumber.match(regex)){
    results.innerText = `Valid US number: ${phoneNumber}`;

  }else{
    results.innerText = `Invalid US number: ${phoneNumber}`
  }
}

function isEmpty() {
  const phoneNumber = document.getElementById("user-input").value;
  if(phoneNumber==="") {
    alert("Please provide a phone number")
  }else{
    validateNumber();
  }
}

function clearInput() {
  document.getElementById("user-input").value = "";
  results.innerText = "";
}

checkBtn.addEventListener("click", isEmpty);
clearBtn.addEventListener("click", clearInput);