import { ax } from '@/config/axios.config';
import { isAxiosFailedResponse } from '@/lib/types/predicates';
import { isAxiosError } from 'axios';
import { ref } from 'vue';

export function useAxios() {
  let pending = ref<null | boolean>(null);
  let success = ref<null | boolean>(null);
  let error = ref<null | any>(null);

  async function axios(url: string, body: any = {}) {
    pending.value = true;
    error.value = null;
    success.value = null;

    try {
      const response = await ax.post(url, body, { withCredentials: true });

      if (isAxiosFailedResponse(response)) {
        throw new Error(response.data.error);
      }

      success.value = true;
      pending.value = false;

      return response.data.data;
    } catch (err: any) {
      success.value = false;
      pending.value = false;
      error.value = err;

      return null;
    }
  }
  return {
    axios,
    pending,
    success,
    error,
  };
}
