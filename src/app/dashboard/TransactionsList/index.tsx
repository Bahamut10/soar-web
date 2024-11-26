import { TRANSACTION_TYPES } from './enums';
import TransactionItem from './TransactionItem';

export default function TransactionList() {
  return (
    <div className="max-desktop:gap-5 tile flex flex-col justify-between h-full">
      <TransactionItem transactionType={TRANSACTION_TYPES.CARD} amount={-850} />
      <TransactionItem
        transactionType={TRANSACTION_TYPES.PAYPAL}
        amount={8500}
      />
      <TransactionItem
        transactionType={TRANSACTION_TYPES.COIN}
        amount={85000}
      />
    </div>
  );
}
