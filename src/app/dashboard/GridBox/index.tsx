import Text from '@/components/Text';
import { TEXT_VARIANTS } from '@/components/Text/enum';
import clsx from 'clsx';
import Link from 'next/link';
import { Url } from 'url';

type GridBoxProps = {
  children: React.ReactNode;
  containerClassName?: string;
  cta?: string;
  ctaUrl?: string;
  title: string;
};

export default function GridBox(props: GridBoxProps) {
  const { children, containerClassName, cta, ctaUrl, title } = props;

  return (
    <div className={clsx('flex flex-col gap-5', containerClassName)}>
      <div className="flex justify-between items-end">
        <Text
          variant={TEXT_VARIANTS.HEADING5}
          className="text-navy-blue font-semibold"
          id={`${title.replace(/\s+/g, '-').toLowerCase()}-title`}
        >
          {title}
        </Text>
        <Link href={ctaUrl || '/dashboard'} tabIndex={cta ? 0 : -1}>
          <Text
            variant={TEXT_VARIANTS.SUBHEADING}
            className="text-navy-blue font-semibold transition ease-in-out delay-75 hover:opacity-50 hover:transition hover:ease-in-out hover:delay-75"
          >
            {cta}
          </Text>
        </Link>
      </div>
      {children}
    </div>
  );
}
