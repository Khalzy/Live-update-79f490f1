const pi = 3.14;
let numWaarde;
let result;
var d = Date();
document.getElementById("date").innerText = d;
function calculate() {
  numWaarde = document.getElementById("num").value;
  result = pi * numWaarde;
  document.getElementById("output").innerText = result;

  {
    numWaarde = (numWaarde * 1) / 2;
    result = numWaarde * numWaarde * pi;
    document.getElementById("output1").innerText = result;
  }
}
