export function formatCurrency(balance: number) {
  const _balance = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(balance);

  return _balance;
}

export function maskCardNumber(cardNumber: string) {
  const firstFourDigits = cardNumber.slice(0, 4);
  const lastFourDigits = cardNumber.slice(-4);
  const maskedDigits = '*'.repeat(cardNumber.length - 8);

  return `${firstFourDigits} ${maskedDigits} ${lastFourDigits}`;
}
