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
      role="tablist"
      className={clsx(
        'max-tablet:gap-4 max-laptop:gap-8 overflow-auto flex gap-16 border-0 border-b-[1px] border-solid border-night-charcoal overflow-x-auto',
        className
      )}
    >
      {children}
    </ul>
  );
}

export function TabList({
  id,
  value,
  className,
  ariaControls,
}: {
  id?: string;
  value: string;
  className?: string;
  ariaControls?: string;
}) {
  const { activeTab, setActiveTab } = useTabContext();

  const isMatch = activeTab.toLowerCase() === value.toLowerCase();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveTab(value);
    }
  };

  return (
    <li
      id={id}
      onClick={() => setActiveTab(value)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="tab"
      aria-selected={isMatch}
      aria-controls={ariaControls}
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
  id,
  children,
  value,
  className,
  ariaLabelledBy,
}: {
  id?: string;
  children: ReactNode;
  value: string;
  className?: string;
  ariaLabelledBy?: string;
}) {
  const { activeTab } = useTabContext();

  const isMatch = activeTab.toLowerCase() === value.toLowerCase();

  return (
    <div
      id={id}
      role="tabpanel"
      aria-labelledby={ariaLabelledBy}
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
