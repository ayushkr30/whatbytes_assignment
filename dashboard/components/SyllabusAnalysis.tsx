'use client';

import React from 'react';

const syllabusData = [
  {
    title: 'HTML Tools, Forms, History',
    percent: 80,
    color: 'bg-blue-600',
    bg: 'bg-blue-100',
    text: 'text-blue-600',
  },
  {
    title: 'Tags & References in HTML',
    percent: 60,
    color: 'bg-orange-500',
    bg: 'bg-orange-100',
    text: 'text-orange-500',
  },
  {
    title: 'Tables & References in HTML',
    percent: 24,
    color: 'bg-red-500',
    bg: 'bg-red-100',
    text: 'text-red-500',
  },
  {
    title: 'Tables & CSS Basics',
    percent: 96,
    color: 'bg-green-500',
    bg: 'bg-green-100',
    text: 'text-green-500',
  },
];

const SyllabusAnalysis = () => {
  return (
    <div className=" border rounded-lg shadow-sm p-5 max-w-2xl mx:auto bg-white  border-gray-300">
      <h2 className="text-lg font-semibold mb-4">Syllabus Wise Analysis</h2>
      <div className="flex flex-col gap-4">
        {syllabusData.map((item, index) => (
          <div key={index}>
            <p className="text-sm font-medium mb-1 text-gray-700">{item.title}</p>
            <div className="flex items-center gap-2">
              <div className={`w-full h-2 rounded-full ${item.bg}`}>
                <div
                  className={`${item.color} h-2 rounded-full`}
                  style={{ width: `${item.percent}%` }}
                />
              </div>
              <span className={`text-sm font-semibold ${item.text}`}>
                {item.percent}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusAnalysis;
