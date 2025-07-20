const calculators = {
  normal: `<h2>Normal Calculator</h2><input type="number" id="num1"><input type="number" id="num2">
  <button onclick="alert(parseFloat(num1.value)+parseFloat(num2.value))">Add</button>`,
  
  bmi: `<h2>BMI Calculator</h2><input type="number" id="weight" placeholder="Weight (kg)">
  <input type="number" id="height" placeholder="Height (m)">
  <button onclick="alert((weight.value / (height.value * height.value)).toFixed(2))">Calculate</button>`,

  emi: `<h2>EMI Calculator</h2><input type="number" id="principal" placeholder="Loan Amount">
  <input type="number" id="rate" placeholder="Rate (%)">
  <input type="number" id="time" placeholder="Time (Years)">
  <button onclick="let p=principal.value, r=rate.value/1200, n=time.value*12;
  alert(((p*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1)).toFixed(2))">Calculate</button>`,

  iq: `<h2>IQ Estimator</h2><p>This is a fun estimator! 2 + 2 = ?</p>
  <input id="ans" /><button onclick="alert(ans.value==4 ? 'Genius!' : 'Try again')">Submit</button>`,

  height: `<h2>Height Converter</h2><input type="number" id="cm" placeholder="cm">
  <button onclick="alert((cm.value/30.48).toFixed(2)+' ft')">Convert to Feet</button>`,

  weight: `<h2>Weight Converter</h2><input type="number" id="kg" placeholder="kg">
  <button onclick="alert((kg.value*2.20462).toFixed(2)+' lbs')">Convert to Lbs</button>`
};

const select = document.getElementById('calculatorSelect');
const container = document.getElementById('calculatorContainer');

function loadCalculator(name) {
  container.innerHTML = calculators[name];
}
select.addEventListener('change', () => loadCalculator(select.value));
loadCalculator('normal');
