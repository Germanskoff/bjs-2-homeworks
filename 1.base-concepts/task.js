function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  let d = b**2-4*a*c;
  let x;
  if (d < 0) {arr = []}
  else if (d = 0) {arr = [x = -b/(2*a)]}
  else {arr = [(-b + Math.sqrt(d))/(2*a)]}; 
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
