const rateInput = document.querySelector("#rate");

rateInput.addEventListener("beforeinput", (e) => {
  if (!e.data) return;

    // Блокировать пробелы
    if (e.data === " ") {
      e.preventDefault();
      return;
    }
  
  const allowed = "0123456789,.";
  if (!allowed.includes(e.data)) {
    e.preventDefault();
    return;
  }

  // Нельзя начинать с 0, запятой или точки
  if ((e.data === "0" || e.data === "," || e.data === ".") && e.target.value.length === 0) {
    e.preventDefault();
    return;
  }

  // Блокировать вторую запятую или точку
  if ((e.data === "," || e.data === ".") && (e.target.value.includes(",") || e.target.value.includes("."))) {
    e.preventDefault();
    return;
  }
});

function calc() {
  let rate = Number(rateInput.value.replace(",", "."));

  // валидация через alert
  if (isNaN(rate) || rate < 1 || rate > 1000000) {
    alert("Выплата должна быть от 1.00 до 1000000.00");
    return;
  }

  let totalIncome = rate * 0.13 + rate;
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
