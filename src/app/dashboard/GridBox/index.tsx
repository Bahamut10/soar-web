import Card from '@/components/Card';
import { THEMES } from '@/components/Card/enums';
import Text from '@/components/Text';
import { TEXT_VARIANTS } from '@/components/Text/enum';
import clsx from 'clsx';

type GridBoxProps = {
  children: React.ReactNode;
  containerClassName?: string;
  cta?: string;
  title: string;
};

export default function GridBox(props: GridBoxProps) {
  const { children, containerClassName, cta, title } = props;

  return (
    <div className={clsx('flex flex-col gap-5', containerClassName)}>
      <div className="flex justify-between items-end">
        <Text
          variant={TEXT_VARIANTS.HEADING5}
          className="text-navy-blue font-semibold"
        >
          {title}
        </Text>
        <Text
          variant={TEXT_VARIANTS.SUBHEADING}
          className="text-navy-blue font-semibold"
        >
          {cta}
        </Text>
      </div>
      {children}
    </div>
  );
}
