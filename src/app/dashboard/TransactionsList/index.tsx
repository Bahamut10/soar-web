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
    <ul className="tile max-h-[252px] overflow-auto">
      {isLoading ? (
        <Loading />
      ) : (
        data?.map((transaction) => {
          return (
            <li key={transaction.id} className="mb-3">
              <TransactionItem
                amount={transaction.amount}
                types={transaction.types}
                date={transaction.created_at}
                source={transaction.source}
                subject={transaction.subject}
              />
            </li>
          );
        })
      )}
    </ul>
  );
}
