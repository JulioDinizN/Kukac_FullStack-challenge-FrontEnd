export function formatToHaveCurrency(number) {
  const formmatedNumber = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);

  return formmatedNumber
}
