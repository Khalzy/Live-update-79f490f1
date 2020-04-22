const pi = 3.14;
let numWaarde;
let result;
var interval = setInterval(time, 1000);
function time(){

  var d = new Date();
  document.getElementById("date").innerText = d;
}
time();


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
