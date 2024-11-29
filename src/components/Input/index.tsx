import clsx from 'clsx';
import { TEXT_VARIANTS } from '../Text/enum';
import Text from '../Text';
import { forwardRef } from 'react';

type InputProps = {
  className?: string;
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputWithRef(
  props: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  const { className, error, label, leftIcon, rightIcon, ...restProps } = props;

  return (
    <div className="relative">
      {leftIcon ? leftIcon : <></>}
      {label && (
        <label className="block text-body text-charcoal mb-3">{label}</label>
      )}
      <input
        ref={ref}
        className={clsx(
          'p-3 text-stormy-grey text-sm border border-rainy-grey rounded-2xl w-full focus:outline-none focus:ring-0',
          className
        )}
        {...restProps}
      />
      <Text variant={TEXT_VARIANTS.CAPTION} className="text-rose-red">
        {error}
      </Text>
      {rightIcon ? rightIcon : <></>}
    </div>
  );
}

export const Input = forwardRef(InputWithRef);
