import { MdSearch } from 'react-icons/md';
import Text from '../Text';
import { TEXT_VARIANTS } from '../Text/enum';
import Input from '../Input';

export default function Navbar() {
  return (
    <div className="flex justify-between p-5 border-0 border-b-2 border-solid border-shiny-grey">
      <Text
        variant={TEXT_VARIANTS.HEADING4}
        className="text-navy-blue font-semibold"
      >
        Overview
      </Text>
      <div className="flex gap-4">
        <Input
          type="text"
          placeholder="Search for something"
          className="pl-10 bg-cloudy-grey !rounded-full"
          defaultValue={''}
          leftIcon={
            <MdSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gloomy-blue"
              size={20}
            />
          }
          // onChange={handleChange}
        />
        <div className="icon">
          <MdSearch className="z-10" size={20} />
        </div>
        <div className="icon">
          <MdSearch className="z-10" size={20} />
        </div>
        <div className="icon">
          <MdSearch className="z-10" size={20} />
        </div>
      </div>
    </div>
  );
}
