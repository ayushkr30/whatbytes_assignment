// components/QuestionAnalysis.tsx
import { PieChart, Pie, Cell } from "recharts";
import Image from "next/image";

const COLORS = ["#3B82F6", "#E5E7EB"]; // blue and light gray

const QuestionAnalysis = ({ correctAnswers }: { correctAnswers: number }) => {
  const data = [
    { name: "Correct", value: correctAnswers },
    { name: "Remaining", value: 15 - correctAnswers },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4 max-w-2xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Question Analysis</h2>
        <p className="text-sm font-semibold">{correctAnswers}/15</p>
      </div>

      <p className="text-sm">
        <b>You have scored {correctAnswers} questions correct out of 15.</b>{" "}
        However, it still needs some improvements.
      </p>

      <div className="relative w-40 h-40 mx-auto">
        <PieChart width={160} height={160}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={70}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image src="/target.png" alt="HTML Logo" width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
