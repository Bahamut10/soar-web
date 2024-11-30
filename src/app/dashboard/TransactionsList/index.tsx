import { RecentTransactions } from '@/types/dashboard';
import TransactionItem from './TransactionItem';
import Loading from '@/components/Loading';

export default function TransactionList({
  data,
  isLoading,
}: {
  data: Array<RecentTransactions>;
  isLoading: boolean;
}) {
  return (
    <ul
      className="tile max-h-[252px] overflow-auto"
      role="region"
      aria-labelledby="recent-transaction-title"
    >
      {isLoading ? (
        <Loading />
      ) : (
        data?.map((transaction) => {
          return (
            <li
              key={transaction.id}
              className="mb-3"
              aria-label={`transaction-${transaction.id}`}
            >
              <TransactionItem
                amount={transaction.amount}
                types={transaction.types}
                date={transaction.created_at}
                source={transaction.source}
                description={transaction.description}
              />
            </li>
          );
        })
      )}
    </ul>
  );
}
