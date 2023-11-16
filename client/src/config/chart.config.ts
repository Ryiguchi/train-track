export const chartOptions = {
  backgroundColor: '#1C202E',
  borderColor: '#FF5700',
  borderWidth: 2,
  color: '#FF5700',
  spanGaps: true,
  pointRadius: 4,
  plugins: {
    tooltip: {
      enabled: true,
      padding: 16,
      intersect: false,
      titleColor: '#00A3FF',
      titleMarginBottom: 10,
      caretSize: 15,
      cornerRadius: 10,
      displayColors: false,
      bodyColor: '#FF5700',
      bodyFont: {
        weight: 'bold',
        size: 16,
      },
      titleFont: {
        weight: 'bold',
        size: 14,
      },
      callbacks: {
        title: function (context: ICustomToolTipItem[]) {
          const { label, dataset } = context[0];

          if (dataset.period === 'Last 10') {
            return new Date(label).toLocaleString('en-US', {
              month: 'short',
              // year: 'numeric',
              day: 'numeric',
            });
          }

          if (dataset.period === 'Month') {
            return new Date(`${dataset.month}, ${label}`).toLocaleString(
              'en-US',
              {
                month: 'long',
                day: 'numeric',
              }
            );
          }

          if (dataset.period === 'Year') {
            return new Date(`${label}, ${dataset.year}`).toLocaleString(
              'en-US',
              {
                month: 'long',
                year: 'numeric',
              }
            );
          }
        },
      },
    },
  },
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        color: 'rgba(0, 163, 255, .3 )',
      },
      ticks: {
        color: '#00A3FF',
      },
    },

    y: {
      grid: {
        color: 'rgba(0, 163, 255, .3 )',
      },
      ticks: {
        count: 5,
        color: '#00A3FF',
      },
    },
  },
};
