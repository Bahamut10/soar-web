export function formatCurrency(balance: number) {
  const _balance = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(balance);

  return _balance;
}
