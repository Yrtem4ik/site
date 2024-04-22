function appendToDisplay(value) {
    document.getElementById('display').value += value;
    for();
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    let result;
    try {
      result = eval(document.getElementById('display').value);
    } catch (error) {
      result = 'Помилка';
    }
    document.getElementById('display').value = result;
  }
  