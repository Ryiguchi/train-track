import type { ChartOptions, TooltipItem } from 'chart.js';

export {};

declare global {
  interface ICustomChart
    extends ChartJS<
      keyof 'line',
      (number | Point | [number, number] | null)[],
      unknown
    > {
    _metasets: [{ _dataset: { data: [number | null] } }];
  }

  type ChartOnClick = (
    event: ChartEvent,
    element: ActiveElement[],
    chart: ICustomChart
  ) => void;

  interface ICustomChartOptions extends Omit<ChartOptions, 'onClick'> {
    onClick: ChartOnClick;
    borderWidth: number;
    fill: boolean;
    spanGaps: boolean;
    pointRadius: number;
    label: string;
  }

  type IChartData =
    | ChartData<'line', (number | Point | null)[], unknown>
    | undefined;

  interface ICustomDataset extends UnionToIntersection<ChartDataset<'line'>> {
    period: string;
    month: string;
    year: string;
  }

  interface ICustomToolTipItem extends TooltipItem<'line'> {
    dataset: ICustomDataset;
  }
}
