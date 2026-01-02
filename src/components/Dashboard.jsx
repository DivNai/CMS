import React from 'react';
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  const [stats, setStats] = useState([]);
const [chartData, setChartData] = useState([]);

  // Mock Data to simulate your Firebase results
  // const stats = [
  //   { label: 'Status: Completed', value: 0, color: 'text-gray-800' },
  //   { label: 'Status: Pending', value: 0, color: 'text-gray-800' },
  //   { label: 'Status: Hold', value: 0, color: 'text-gray-800' },
  //   { label: 'Total Complaints', value: 0, color: 'text-gray-800' },
  // ];

  // const chartData = [
  //   { name: 'SOLAR', Completed: 0, Pending: 0, Hold: 0 },
  //   { name: 'RWS', Completed: 0, Pending: 0, Hold: 0 },
  //   { name: 'PROJECT', Completed: 0, Pending: 0, Hold: 0 },
  //   { name: 'OPERATION', Completed: 0, Pending: 0, Hold: 0 },
  //   { name: 'PUMP', Completed: 0, Pending: 0, Hold: 0 },
  //   { name: 'CCWS', Completed: 0, Pending: 0, Hold: 0 },
  //   { name: 'HWS SERVICE', Completed: 0, Pending: 0, Hold: 0 },
  //   { name: 'MAINTANCE', Completed: 0, Pending: 0, Hold: 0 },
  //   { name: 'INDUSTRY', Completed: 0, Pending: 0, Hold: 0 },
  //   { name: 'HWS', Completed: 0, Pending: 0, Hold: 0 },
  //   { name: 'Division', Completed: 0, Pending: 0, Hold: 0 },
  // ];

const calculateStats = (data) => {
  const completed = data.filter(c => c.status === "Completed").length;
  const pending = data.filter(c => c.status === "Pending").length;
  const hold = data.filter(c => c.status === "Hold").length;

  return [
    { label: "Status: Completed", value: completed },
    { label: "Status: Pending", value: pending },
    { label: "Status: Hold", value: hold },
    { label: "Total Complaints", value: data.length },
  ];
};

const calculateChartData = (data) => {
  const divisions = [
    "SOLAR", "RWS", "PROJECT", "OPERATION", "PUMP",
    "CCWS", "HWS SERVICE", "MAINTANCE",
    "INDUSTRY", "HWS", "Division"
  ];

  return divisions.map(div => {
    const filtered = data.filter(c => c.product === div);

    return {
      name: div,
      Completed: filtered.filter(c => c.status === "Completed").length,
      Pending: filtered.filter(c => c.status === "Pending").length,
      Hold: filtered.filter(c => c.status === "Hold").length,
    };
  });
};


const loadDashboardData = async () => {
  try {
    const snapshot = await getDocs(collection(db, "complaints"));

    const complaints = snapshot.docs.map(doc => ({
      id: doc.id,
      status: doc.data().status || "Pending",
      product: doc.data().product,
    }));

    // ✅ Calculate first
    const statsResult = calculateStats(complaints);
    const chartResult = calculateChartData(complaints);

    // ✅ Single render update
    setStats(statsResult);
    setChartData(chartResult);

  } catch (error) {
    console.error("Dashboard fetch error:", error);
  }
};

  useEffect(() => {
  loadDashboardData();
}, []);


  return (
    <div className="min-h-screen bg-[#f0f2f5] p-4 font-sans">
      {/* Top Filter Bar */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-wrap items-end gap-3 border border-gray-100">
        <div className="flex-1 min-w-[140px]">
          <label className="block text-[11px] font-medium text-gray-500 mb-1">Date From</label>
          <input type="date" className="w-full p-2 border border-gray-200 rounded text-sm outline-none focus:border-blue-400" />
        </div>
        <div className="flex-1 min-w-[140px]">
          <label className="block text-[11px] font-medium text-gray-500 mb-1">Date To</label>
          <input type="date" className="w-full p-2 border border-gray-200 rounded text-sm outline-none focus:border-blue-400" />
        </div>
        <div className="flex-1 min-w-[140px]">
          <label className="block text-[11px] font-medium text-gray-500 mb-1">Division</label>
          <select className="w-full p-2 border border-gray-200 rounded text-sm text-gray-400 bg-white">
            <option>Select division...</option>
          </select>
        </div>
        <div className="flex-1 min-w-[140px]">
          <label className="block text-[11px] font-medium text-gray-500 mb-1">Engineer</label>
          <select className="w-full p-2 border border-gray-200 rounded text-sm text-gray-400 bg-white">
            <option>Select engineer...</option>
          </select>
        </div>
        <div className="flex-1 min-w-[140px]">
          <label className="block text-[11px] font-medium text-gray-500 mb-1">Warranty Status</label>
          <select className="w-full p-2 border border-gray-200 rounded text-sm text-gray-400 bg-white">
            <option>Select warranty status...</option>
          </select>
        </div>
        <div className="flex-1 min-w-[140px]">
          <label className="block text-[11px] font-medium text-gray-500 mb-1">Status</label>
          <select className="w-full p-2 border border-gray-200 rounded text-sm text-gray-400 bg-white">
            <option>Select status...</option>
          </select>
        </div>
        
        <div className="flex gap-2 ml-auto pt-2">
          <button className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 border border-gray-200 rounded hover:bg-gray-50 transition-all">
            <span>↺</span> Clear Filters
          </button>
          <button className="px-4 py-2 bg-[#007bff] text-white rounded text-sm font-medium hover:bg-blue-600 shadow-sm flex items-center gap-1">
            <span>📊</span> View FMS
          </button>
          <button className="px-4 py-2 bg-[#20b2aa] text-white rounded text-sm font-medium flex items-center gap-1">
            <span>👥</span> Showing 0 leads
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[160px]">
            <h3 className="text-sm font-bold text-gray-800 mb-4">{item.label}</h3>
            <span className="text-4xl font-bold text-black">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <h3 className="text-center font-bold text-gray-800 mb-8 text-sm">Division-wise Status Distribution</h3>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#666', fontSize: 10 }} 
                angle={-45} 
                textAnchor="end" 
                interval={0}
              />
              <YAxis tick={{ fill: '#666', fontSize: 12 }} domain={[0, 1]} />
              <Tooltip cursor={{fill: '#f8f9fa'}} />
              <Legend verticalAlign="top" align="center" height={36}/>
              <Bar dataKey="Completed" fill="#28a745" barSize={15} radius={[2, 2, 0, 0]} />
              <Bar dataKey="Pending" fill="#ffc107" barSize={15} radius={[2, 2, 0, 0]} />
              <Bar dataKey="Hold" fill="#dc3545" barSize={15} radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Footer Empty State */}
      <div className="bg-white p-8 rounded-lg border border-gray-100 text-center">
        <p className="text-gray-400 text-sm">No leads match the current filters</p>
      </div>
    </div>
  );
};

export default Dashboard;