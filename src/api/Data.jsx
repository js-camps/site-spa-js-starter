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
      if (url.includes('linechart')) {
        resolve(lineChartData);
      } else if (url.includes('barchart')) {
        resolve(barChartData);
      } else {
        reject('Unknown URL');
      }
    }, 1000); // Simulate network delay
  });
};

export { getDSData };
