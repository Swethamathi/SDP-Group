import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const chartData = [
  { name: 'Fairytales', value: 4 },
  { name: 'Fables', value: 3 },
  { name: 'Fiction Stories', value: 2 },
  { name: 'Magazines', value: 2 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const storyData = [
  { id: 1, title: 'The Dragon’s Quest', category: 'Fairytales', date: '2024-07-25' },
  { id: 2, title: 'The Elves and the Shoemaker', category: 'Fables', date: '2024-07-26' },
  { id: 3, title: 'Time Travelers', category: 'Fiction Stories', date: '2024-07-27' }
];

const UserDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-indigo-600">Stories Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Total Fairytales</h3>
          <p className="text-2xl">4</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Total Fables</h3>
          <p className="text-2xl">3</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Total Fiction Stories</h3>
          <p className="text-2xl">2</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Total Magazines</h3>
          <p className="text-2xl">2</p>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-500">Stories Overview</h2>
        <PieChart width={800} height={400}>
          <Pie
            data={chartData}
            cx={400}
            cy={200}
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-indigo-500">Recent Stories</h2>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {storyData.map(story => (
              <tr key={story.id}>
                <td className="p-4 border-b border-gray-200">{story.id}</td>
                <td className="p-4 border-b border-gray-200">{story.title}</td>
                <td className="p-4 border-b border-gray-200">{story.category}</td>
                <td className="p-4 border-b border-gray-200">{story.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;
