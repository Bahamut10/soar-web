import { fetch } from '../fetch';

class Dashboard {
  static getDashboardData() {
    return fetch.get('/dashboard');
  }
}

export default Dashboard;
