export const calculo = (num1, num2, operacion) => {
  switch (operacion) {
    case 'SUM':
      return num1 + num2

    case 'SUBSTRACT':
      return num1 - num2

    case 'MULTIPLY':
      return num1 * num2

    case 'DIVIDE':
      return num1 / num2

    case 'PERCENTAGE':
      return (num1 * num2) / 100

    case '':
      console.log('nada')

      return num1 - num2

    default:
      break
  }
}
