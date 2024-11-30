import { fetch } from '../fetch';

class Auth {
  // This login method doesn't require a form, as it is solely for token simulation.
  static login() {
    return fetch.post('/auth');
  }
}

export default Auth;
