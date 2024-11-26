import Link from 'next/link';
import { MdHome } from 'react-icons/md';
import { TEXT_VARIANTS } from '../Text/enum';
import Text from '../Text';
import { useState } from 'react';
import clsx from 'clsx';

type MenuItemProps = {
  active: boolean;
  icon: React.ReactNode;
  title: string;
};

export default function MenuItem(props: MenuItemProps) {
  const { active, icon, title } = props;

  return (
    <Link
      href="/"
      className={clsx(
        'flex gap-3 text-rainy-grey hover:text-charcoal hover:font-semibold',
        active && 'font-semibold !text-charcoal'
      )}
    >
      {icon}
      <Text variant={TEXT_VARIANTS.SUBHEADING}>{title}</Text>
    </Link>
  );
}
