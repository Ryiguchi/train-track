import type { AxiosResponse } from 'axios';

export {};

declare global {
  interface AxiosSuccessResponse extends Omit<AxiosResponse, 'data'> {
    data: {
      error: null;
      statusCode: number;
      ok: true;
    };
  }

  interface AxiosFailedResponse extends Omit<AxiosResponse, 'data'> {
    data: {
      error: string;
      statusCode: number;
      ok: false;
    };
  }
}
