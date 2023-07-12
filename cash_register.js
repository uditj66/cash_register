var billAmount = document.querySelector("#bill_amount");
console.log(billAmount.value);
var btn1 = document.getElementById("btn1");
var msg1 = document.querySelector("#invalid1");
msg1.style.display = "none";
var toggle = document.querySelector("#toggle");
toggle.style.display = "none";
var table_content = document.querySelector("#table_content");
table_content.style.display = "none";
var arr = [2000, 500, 100, 75, 50, 20, 10, 5, 2, 1];
var noOfNotes = document.querySelectorAll(".noOfNotes");
btn1.addEventListener("click", () => {
  if (billAmount.value == null) {
    btn1.style.display = "none";
    toggle.style.display = "none";
    msg1.style.display = "block";
    msg1.innerHTML = "THE BILL AMOUNT SHOULD BE NUMERICAL VALUE ";
  } else if (billAmount.value <= 0) {
    btn1.style.display = "none";
    toggle.style.display = "none";
    msg1.style.display = "block";
    msg1.innerHTML = "THE BILL AMOUNT SHOULD BE GREATER THAN ZERO";
  } else {
    btn1.style.display = "none";
    toggle.style.display = "block";
  }
});

var cashGiven = document.querySelector("#cash_given");
console.log(cashGiven.value);
var btn2 = document.getElementById("btn2");
var msg2 = document.querySelector("#invalid2");
msg2.style.display = "none";
btn2.addEventListener("click", validate_bill_and_cash_amount);
function validate_bill_and_cash_amount() {
  if (cashGiven.value < billAmount.value) {
    msg2.style.display = "block";
    msg2.innerHTML = "CASH AMOUNT SHOULD BE GREATER THAN THE BILL AMOUNT";
  } else {
    msg2.style.display = "none";
    table_content.style.display = "block";
    var amountToreturned = cashGiven.value - billAmount.value;
    calculateChange(amountToreturned);
  }
}
function calculateChange(amountToreturned) {
  for (var i = 0; i < arr.length; i++) {
    var notesDenomination = Math.trunc(amountToreturned / arr[i]);
    amountToreturned %= arr[i];
    noOfNotes[i].innerHTML = notesDenomination;
  }
}
