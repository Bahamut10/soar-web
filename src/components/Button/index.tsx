import { useMemo } from 'react';
import { BUTTON_SIZES, BUTTON_VARIANTS } from './enum';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof BUTTON_SIZES;
  variant: keyof typeof BUTTON_VARIANTS;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  const {
    children,
    className,
    disabled,
    size = BUTTON_SIZES.MD,
    variant,
    ...restProps
  } = props;

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
    if (disabled) {
      _class = clsx(
        _class,
        'text-rainy-grey bg-cloudy-grey cursor-not-allowed border-rainy-grey'
      );
      return clsx(_size, _class, className);
    }
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
  }, [_size, className, disabled, variant]);

  const _onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    restProps.onClick?.(e);
  };

  return (
    <button {...restProps} className={_className} onClick={_onClick}>
      {children}
    </button>
  );
}
