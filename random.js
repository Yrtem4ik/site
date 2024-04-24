document.getElementById('unit1').addEventListener('input', getRandomDecimal);
document.getElementById('unit2').addEventListener('input', getRandomDecimal);


function getRandomDecimal(min, max, decimalPlaces) {
    const unit1 = document.getElementById('unit1').value;
    const unit2 = document.getElementById('unit2').value;
    const value1 = parseFloat(document.getElementById('value1').value);
    let value2;

    return parseFloat((Math.random() * (max - min) + min).toFixed(decimalPlaces));
  }

  document.getElementById('gen_button').addEventListener('click', function() {
    getRandomDecimal()
  });