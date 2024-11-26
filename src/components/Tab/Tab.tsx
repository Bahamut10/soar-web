import { ReactNode } from 'react';
import { TEXT_VARIANTS } from '../Text/enum';
import Text from '../Text';
import clsx from 'clsx';
import { useTabContext } from '.';

export function TabHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <ul
      className={clsx(
        'max-laptop:overflow-auto max-tablet:max-w-[500px] max-laptop:max-w-[640px] max-laptop:gap-6 flex gap-16 border-0 border-b-[1px] border-solid border-night-charcoal overflow-x-auto',
        className
      )}
    >
      {children}
    </ul>
  );
}

export function TabList({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const { activeTab, setActiveTab } = useTabContext();

  const isMatch = activeTab.toLowerCase() === value.toLowerCase();

  return (
    <li
      onClick={() => setActiveTab(value)}
      className={clsx(
        'p-2 border-0 cursor-pointer whitespace-nowrap hover:border-b-4 hover:border-solid hover:border-charcoal hover:font-medium',
        isMatch ? 'border-b-4 border-solid border-charcoal font-medium' : '',
        className
      )}
    >
      <Text
        variant={TEXT_VARIANTS.BODY}
        className={clsx(
          'text-center',
          isMatch ? 'text-charcoal' : 'text-night-charcoal'
        )}
      >
        {value}
      </Text>
    </li>
  );
}

export function TabBody({
  children,
  value,
  className,
}: {
  children: ReactNode;
  value: string;
  className?: string;
}) {
  const { activeTab } = useTabContext();

  const isMatch = activeTab.toLowerCase() === value.toLowerCase();

  return (
    <div
      className={clsx(
        'max-laptop:px-3 bg-white p-10',
        isMatch ? 'block' : 'hidden',
        className
      )}
    >
      {children}
    </div>
  );
}
