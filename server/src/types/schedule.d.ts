export {};

declare global {
  interface IScheduleInput {
    date: string;
    groupId: number;
  }

  interface IScheduleFormatted {
    id: number;
    date: string;
    group: string;
  }

  interface IScheduleUpdateInput extends Partial<IScheduleInput> {
    id: Int!;
  }
}
