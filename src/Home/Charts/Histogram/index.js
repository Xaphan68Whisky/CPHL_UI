import React from 'react';
import { Bar } from 'react-chartjs-2';

const CD4Histogram = ({ cd4Counts }) => {

    
  // Define data for the histogram
  const data = {
    labels: ['<100', '100-200', '200-300', '300-400', '400-500', '500-600', '600-700', '700-800', '800-900', '>=900'],
    datasets: [
      {
        label: 'CD4 Counts',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: cd4Counts, // Provide the CD4 count data here
      },
    ],
  };

  // Define options for the histogram
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <h2>CD4 Count Distribution</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CD4Histogram;