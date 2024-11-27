import { TRANSACTION_TYPES } from './enums';
import TransactionItem from './TransactionItem';

export default function TransactionList() {
  return (
    <ul className="tile tablet:max-[1460px]:max-h-[514px] tablet:max-[1460px]:h-full max-[1490px]:max-h-[285px] max-h-[252px] overflow-auto">
      <li className="mb-3">
        <TransactionItem
          transactionType={TRANSACTION_TYPES.CARD}
          amount={-850}
        />
      </li>
      <li className="mb-3">
        <TransactionItem
          transactionType={TRANSACTION_TYPES.PAYPAL}
          amount={8500}
        />
      </li>
      <li className="mb-3">
        <TransactionItem
          transactionType={TRANSACTION_TYPES.COIN}
          amount={85000}
        />
      </li>
      <li className="mb-3">
        <TransactionItem
          transactionType={TRANSACTION_TYPES.COIN}
          amount={85000}
        />
      </li>
      <li className="mb-3">
        <TransactionItem
          transactionType={TRANSACTION_TYPES.COIN}
          amount={85000}
        />
      </li>
    </ul>
  );
}
