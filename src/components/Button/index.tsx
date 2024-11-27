import { useMemo } from 'react';
import {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  ButtonSizes,
  ButtonVariants,
} from './enum';
import clsx from 'clsx';

type ButtonProps = {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  size?: keyof ButtonSizes;
  variant: keyof ButtonVariants;
};

export default function Button(props: ButtonProps) {
  const { as, children, className, size, variant, ...restProps } = props;

  const Element = as ?? 'button';

  const _size = useMemo(() => {
    switch (size) {
      case BUTTON_SIZES.SM:
        return 'px-12 py-3 text-body rounded-[20px]';
      case BUTTON_SIZES.MD:
        return 'px-12 py-5 text-body rounded-[20px]';
      case BUTTON_SIZES.LG:
        return 'px-12 py-5 text-h5 rounded-[20px]';
      default:
        return '';
    }
  }, [size]);

  const _className = useMemo(() => {
    let _class = 'font-bold border-2 border-charcoal';
    switch (variant) {
      case BUTTON_VARIANTS.PRIMARY:
        _class = clsx(
          _class,
          'bg-charcoal text-white hover:bg-white hover:text-charcoal'
        );
        break;
      case BUTTON_VARIANTS.SECONDARY:
        _class = clsx(
          _class,
          'bg-white text-charcoal hover:bg-charcoal hover:text-white'
        );
        break;
      default:
        break;
    }

    return clsx(_size, _class, className);
  }, [_size, className, variant]);

  return (
    <Element className={_className} {...restProps}>
      {children}
    </Element>
  );
}
