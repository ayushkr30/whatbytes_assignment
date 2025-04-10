"use client";

import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";

const ComparisonGraph = ({ percentile }: { percentile: number }) => {
  const averagePercentile = 72;
  const diff = averagePercentile - percentile;

  const data = [
    { x: 0, noOfStudent:  (percentile *20) /100},
    { x: 10,  noOfStudent: (percentile * 50) / 100 },
    { x: 15, noOfStudent: (percentile * 70) / 100 },
    { x: 20, noOfStudent: (percentile * 40) / 100 }, 
    { x: 25, noOfStudent: (percentile * 19) / 100 },
    { x: 32, noOfStudent: (percentile * 25) / 100 },
    { x: 38, noOfStudent: (percentile * 8) / 100 },
    { x: 42, noOfStudent: (percentile * 10) / 100 },
    { x: 45, noOfStudent: (percentile * 85) / 100 },
    { x: 50, noOfStudent: (percentile * 29) / 100 },
    { x: 55, noOfStudent: (percentile * 65) / 100 },
    { x: 59, noOfStudent: (percentile * 25) / 100 },
    { x: 65, noOfStudent: (percentile * 95) / 100 },
    { x: 70, noOfStudent: (percentile * 10) / 100 },
    { x: 75, noOfStudent: (percentile * 30) / 100 },
    { x: 81, noOfStudent: (percentile * 15) / 100 },
    { x: 86, noOfStudent: (percentile * 17) / 100 },
    { x: 90, noOfStudent: (percentile * 30) / 100 },
    { x: 95, noOfStudent: (percentile * 15) / 100 },
    { x: 100, noOfStudent: (percentile * 68)/100   },
  ];

  return (
    <div className="bg-white rounded-lg p-4 shadow space-y-4 ">
      <h2 className="text-lg font-semibold">Comparison Graph</h2>

      <div className="flex justify-between items-center pr-3 ">
        <p className="text-sm">
          <b className=" text-gray-700" >
            You have scored {diff > 0 ? `${diff}% percentile` : "higher than"}{" "}
          </b>
          lower than the <br/>average percentile {averagePercentile}% of all engineers
          who took this assessment.
        </p>
        <div className="bg-gray-100 p-2 rounded-full ">
          <Image  className=""
            src="/chart.png"
            alt="icon"
            width={30}
            height={30}
          />
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="x" ticks={[0, 25, 50, 75, 100]} />
          <Tooltip />
          <Line type="monotone" dataKey="noOfStudent" stroke="#C3B1E1" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonGraph;
