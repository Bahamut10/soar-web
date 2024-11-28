import clsx from 'clsx';

type InputProps = {
  className?: string;
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  const { className, label, leftIcon, rightIcon, ...restProps } = props;

  return (
    <div className="relative">
      {leftIcon ? leftIcon : <></>}
      {label && (
        <label className="block text-body text-charcoal mb-3">{label}</label>
      )}
      <input
        className={clsx(
          'p-3 text-gloomy-blue text-sm border border-rainy-grey rounded-2xl w-full focus:outline-none focus:ring-0',
          className
        )}
        {...restProps}
      />
      {rightIcon ? rightIcon : <></>}
    </div>
  );
}
