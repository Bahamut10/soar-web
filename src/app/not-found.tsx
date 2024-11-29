import Text from '@/components/Text';
import { TEXT_VARIANTS } from '@/components/Text/enum';

export default function NotFound() {
  return (
    <div className="max-laptop:h-[calc(100vh-156px)] flex flex-col h-[calc(100vh-92px)] w-full items-center justify-center">
      <div className="tile w-fit">
        <Text
          variant={TEXT_VARIANTS.HEADING5}
          className="font-black text-center"
        >
          THE PAGE YOU ARE LOOKING FOR IS NOT FOUND
        </Text>
        <Text variant={TEXT_VARIANTS.BODY} className="text-center">
          This might due to wrong address or the page is under construction
        </Text>
      </div>
    </div>
  );
}
