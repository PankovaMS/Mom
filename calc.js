const rateInput = document.querySelector("#rate");

rateInput.addEventListener('input', (e) => {
  let v = e.target.value


  v = v.replace(/,/g, '.');

   //замена всего ненужного на пустую строку
   v = v.replace(/[^\d.]/g, '');

  // Удаляем ведущие нули
  v = v.replace(/^0+/, '');
  

  
  if (v.startsWith('.')) {
    v = "";
  }

   // разделитель
     let parts = v.split('.')
   // не больше 2 символов после разделителя
     if (parts.length >= 2) {
       parts[1] = parts[1].slice(0, 2)
       v = `${parts[0]}.${parts[1]}`
     }
   
     e.target.value = v
});
// заменить всё, что больше 200000 на 200000
const MAX_RATE = 200000.00;
const MIN_RATE = 1.00;
rateInput.addEventListener('blur', e => {

  let v = Number(e.target.value)

  if (v > MAX_RATE) {
    e.target.value = MAX_RATE
  }
  if (v < MIN_RATE) {
    e.target.value = MIN_RATE
  }
});

function calc() {
  let rate = Number(rateInput.value.replace(",", "."));

  // валидация через alert
  if (isNaN(rate) || rate < 1 || rate > 200000) {
    alert("Выплата должна быть от 1.00 до 200000.00");
    return;
  }

  let totalIncome = rate / 0.87;
  let monthlyIncome = totalIncome - rate;


  document.querySelector("#totalIncome").innerHTML = `${totalIncome.toFixed(
    2
  )} рублей`;
  document.querySelector("#monthlyIncome").innerHTML = `${monthlyIncome.toFixed(
    2
  )} рублей`;
}
function reset() {
  rateInput.value = '';

  document.querySelector('#totalIncome').innerHTML = '';
  document.querySelector('#monthlyIncome').innerHTML = '';
}

document.querySelector("#calc").addEventListener("click", calc);
document.querySelector("#reset").addEventListener("click", reset);
