import { createBreakpoint } from 'react-use';
import { screens } from './tailwind.screens';

const parsePixelValue = (value: string) =>
  Number.parseInt(value.replace('px', ''), 10);

export const DEVICES = {
  PHONE: 'phone',
  TABLET: 'tablet',
  LAPTOP: 'laptop',
  DESKTOP: 'desktop',
};

export const breakpoints = {
  [DEVICES.PHONE]: 0,
  [DEVICES.TABLET]: parsePixelValue(screens.tablet),
  [DEVICES.LAPTOP]: parsePixelValue(screens.laptop),
  [DEVICES.DESKTOP]: parsePixelValue(screens.desktop),
};

const useBreakpoint = createBreakpoint(
  breakpoints
) as () => keyof typeof breakpoints;

export default useBreakpoint;
