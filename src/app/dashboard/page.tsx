'use client';

import Card from '@/components/Card';
import { THEMES } from '@/components/Card/enums';
import Loading from '@/components/Loading';
import { useAPIGetDashboardData } from '@/networks/dashboard/useAPIDashboard';
import { Cards } from '@/types/dashboard';
import BalanceHistoryChart from './Charts/BalanceHistoryChart';
import ExpenseStatisticChart from './Charts/ExpenseStatisticChart';
import WeeklyActivityChart from './Charts/WeeklyActivityChart';
import GridBox from './GridBox';
import QuickTransfer from './QuickTransfer';
import TransactionList from './TransactionsList';

export default function DashboardPage() {
  const { data: dashboardData, isLoading: isDashboardLoading } =
    useAPIGetDashboardData();
  const {
    cards,
    recent_transactions,
    weekly_activities,
    expense_statistics,
    contacts,
    balance_history,
  } = dashboardData?.data || {};

  return (
    <div className="wrapper">
      <div className="max-[1491px]:flex-col flex gap-5">
        <GridBox
          title="My Cards"
          cta="See All"
          ctaUrl={'/dashboard/card-list'}
          containerClassName="flex-[2]"
        >
          <div className="max-laptop:flex-col flex gap-3">
            {isDashboardLoading ? (
              <Loading />
            ) : (
              cards?.slice(0, 2).map((card: Cards, index: number) => {
                return (
                  <Card
                    key={card.id}
                    balance={card.balance}
                    cardNumber={card.card_no}
                    valid={card.valid_thru}
                    holderName={card.card_holder}
                    cardOperator={card.card_operator}
                    theme={index % 2 === 0 ? THEMES.DARK : THEMES.LIGHT}
                  />
                );
              })
            )}
          </div>
        </GridBox>
        <GridBox title="Recent Transaction" containerClassName="flex-1">
          <TransactionList
            data={recent_transactions}
            isLoading={isDashboardLoading}
          />
        </GridBox>
      </div>
      <div className="max-desktop:flex-col flex gap-5 mt-6">
        <GridBox title="Weekly Activity" containerClassName="flex-[2]">
          <WeeklyActivityChart
            data={weekly_activities}
            isLoading={isDashboardLoading}
          />
        </GridBox>
        <GridBox title="Expense Statistics" containerClassName="flex-1">
          <ExpenseStatisticChart
            data={expense_statistics}
            isLoading={isDashboardLoading}
          />
        </GridBox>
      </div>
      <div className="max-laptop:flex-col flex gap-5 mt-6">
        <GridBox title="Quick Transfer" containerClassName="flex-1">
          <QuickTransfer data={contacts} isLoading={isDashboardLoading} />
        </GridBox>
        <GridBox title="Balance History" containerClassName="flex-[2]">
          <BalanceHistoryChart
            data={balance_history}
            isLoading={isDashboardLoading}
          />
        </GridBox>
      </div>
    </div>
  );
}
