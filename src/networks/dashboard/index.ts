import { fetch } from '../fetch';

class Dashboard {
  static getDashboardData() {
    return fetch.get('/dashboard');
  }

  static postQuickTransfer(params: {
    userId: number;
    amount: number | string;
  }) {
    const { userId, amount } = params;

    return fetch.post(`/quick-transfer/${userId}`, {
      amount,
    });
  }
}

export default Dashboard;
