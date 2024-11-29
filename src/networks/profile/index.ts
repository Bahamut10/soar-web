import { fetch } from '../fetch';

class Profile {
  static getProfile() {
    return fetch.get(`/profile`);
  }

  static postEditProfile(params: { form: FormData }) {
    const { form } = params;

    return fetch.post(`/profile`, form);
  }
}

export default Profile;
