'use client';

import { useCallback, useState } from 'react';
import {
  MdNotifications,
  MdOutlineMiscellaneousServices,
  MdSearch,
} from 'react-icons/md';
import Input from '../Input';
import Text from '../Text';
import { TEXT_VARIANTS } from '../Text/enum';
import Image from 'next/image';

function MobileNav() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleStripsClick = useCallback(() => {
    setIsNavbarOpen(!isNavbarOpen);
  }, [isNavbarOpen]);

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
  return (
    <>
      <div className="flex justify-between items-center p-5 border-0 laptop:border-b-2 laptop:border-solid laptop:border-shiny-grey">
        <MobileNav />
        <Text
          variant={TEXT_VARIANTS.HEADING4}
          className="text-navy-blue font-semibold text-h5"
        >
          Overview
        </Text>
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="Search for something"
            className="max-laptop:hidden pl-10 bg-cloudy-grey !rounded-full"
            defaultValue={''}
            leftIcon={
              <MdSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gloomy-blue"
                size={20}
              />
            }
            // onChange={handleChange}
          />
          <div className="max-laptop:hidden icon">
            <MdOutlineMiscellaneousServices className="z-10" size={30} />
          </div>
          <div className="max-laptop:hidden icon">
            <MdNotifications className="z-10 text-trusted-blue" size={30} />
          </div>
          <div className="icon">
            <Image
              src="/user-0.png"
              alt="User Profile Picture"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
      <div className="laptop:hidden w-3/4 mx-auto ">
        <Input
          type="text"
          placeholder="Search for something"
          className="pl-10 w-full bg-cloudy-grey !rounded-full"
          defaultValue={''}
          leftIcon={
            <MdSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gloomy-blue"
              size={20}
            />
          }
          // onChange={handleChange}
        />
      </div>
    </>
  );
}
