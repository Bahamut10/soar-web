import clsx from 'clsx';
import { TextVariants } from './enum';

type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  style?: object;
  variant: TextVariants;
  id?: string;
};

export default function Text(props: TextProps) {
  const { as, id, children, className, variant } = props;

  const Element = as ?? variant.element;
  const combinedClassName = clsx(variant.className, className);

  return (
    <Element className={combinedClassName} id={id}>
      {children}
    </Element>
  );
}
