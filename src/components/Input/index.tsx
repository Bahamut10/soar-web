import clsx from 'clsx';

type InputProps = {
  className?: string;
  defaultValue?: string | number;
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
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        className={clsx(
          'p-3 text-gloomy-blue text-sm border border-cloudy-grey rounded-lg focus:outline-none focus:ring-0',
          className
        )}
      />
      {rightIcon ? rightIcon : <></>}
    </div>
  );
}
