'use client';

import Button from '@/components/Button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/components/Button/enum';
import Card from '@/components/Card';
import { THEMES } from '@/components/Card/enums';
import Loading from '@/components/Loading';
import { useAPIGetDashboardData } from '@/networks/dashboard/useAPIDashboard';
import { Cards } from '@/types/dashboard';
import { useRouter } from 'next/navigation';
import { MdArrowBack } from 'react-icons/md';

export default function CardList() {
  const { data: dashboardData, isLoading: isDashboardLoading } =
    useAPIGetDashboardData();

  const router = useRouter();

  const { cards } = dashboardData?.data || {};

  return (
    <div className="wrapper">
      <Button
        variant={BUTTON_VARIANTS.SECONDARY}
        size={BUTTON_SIZES.SM}
        onClick={() => router.back()}
        className="mb-6 flex gap-2 items-center"
      >
        <MdArrowBack /> Back
      </Button>
      <div className="flex flex-wrap w-full justify-between">
        {isDashboardLoading ? (
          <Loading />
        ) : (
          cards?.map((card: Cards, index: number) => {
            return (
              <div key={card.id} className="max-laptop:w-full w-1/2 p-3">
                <Card
                  balance={card.balance}
                  cardNumber={card.card_no}
                  valid={card.valid_thru}
                  holderName={card.card_holder}
                  cardOperator={card.card_operator}
                  theme={index % 2 === 0 ? THEMES.DARK : THEMES.LIGHT}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
