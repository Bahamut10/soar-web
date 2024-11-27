'use client';

import { useCallback, useMemo, useState } from 'react';
import {
  MdNotifications,
  MdOutlineMiscellaneousServices,
  MdSearch,
} from 'react-icons/md';
import Input from '../Input';
import Text from '../Text';
import { TEXT_VARIANTS } from '../Text/enum';
import Image from 'next/image';
import clsx from 'clsx';
import { useRootContext } from '@/app/Context';
import { usePathname } from 'next/navigation';
import { ROUTES } from '../Sidebar/enums';

function MobileNav() {
  const { isNavbarOpen, toggleNavbar } = useRootContext();

  const handleStripsClick = useCallback(() => {
    toggleNavbar();
  }, [toggleNavbar]);

  return (
    <div className="laptop:hidden flex items-center">
      <div
        className="flex flex-col gap-[6px] cursor-pointer laptop:hidden"
        onClick={handleStripsClick}
      >
        <span
          className={`nav__strips ${isNavbarOpen ? 'nav__strips--open' : ''}`}
        />
        <span
          className={`nav__strips ${isNavbarOpen ? 'nav__strips--open' : ''}`}
        />
        <span
          className={`nav__strips ${isNavbarOpen ? 'nav__strips--open' : ''}`}
        />
      </div>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const navbarTitle = useMemo(() => {
    switch (pathname) {
      case ROUTES.DASHBOARD:
        return 'Overview';
      case ROUTES.SETTING:
        return 'Setting';
      default:
        return '';
    }
  }, [pathname]);

  const _renderInput = useCallback((_className?: string) => {
    return (
      <Input
        type="text"
        placeholder="Search for something"
        className={clsx('pl-10 bg-cloudy-grey !rounded-full', _className)}
        defaultValue={''}
        leftIcon={
          <MdSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gloomy-blue"
            size={20}
          />
        }
        // onChange={handleChange}
      />
    );
  }, []);

  return (
    <div className="laptop:border-b-2 laptop:border-solid laptop:border-shiny-grey p-5 border-0 bg-white">
      <div className="flex justify-between items-center">
        <MobileNav />
        <Text
          variant={TEXT_VARIANTS.HEADING4}
          className="text-navy-blue font-semibold text-h5"
        >
          {navbarTitle}
        </Text>
        <div className="flex gap-4 items-center">
          {_renderInput('max-laptop:hidden')}
          <div className="max-laptop:hidden button__icon">
            <MdOutlineMiscellaneousServices className="z-10" size={30} />
          </div>
          <div className="max-laptop:hidden group button__icon">
            <MdNotifications
              className="z-10 text-trusted-blue group-hover:text-charcoal"
              size={30}
            />
          </div>
          <div className="button__icon">
            <Image
              src="/user-0.png"
              alt="User Profile Picture"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
      <div className="laptop:hidden mx-auto mt-5">
        {_renderInput('w-full border-0')}
      </div>
    </div>
  );
}
