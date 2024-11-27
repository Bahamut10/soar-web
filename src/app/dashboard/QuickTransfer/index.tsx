import Button from '@/components/Button';
import { BUTTON_VARIANTS } from '@/components/Button/enum';
import Input from '@/components/Input';
import Text from '@/components/Text';
import { TEXT_VARIANTS } from '@/components/Text/enum';
import { Contacts } from '@/types/dashboard';
import Image from 'next/image';
import { MdChevronLeft, MdChevronRight, MdSend } from 'react-icons/md';
import useSliding from './useSliding';
import Loading from '@/components/Loading';
import clsx from 'clsx';
import { useCallback, useState } from 'react';

type UserProfileProps = {
  className?: string;
  person: Contacts;
  styles?: object;
  isSelected: boolean;
  onSelect: (val: number) => void;
};

function UserProfile(props: UserProfileProps) {
  const { className: _className, person, styles, isSelected, onSelect } = props;

  return (
    <div
      className={_className}
      style={styles}
      onClick={() => onSelect(person.id)}
    >
      <Image
        src={person.photo}
        alt="User Profile Picture"
        width={100}
        height={100}
        className="max-w-[unset]"
      />
      <div className="mt-3 flex flex-col gap-1">
        <Text
          variant={TEXT_VARIANTS.BODY}
          className={clsx(
            'text-charcoal text-center group-hover:font-extrabold',
            isSelected ? 'font-extrabold' : ''
          )}
        >
          {person.name}
        </Text>
        <Text
          variant={TEXT_VARIANTS.BODY}
          className={clsx(
            'text-night-charcoal text-center group-hover:font-extrabold',
            isSelected ? 'font-extrabold' : ''
          )}
        >
          {person.position}
        </Text>
      </div>
    </div>
  );
}

export default function QuickTransfer({
  data,
  isLoading,
}: {
  data: Array<Contacts>;
  isLoading: boolean;
}) {
  const {
    handleSlideLeft,
    handleSlideRight,
    sumOfTotalProfileToSkip,
    moveLeft,
  } = useSliding({ data });

  const [selectedContact, setSelectedContact] = useState(0);

  const onSelect = useCallback((val: number) => {
    setSelectedContact(val);
  }, []);

  return (
    <div className="tile !p-8">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="max-[344px]:flex-col flex gap-8 items-center">
            <div className="max-[550px]:w-[230px] max-[550px]:gap-8 laptop:max-desktop:w-[240px] flex gap-10 w-[400px] mx-auto overflow-hidden">
              {data?.map((person) => (
                <UserProfile
                  key={person.id}
                  person={person}
                  className="group cursor-pointer transition ease-in-out delay-75"
                  styles={{ transform: `translateX(-${moveLeft}px)` }}
                  isSelected={selectedContact === person.id}
                  onSelect={onSelect}
                />
              ))}
            </div>
            {moveLeft <= sumOfTotalProfileToSkip ? (
              <span
                className="bg-white rounded-full shadow-lg flex items-center justify-center h-fit p-3 cursor-pointer transition ease-in-out delay-75 hover:shadow-md hover:transition hover:ease-in-out hover:delay-75"
                onClick={handleSlideLeft}
              >
                <MdChevronRight size={30} />
              </span>
            ) : (
              <span
                className="bg-white rounded-full shadow-lg flex items-center justify-center h-fit p-3 cursor-pointer transition ease-in-out delay-75 hover:shadow-md hover:transition hover:ease-in-out hover:delay-75"
                onClick={handleSlideRight}
              >
                <MdChevronLeft size={30} />
              </span>
            )}
          </div>
          <div className="max-[344px]:flex-col flex justify-between items-center mt-7">
            <Text variant={TEXT_VARIANTS.BODY} className="text-night-charcoal">
              Write Amount
            </Text>
            <div className="relative">
              <Input
                type="number"
                placeholder="Amount"
                className="pr-32 pl-6 bg-cloudy-grey max-w-72 !rounded-full"
                defaultValue={''}
                // onChange={handleChange}
              />
              <Button
                variant={BUTTON_VARIANTS.PRIMARY}
                className="rounded-full px-6 h-[50px] absolute flex items-center gap-1 top-0 right-0"
              >
                Send <MdSend />
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
