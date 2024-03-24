const handleOperatorClick = (operator) => {
    let result;
    if (operator === 'C') {
      setOperand1('');
      setOperand2('');
      setOperator('');
      setDisplayValue('0');
    } else if (operator === '+' || operator === '-') {
      // Если нажата кнопка "+" или "-", выполняем операцию, если есть оба операнда
      if (operand1 && operand2) {
        result = operator === '+' ? parseInt(operand1) + parseInt(operand2) : parseInt(operand1) - parseInt(operand2);
        setOperand1(result.toString());
        setOperand2('');
        setOperator(operator);
        setDisplayValue(result.toString() + operator);
      } else if (operand1) {
        // Если нажата кнопка "+" или "-", но второго операнда нет, просто обновляем оператор
        setOperator(operator);
        setDisplayValue(prevDisplayValue => prevDisplayValue + operator); // Убираем старый оператор и добавляем новый
      }
    } else if (operator === '=') {
      // Если нажата кнопка "=", выполняем операцию, если есть оба операнда
      if (operand1 && operand2) {
        result = operator === '+' ? parseInt(operand1) + parseInt(operand2) : parseInt(operand1) - parseInt(operand2);
        // Обновляем состояния и дисплей с результатом
        setOperand1(result.toString());
        setOperand2('');
        setOperator('');
        setDisplayValue(result.toString());
      }
    }
  };