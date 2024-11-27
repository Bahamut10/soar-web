import { TRANSACTION_TYPES } from './enums';
import TransactionItem from './TransactionItem';

export default function TransactionList() {
  return (
    <div className="tile flex flex-col gap-5 h-full">
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
