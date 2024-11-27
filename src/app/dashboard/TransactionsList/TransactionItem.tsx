import Text from '@/components/Text';
import { TEXT_VARIANTS } from '@/components/Text/enum';
import Image from 'next/image';
import { formatCurrency } from '@/utils/helpers';
import { useMemo } from 'react';
import clsx from 'clsx';
import { TRANSACTION_SOURCES, TRANSACTION_TYPES } from '@/types/dashboard';
import dayjs from 'dayjs';

type TransactionItemProps = {
  subject: string;
  amount: number;
  types: keyof typeof TRANSACTION_TYPES;
  date: string;
  source: keyof typeof TRANSACTION_SOURCES;
};

export default function TransactionItem(props: TransactionItemProps) {
  const { amount, types, date, source, subject } = props;

  const _icon = useMemo(() => {
    switch (source) {
      case TRANSACTION_SOURCES.CARD:
        return '/ic-card-full-rounded-orange.png';
      case TRANSACTION_SOURCES.PAYPAL:
        return '/ic-paypal-full-rounded-purple.png';
      case TRANSACTION_SOURCES.OTHERS:
        return '/ic-coin-full-rounded-green.png';
      default:
        return '';
    }
  }, [source]);

  const _amountColor = useMemo(() => {
    if (types === TRANSACTION_TYPES.OUTFLOW) return 'text-rose-red';
    return 'text-leaf-green';
  }, [types]);

  const _title = useMemo(() => {
    switch (source) {
      case TRANSACTION_SOURCES.CARD:
        return 'Deposit from my Card';
      case TRANSACTION_SOURCES.PAYPAL:
        return 'Deposit Paypal';
      default:
        return subject;
    }
  }, [source, subject]);

  return (
    <div className="flex items-center gap-5">
      <Image src={_icon} alt="Card Transaction" width={55} height={55} />
      <div className="flex-[2]">
        <Text variant={TEXT_VARIANTS.BODY} className="text-charcoal">
          {_title}
        </Text>
        <Text variant={TEXT_VARIANTS.BODY} className="text-night-charcoal">
          {dayjs(date).format('DD MMMM YYYY')}
        </Text>
      </div>
      <Text
        variant={TEXT_VARIANTS.BODY}
        className={clsx('text-right flex-1', _amountColor)}
      >
        {types === TRANSACTION_TYPES.OUTFLOW
          ? `-$${formatCurrency(amount)}`
          : `+$${formatCurrency(amount)}`}
      </Text>
    </div>
  );
}
