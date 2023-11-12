import type { Group } from '../graphQL/gql/graphql';
import type { EColors } from './enums';

export {};

declare global {
  interface IGroupWithEnum extends Omit<Group, 'color'> {
    color: EColors;
  }
}
