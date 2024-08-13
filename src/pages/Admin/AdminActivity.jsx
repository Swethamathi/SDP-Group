import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import TypingAnimation from "@/components/magicui/typing-animation";

const AdminActivity = () => {
  const data = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024-May', '2024-Till'],
    datasets: [
      {
        label: 'Active Users',
        data: [1200, 1900, 300, 500, 200, 300, 700],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(199, 199, 199, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)',
        ],
        borderWidth: 1,
        hoverBorderColor: 'rgba(0, 0, 0, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#374151', // Dark gray color for the legend
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Users: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280', // X-axis label color
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [5, 5],
          color: '#D1D5DB', // Grid line color
        },
        ticks: {
          color: '#6B7280', // Y-axis label color
        },
      },
    },
    hover: {
      animationDuration: 400, // Hover animation duration
    },
    animation: {
      duration: 2000, // Animation duration when loading
      easing: 'easeInOutQuad', // Animation easing function
    },
  };

  return (
    <>
      <hr />
      <div className="rounded-lg shadow-lg  transition-all duration-300">
        <div className="p-8">
          <TypingAnimation
            className="text-5xl font-bold text-center"
            text="User Activity"
          />
        </div>
        <div className="p-6">
          <Bar data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default AdminActivity;
