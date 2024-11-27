import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';
import Text from '../Text';
import { TEXT_VARIANTS } from '../Text/enum';
import { useRootContext } from '@/app/Context';

type MenuItemProps = {
  active: boolean;
  href: string;
  icon: React.ReactNode;
  onClick: () => void;
  title: string;
};

export function Menu({ children }: { children: ReactNode }) {
  return (
    <ul className="max-tablet:max-h-[500px] overflow-y-auto">{children}</ul>
  );
}

export function MenuItem(props: MenuItemProps) {
  const { isNavbarOpen } = useRootContext();
  const { active, href, icon, onClick, title } = props;

  return (
    <li className="mb-8">
      <Link
        href={href}
        onClick={onClick}
        className={clsx(
          'flex gap-3 text-rainy-grey hover:text-charcoal hover:font-semibold',
          active && 'font-semibold !text-charcoal'
        )}
      >
        {icon}
        <Text
          variant={TEXT_VARIANTS.SUBHEADING}
          className={!isNavbarOpen ? 'max-desktop:hidden' : ''}
        >
          {title}
        </Text>
      </Link>
    </li>
  );
}
