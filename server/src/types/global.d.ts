export {};

declare global {
  interface IStringIndexSig<T> {
    [key: string]: T;
  }

  type TFieldWithName = {
    name: string;
  };
  interface IGroupDBResult {
    id: number;
    name: string;
  }
}
