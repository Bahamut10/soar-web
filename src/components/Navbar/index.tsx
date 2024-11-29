'use client';

import { useRootContext } from '@/app/Context';
import { useAPIGetProfile } from '@/networks/profile/useAPIProfile';
import { ProfileStruct } from '@/types/profile';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import {
  MdNotifications,
  MdOutlineMiscellaneousServices,
  MdSearch,
} from 'react-icons/md';
import Input from '../Input';
import { ROUTES } from '../Sidebar/enums';
import Text from '../Text';
import { TEXT_VARIANTS } from '../Text/enum';

function MobileNav() {
  const { isNavbarOpen, toggleNavbar } = useRootContext();

  const handleStripsClick = () => {
    toggleNavbar();
  };

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

  const { data: profileData } = useAPIGetProfile();
  const profile: ProfileStruct = profileData?.data;

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

  const _renderInput = (_className?: string) => {
    return (
      <Input
        type="text"
        placeholder="Search for something"
        className={clsx('pl-10 bg-cloudy-grey !rounded-full', _className)}
        defaultValue={''}
        aria-label="Search input"
        leftIcon={
          <MdSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gloomy-blue"
            size={20}
            aria-hidden="true"
          />
        }
        // onChange={handleChange}
      />
    );
  };

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
            <Link href="/setting">
              <MdOutlineMiscellaneousServices
                className="z-10"
                size={30}
                aria-label="Settings"
              />
            </Link>
          </div>
          <div className="max-laptop:hidden group button__icon">
            <MdNotifications
              className="z-10 text-trusted-blue group-hover:text-charcoal"
              size={30}
              aria-label="Notifications"
            />
          </div>
          <div className="button__icon">
            <Image
              src={profile?.photo?.toString() ?? '/user-circle.svg'}
              alt="User Profile Picture"
              priority={true}
              width={50}
              height={50}
              role="img"
              aria-label="User profile image"
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
