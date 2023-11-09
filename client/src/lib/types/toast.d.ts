import type { EToastType } from '@/lib/types/enums';

export {};

declare global {
  interface IToast {
    title: string;
    message: string;
    type: EToastType;
    id: number;
  }

  type IToastData = Omit<IToast, 'id'>;
}
