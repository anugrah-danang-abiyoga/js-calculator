document.addEventListener('DOMContentLoaded', start)

function start() {
  addEventListeners()
}

const NUMS = "0123456789"
const OPS = "+-/*"
// var eq = []
var total = ""


function addEventListeners() {
  var buttons =  document.getElementsByClassName('pushBtn')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {useButton(e.target.value)}, false)
  }
}

function useButton(calcNum) {
  if (calcNum === "AC") {
    document.getElementById("results").innerText = total = "";
  }
  if (NUMS.includes(calcNum)) { // create string of numbers, add string to var eq
    total += calcNum
    document.getElementById("results").innerText = total
  }
  if (OPS.includes(calcNum)) { // add math equation to string
    total += calcNum
    document.getElementById("results").innerText = total

  }
  if (calcNum === "=") { // run math- log result to id:results
    document.getElementById("results").innerText = eval(total)
  }
}