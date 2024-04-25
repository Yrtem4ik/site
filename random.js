//document.getElementById('value1').addEventListener('input', getRandomDecimal);
//document.getElementById('value2').addEventListener('input', getRandomDecimal);


function getRandomDecimal() {
    const min = parseFloat(document.getElementById('value1').value);
    const max = parseFloat(document.getElementById('value2').value);

    document.getElementById('value3').value = parseFloat((Math.random() * (max - min) + min).toFixed(3));
  }

  document.getElementById('gen_button').addEventListener('click', getRandomDecimal);