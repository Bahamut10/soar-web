import Button from '@/components/Button';
import { BUTTON_VARIANTS } from '@/components/Button/enum';
import Input from '@/components/Input';
import Loading from '@/components/Loading';
import Text from '@/components/Text';
import { TEXT_VARIANTS } from '@/components/Text/enum';
import { useAPIPostQuickTransfer } from '@/networks/dashboard/useAPIDashboard';
import { Contacts } from '@/types/dashboard';
import clsx from 'clsx';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { MdChevronLeft, MdChevronRight, MdSend } from 'react-icons/md';
import { toast } from 'react-toastify';
import useSliding from './useSliding';

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
      aria-label={`Select ${person.name}'s profile`}
    >
      <Image
        src={person.photo}
        alt={`${person.name} profile picture`}
        width={100}
        height={100}
        className={clsx(
          'max-w-[unset]',
          isSelected
            ? 'border-4 border-solid border-trusted-blue rounded-full'
            : ''
        )}
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
  const [amount, setAmount] = useState<number | string>('');

  const { mutateAsync: quickTransfer, isPending } = useAPIPostQuickTransfer();

  const onSelect = (val: number) => {
    setSelectedContact(val);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedContact <= 0) {
      toast.error('Please select a contact to do a quick transfer!');
    } else {
      await quickTransfer(
        {
          userId: selectedContact,
          amount,
        },
        {
          onSuccess: ({ data }) => {
            toast.success(
              `Transferred $${amount} Successfully to ${data.name}!`
            );
            setAmount('');
          },
          onError: () => {
            toast.error('Something went wrong, please try again later!');
          },
        }
      );
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLSpanElement>,
    handleSlide: Function
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSlide();
    }
  };

  return (
    <div
      className="tile !p-8"
      role="region"
      aria-labelledby="quick-transfer-title"
    >
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
                  aria-label={`Select ${person.name}'s profile`}
                />
              ))}
            </div>
            {moveLeft <= sumOfTotalProfileToSkip ? (
              <span
                role="button"
                aria-label="Slide to the right"
                tabIndex={0}
                className="bg-white rounded-full shadow-lg flex items-center justify-center h-fit p-3 cursor-pointer transition ease-in-out delay-75 hover:shadow-md hover:transition hover:ease-in-out hover:delay-75"
                onClick={handleSlideLeft}
                onKeyDown={(e) => handleKeyDown(e, handleSlideLeft)}
              >
                <MdChevronRight size={30} />
              </span>
            ) : (
              <span
                role="button"
                aria-label="Slide to the left"
                tabIndex={0}
                className="bg-white rounded-full shadow-lg flex items-center justify-center h-fit p-3 cursor-pointer transition ease-in-out delay-75 hover:shadow-md hover:transition hover:ease-in-out hover:delay-75"
                onClick={handleSlideRight}
                onKeyDown={(e) => handleKeyDown(e, handleSlideRight)}
              >
                <MdChevronLeft size={30} />
              </span>
            )}
          </div>
          <div className="max-[344px]:flex-col flex justify-between items-center mt-7">
            <Text variant={TEXT_VARIANTS.BODY} className="text-night-charcoal">
              Write Amount
            </Text>
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <Input
                  type="number"
                  placeholder="Amount"
                  className="pr-32 pl-6 bg-cloudy-grey max-w-72 !rounded-full"
                  value={amount}
                  onChange={handleChange}
                  aria-label="Amount to send"
                  required
                />
                <Button
                  type="submit"
                  variant={BUTTON_VARIANTS.PRIMARY}
                  disabled={isPending}
                  className="rounded-full px-6 h-[50px] absolute flex items-center gap-1 top-0 right-0"
                  aria-label={
                    isPending ? 'Sending money, please wait' : 'Send money'
                  }
                  aria-disabled={isPending}
                >
                  {isPending ? (
                    <Loading size={8} />
                  ) : (
                    <>
                      Send <MdSend />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
