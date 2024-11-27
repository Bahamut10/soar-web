import { useCallback, useMemo, useState } from 'react';
import useBreakpoint, { breakpoints, DEVICES } from '../../../../breakpoints';
import { dataPerson } from './data';

export default function useSliding() {
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
    const val = dataPerson.length - showingProfileAmount;
    return val * profileWidth;
  }, [profileWidth, showingProfileAmount]);

  const handleSlideLeft = useCallback(() => {
    if (moveLeft <= sumOfTotalProfileToSkip)
      setMoveLeft((prev) => prev + profileWidthToSkip);
  }, [moveLeft, profileWidthToSkip, sumOfTotalProfileToSkip]);

  const handleSlideRight = useCallback(() => {
    setMoveLeft(0);
  }, []);

  return {
    handleSlideLeft,
    handleSlideRight,
    sumOfTotalProfileToSkip,
    moveLeft,
  };
}
