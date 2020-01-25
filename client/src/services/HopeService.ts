import axios, { AxiosInstance } from 'axios';

import { Endpoint } from '~/consts/Endpoint';

class HopeService {
  private readonly api: AxiosInstance;
  private static instance: HopeService;

  private constructor() {
    this.api = axios.create({
      baseURL: '',
    });
  }

  static getInstance(): HopeService {
    if (!HopeService.instance) {
      HopeService.instance = new HopeService();
    }
    return HopeService.instance;
  }

  async createAccount(
    name: string,
    email: string,
    password: string,
    profile_id: number,
  ): Promise<string> {
    const response = await this.api.post(Endpoint.USER_CREATE, {
      name,
      email,
      password,
      profile_id,
      password_confirmation: password,
      role_id: 2,
    });
    const { token } = response.data;
    return token;
  }
}

export default HopeService.getInstance();