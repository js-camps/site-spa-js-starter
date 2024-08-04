const lineChartData = {
  data: [
    {
      x: [1, 2, 3, 4, 5],
      y: [10, 15, 13, 17, 22],
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'red' },
    },
  ],
  layout: { title: 'Line Chart Example' },
};

const lineChartDataCanada = {
  data: [
    {
      x: [1, 2, 3, 4, 5],
      y: [12, 18, 14, 19, 25],
      type: 'scatter',
      mode: 'lines+markers',
      marker: { color: 'blue' },
    },
  ],
  layout: { title: 'Line Chart Canada' },
};

const barChartData = {
  data: [
    {
      x: ['A', 'B', 'C', 'D'],
      y: [20, 14, 23, 17],
      type: 'bar',
    },
  ],
  layout: { title: 'Bar Chart Example' },
};

const getDSData = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (url) {
        case 'https://example.com/linechart':
          resolve(lineChartData);
          break;
        case 'https://example.com/linechart?country=Canada':
          resolve(lineChartDataCanada);
          break;
        case 'https://example.com/barchart':
          resolve(barChartData);
          break;
        default:
          reject('Unknown URL');
      }
    }, 1000); // Simulate network delay
  });
};

export { getDSData };
