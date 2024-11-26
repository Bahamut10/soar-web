import Button from '@/components/Button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/components/Button/enum';
import Input from '@/components/Input';
import Text from '@/components/Text';
import { TEXT_VARIANTS } from '@/components/Text/enum';
import clsx from 'clsx';
import Image from 'next/image';
import { MdChevronLeft, MdChevronRight, MdSend } from 'react-icons/md';
import { dataPerson, DataPerson } from './data';
import { useCallback, useState } from 'react';

type UserProfileProps = {
  className?: string;
  person: DataPerson;
  styles?: object;
};

function UserProfile(props: UserProfileProps) {
  const { className: _className, person, styles } = props;

  return (
    <div className={_className} style={styles}>
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
          className="text-charcoal text-center font-extrabold"
        >
          {person.name}
        </Text>
        <Text
          variant={TEXT_VARIANTS.BODY}
          className="text-night-charcoal text-center font-extrabold"
        >
          {person.position}
        </Text>
      </div>
    </div>
  );
}

export default function QuickTransfer() {
  const [moveLeft, setMoveLeft] = useState(0);

  const handleSlideLeft = useCallback(() => {
    if (moveLeft < 240) setMoveLeft((prev) => prev + 140);
  }, [moveLeft]);

  const handleSlideRight = useCallback(() => {
    setMoveLeft(0);
  }, []);

  return (
    <div className="tile !p-8">
      <div className="flex gap-8 items-center">
        <div className="flex gap-10 w-[400px] overflow-hidden">
          {dataPerson.map((person) => (
            <UserProfile
              key={person.photo}
              person={person}
              className="transition ease-in-out delay-75"
              styles={{ transform: `translateX(-${moveLeft}px)` }}
            />
          ))}
        </div>
        {moveLeft < 240 ? (
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
      <div className="flex justify-between items-center mt-7">
        <Text variant={TEXT_VARIANTS.BODY} className="text-night-charcoal">
          Write Amount
        </Text>
        <div className="relative">
          <Input
            type="text"
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
    </div>
  );
}
