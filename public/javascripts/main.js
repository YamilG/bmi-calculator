let computeButton = document.getElementById('getBMI');
let resultsBox = document.getElementById('result');

function getBMI(weight, height) {
  return (weight / Math.pow(height, 2)).toFixed(2);
}

function showResultOnPage() {
  let height = parseFloat(document.getElementById('height').value);
  let weight = parseFloat(document.getElementById('weight').value);
  let bmiNumberInResults = document.getElementById('bmiResult');
  bmiNumberInResults.innerText = getBMI(weight, height);
  resultsBox.classList.toggle('invisible');
}

computeButton.addEventListener('click', showResultOnPage);
