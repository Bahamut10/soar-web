import { useRootContext } from '@/app/Context';
import clsx from 'clsx';
import { ReactNode, useCallback, useMemo, useState } from 'react';
import {
  MdAccountCircle,
  MdAreaChart,
  MdAttachMoney,
  MdCreditCard,
  MdDesignServices,
  MdHome,
  MdLightbulbOutline,
  MdMiscellaneousServices,
  MdPayments,
  MdTask,
} from 'react-icons/md';
import Text from '../Text';
import { TEXT_VARIANTS } from '../Text/enum';
import { Menu, MenuItem } from './Menu';
import { ROUTES } from './enums';

const MENU_ICON_SIZE = 25;

const menuItems = [
  {
    title: 'Dashboard',
    href: ROUTES.DASHBOARD,
    icon: <MdHome size={MENU_ICON_SIZE} />,
  },
  {
    title: 'Transactions',
    href: ROUTES.TRANSACTIONS,
    icon: <MdAttachMoney size={MENU_ICON_SIZE} />,
  },
  {
    title: 'Accounts',
    href: ROUTES.ACCOUNTS,
    icon: <MdAccountCircle size={MENU_ICON_SIZE} />,
  },
  {
    title: 'Investments',
    href: ROUTES.INVESTMENTS,
    icon: <MdAreaChart size={MENU_ICON_SIZE} />,
  },
  {
    title: 'Credit Cards',
    href: ROUTES.CREDIT_CARDS,
    icon: <MdCreditCard size={MENU_ICON_SIZE} />,
  },
  {
    title: 'Loans',
    href: ROUTES.LOANS,
    icon: <MdPayments size={MENU_ICON_SIZE} />,
  },
  {
    title: 'Services',
    href: ROUTES.SERVICES,
    icon: <MdDesignServices size={MENU_ICON_SIZE} />,
  },
  {
    title: 'My Privileges',
    href: ROUTES.MY_PRIVILEGE,
    icon: <MdLightbulbOutline size={MENU_ICON_SIZE} />,
  },
  {
    title: 'Setting',
    href: ROUTES.SETTING,
    icon: <MdMiscellaneousServices size={MENU_ICON_SIZE} />,
  },
];

export default function Sidebar() {
  const { isNavbarOpen, toggleNavbar } = useRootContext();

  const [active, setActive] = useState('dashboard');

  const handlePickMenu = useCallback(
    (item: { title: string; href: string; icon: ReactNode }) => {
      setActive(item.title.toLowerCase());
      toggleNavbar();
    },
    [toggleNavbar]
  );

  return (
    <div
      className={clsx(
        'max-laptop:fixed max-laptop:-left-full max-laptop:w-full max-laptop:top-[88px] flex flex-col gap-12 px-10 py-5 border-0 border-r-2 border-solid z-10 border-shiny-grey bg-white min-h-svh transition-all ease-linear duration-300',
        isNavbarOpen ? 'max-laptop:left-0' : ''
      )}
    >
      <div className="flex gap-2 items-center">
        <MdTask className="text-charcoal" size={35} />
        <Text
          variant={TEXT_VARIANTS.HEADING4}
          className="text-navy-blue font-extrabold max-desktop:hidden"
        >
          Soar Task
        </Text>
      </div>
      <Menu>
        {menuItems.map((item) => (
          <MenuItem
            key={item.title}
            active={active === item.title.toLowerCase()}
            href={item.href}
            icon={item.icon}
            onClick={() => handlePickMenu(item)}
            title={item.title}
          />
        ))}
      </Menu>
    </div>
  );
}
