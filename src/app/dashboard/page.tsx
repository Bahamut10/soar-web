import Card from '@/components/Card';
import { THEMES } from '@/components/Card/enums';
import GridBox from './GridBox';
import TransactionList from './TransactionsList';

export default function DashboardPage() {
  return (
    <div className="wrapper">
      <div className="flex gap-5">
        <GridBox title="My Cards" cta="See All" containerClassName="flex-[2]">
          <div className="flex gap-3">
            <Card
              balance={6000}
              cardNumber="3778 **** **** 1234"
              valid="12/22"
              holderName="Eddy Cusuma"
              theme={THEMES.DARK}
            />
            <Card
              balance={6000}
              cardNumber="3778 **** **** 1234"
              valid="12/22"
              holderName="Eddy Cusuma"
              theme={THEMES.LIGHT}
            />
          </div>
        </GridBox>
        <GridBox title="Recent Transaction">
          <TransactionList />
        </GridBox>
      </div>
    </div>
  );
}
