import { fetch } from '../fetch';

class Auth {
  static login() {
    // this login mutation doesn't take any form as it is only for token simulation only
    return fetch.post('/auth');
  }
}

export default Auth;
