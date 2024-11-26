import Text from '@/components/Text';
import { TEXT_VARIANTS } from '@/components/Text/enum';
import Image from 'next/image';
import { TRANSACTION_TYPES, TransactionTypes } from './enums';
import { formatCurrency } from '@/utils/helpers';
import { useMemo } from 'react';
import clsx from 'clsx';

type TransactionItemProps = {
  transactionType: keyof TransactionTypes;
  amount: number;
};

export default function TransactionItem(props: TransactionItemProps) {
  const { transactionType, amount } = props;

  const _icon = useMemo(() => {
    switch (transactionType) {
      case TRANSACTION_TYPES.CARD:
        return '/ic-card-full-rounded-orange.png';
      case TRANSACTION_TYPES.PAYPAL:
        return '/ic-paypal-full-rounded-purple.png';
      case TRANSACTION_TYPES.COIN:
        return '/ic-coin-full-rounded-green.png';
    }
  }, []);

  const _amountColor = useMemo(() => {
    if (amount < 0) return 'text-rose-red';
    return 'text-leaf-green';
  }, []);

  return (
    <div className="flex items-center gap-5">
      <Image src={_icon} alt="Card Transaction" width={55} height={55} />
      <div className="flex-[2]">
        <Text variant={TEXT_VARIANTS.BODY} className="text-charcoal">
          Deposit from my Card
        </Text>
        <Text variant={TEXT_VARIANTS.BODY} className="text-night-charcoal">
          28 January 2021
        </Text>
      </div>
      <Text
        variant={TEXT_VARIANTS.BODY}
        className={clsx('text-right flex-1', _amountColor)}
      >
        {amount < 0
          ? `-$${formatCurrency(amount).split('-')[1]}`
          : `+$${formatCurrency(amount)}`}
      </Text>
    </div>
  );
}
