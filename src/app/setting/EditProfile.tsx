import Button from '@/components/Button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/components/Button/enum';
import Input from '@/components/Input';
import Image from 'next/image';
import { useState } from 'react';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default function EditProfile() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="max-laptop:flex-col max-laptop:items-center max-laptop:gap-6 flex gap-16">
        <div>
          <Image
            src="/user-1.png"
            alt="User Profile Picture"
            width={100}
            height={100}
          />
        </div>
        <div className="max-laptop:flex-col flex-2 flex justify-between w-full gap-7">
          <div className="flex flex-col gap-6 flex-1">
            <Input label="Your Name" type="text" defaultValue="Charlene Reed" />
            <Input
              label="Email"
              type="email"
              defaultValue="charlenereed@gmail.com"
            />
            <div className="flex flex-col">
              <label className="mb-3">Date of Birth</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  if (date) setStartDate(date);
                }}
                className="p-3 text-gloomy-blue text-sm border border-rainy-grey rounded-2xl w-full focus:outline-none focus:ring-0"
              />
            </div>
            <Input
              label="Permanent Address"
              type="text"
              defaultValue="San Jose, California, USA"
            />
            <Input label="Postal Code" type="text" defaultValue="45962" />
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <Input label="User Name" type="text" defaultValue="Charlene Reed" />
            <Input
              label="Password"
              type="password"
              defaultValue="Charlene Reed"
            />
            <Input
              label="Present Address"
              type="text"
              defaultValue="San Jose, California, USA"
            />
            <Input label="City" type="text" defaultValue="San Jose" />
            <Input label="Country" type="text" defaultValue="USA" />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <Button
          variant={BUTTON_VARIANTS.PRIMARY}
          size={BUTTON_SIZES.SM}
          className="max-laptop:w-full"
        >
          Save
        </Button>
      </div>
    </>
  );
}
