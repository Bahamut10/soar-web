import clsx from 'clsx';

type InputProps = {
  className?: string;
  defaultValue?: string | number;
  label?: string;
  onChange?: () => void;
  placeholder?: string;
  type: string;
  value?: string | number;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function Input(props: InputProps) {
  const {
    className,
    defaultValue,
    label,
    onChange,
    placeholder,
    type,
    value,
    leftIcon,
    rightIcon,
  } = props;

  return (
    <div className="relative">
      {leftIcon ? leftIcon : <></>}
      {label && (
        <label className="block text-body text-charcoal mb-3">{label}</label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        className={clsx(
          'p-3 text-gloomy-blue text-sm border border-rainy-grey rounded-2xl w-full focus:outline-none focus:ring-0',
          className
        )}
      />
      {rightIcon ? rightIcon : <></>}
    </div>
  );
}
