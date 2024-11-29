import { formatCurrency, maskCardNumber } from '@/utils/helpers';
import clsx from 'clsx';
import Image from 'next/image';
import { useMemo } from 'react';
import Text from '../Text';
import { TEXT_VARIANTS } from '../Text/enum';
import { THEMES } from './enums';

type CardProps = {
  balance: number;
  cardNumber: string;
  holderName: string;
  cardOperator: string;
  theme: keyof typeof THEMES;
  valid: string;
};

const CARD_OPERATORS = {
  MASTERCARD: 'Mastercard',
};

export default function Card(props: CardProps) {
  const { balance, cardNumber, cardOperator, holderName, theme, valid } = props;

  const _themeClassBody = useMemo(() => {
    switch (theme) {
      case THEMES.DARK:
        return `bg-gradient-to-bl from-black to-night-charcoal w-full text-white`;
      case THEMES.LIGHT:
        return `bg-white w-full text-charcoal`;
      default:
        return '';
    }
  }, [theme]);

  const _themeClassFooter = useMemo(() => {
    switch (theme) {
      case THEMES.DARK:
        return `bg-gradient-to-t from-black from-30% to-night-charcoal via-1% text-white`;
      case THEMES.LIGHT:
        return `border-0 border-t-2 border-solid border-shiny-grey bg-white w-full text-charcoal`;
      default:
        return '';
    }
  }, [theme]);

  const _cardOperator = useMemo(() => {
    switch (cardOperator) {
      case CARD_OPERATORS.MASTERCARD:
        return `/ic-card-chip-for-${theme?.toLowerCase()}.png`;
      default:
        return '';
    }
  }, [cardOperator, theme]);

  return (
    <div
      className="border-2 border-solid border-shiny-grey rounded-3xl w-full overflow-hidden flex flex-col"
      role="region"
      aria-labelledby={`card-balance-${cardNumber}`}
    >
      <div
        className={clsx('flex flex-col gap-3 p-6 flex-[2]', _themeClassBody)}
      >
        <div className="flex justify-between">
          <div aria-labelledby={`balance-label-${cardNumber}`}>
            <Text
              id={`balance-label-${cardNumber}`}
              variant={TEXT_VARIANTS.CAPTION}
            >
              Balance
            </Text>
            <Text variant={TEXT_VARIANTS.HEADING5}>
              ${formatCurrency(balance)}
            </Text>
          </div>
          <Image
            src={_cardOperator}
            alt="Card Chip"
            width={35}
            height={35}
            className="w-auto h-auto object-contain"
          />
        </div>
        <div className="flex">
          <div className="flex-1" aria-labelledby={`card-holder-${cardNumber}`}>
            <Text
              id={`card-holder-${cardNumber}`}
              variant={TEXT_VARIANTS.CAPTION}
              className="opacity-70"
            >
              CARD HOLDER
            </Text>
            <Text variant={TEXT_VARIANTS.BODY}>{holderName}</Text>
          </div>
          <div className="flex-1" aria-labelledby={`valid-thru-${cardNumber}`}>
            <Text
              id={`valid-thru-${cardNumber}`}
              variant={TEXT_VARIANTS.CAPTION}
              className="opacity-70"
            >
              VALID THRU
            </Text>
            <Text variant={TEXT_VARIANTS.BODY}>{valid}</Text>
          </div>
        </div>
      </div>
      <div
        className={clsx('flex justify-between p-6 flex-1', _themeClassFooter)}
      >
        <Text
          variant={TEXT_VARIANTS.HEADING5}
          className="font-semibold"
          aria-label={`Card number ending in ${cardNumber.slice(-4)}`}
        >
          {maskCardNumber(cardNumber)}
        </Text>
        <Image
          src={`/ic-mastercard-for-${theme?.toLowerCase()}.png`}
          alt="Mastercard Logo"
          width={44}
          height={35}
          priority={true}
          className="object-contain w-[44px] h-[35px]"
        />
      </div>
    </div>
  );
}
