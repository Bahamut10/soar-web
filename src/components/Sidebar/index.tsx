'use client';

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
import MenuItem from './MenuItem';
import { useMemo, useState } from 'react';
import { TEXT_VARIANTS } from '../Text/enum';
import Text from '../Text';

export default function Sidebar() {
  const [active, setActive] = useState(false);

  const _iconProps = useMemo(() => {
    return {
      size: 25,
    };
  }, []);

  return (
    <div className="flex flex-col gap-12 px-10 py-5 border-0 border-r-2 border-solid border-shiny-grey bg-white min-h-svh max-laptop:hidden">
      <div className="flex gap-2 items-center">
        <MdTask className="text-charcoal" size={35} />
        <Text
          variant={TEXT_VARIANTS.HEADING4}
          className="text-navy-blue font-extrabold"
        >
          Soar Task
        </Text>
      </div>
      <div className="flex flex-col gap-8">
        <MenuItem
          icon={<MdHome {..._iconProps} />}
          title="Dashboard"
          active={true}
        />
        <MenuItem
          icon={<MdAttachMoney {..._iconProps} />}
          title="Transactions"
          active={active}
        />
        <MenuItem
          icon={<MdAccountCircle {..._iconProps} />}
          title="Accounts"
          active={active}
        />
        <MenuItem
          icon={<MdAreaChart {..._iconProps} />}
          title="Investments"
          active={active}
        />
        <MenuItem
          icon={<MdCreditCard {..._iconProps} />}
          title="Credit Cards"
          active={active}
        />
        <MenuItem
          icon={<MdPayments {..._iconProps} />}
          title="Loans"
          active={active}
        />
        <MenuItem
          icon={<MdDesignServices {..._iconProps} />}
          title="Services"
          active={active}
        />
        <MenuItem
          icon={<MdLightbulbOutline {..._iconProps} />}
          title="My Privileges"
          active={active}
        />
        <MenuItem
          icon={<MdMiscellaneousServices {..._iconProps} />}
          title="Setting"
          active={active}
        />
      </div>
    </div>
  );
}
