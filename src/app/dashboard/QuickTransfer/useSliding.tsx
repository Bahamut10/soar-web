import { Contacts } from '@/types/dashboard';
import { useMemo, useState } from 'react';
import useBreakpoint, { breakpoints, DEVICES } from '../../../../breakpoints';

export default function useSliding({
  data: contacts,
}: {
  data: Array<Contacts>;
}) {
  const breakpoint = useBreakpoint();

  const [moveLeft, setMoveLeft] = useState(0);

  const showingProfileAmount = useMemo(() => {
    if (
      (breakpoints[breakpoint] >= breakpoints[DEVICES.TABLET] &&
        breakpoints[breakpoint] < breakpoints[DEVICES.LAPTOP]) ||
      breakpoints[breakpoint] >= breakpoints[DEVICES.DESKTOP]
    )
      return 3;
    return 2;
  }, [breakpoint]);

  const profileWidth = 120;

  const profileWidthToSkip = 140;

  const sumOfTotalProfileToSkip = useMemo(() => {
    const val = contacts?.length - showingProfileAmount;
    return val * profileWidth;
  }, [contacts?.length, showingProfileAmount]);

  const handleSlideLeft = () => {
    if (moveLeft <= sumOfTotalProfileToSkip)
      setMoveLeft((prev) => prev + profileWidthToSkip);
  };

  const handleSlideRight = () => {
    setMoveLeft(0);
  };

  return {
    handleSlideLeft,
    handleSlideRight,
    sumOfTotalProfileToSkip,
    moveLeft,
  };
}
