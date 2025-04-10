import Image from "next/image";

const QuickStats = ({ stats }: any) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow flex flex-col gap-4 max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold">Quick Statistics</h2>
      <div className="flex justify-between text-center divide-x divide-gray-300">
        {/* Rank */}
        <div className="flex items-center gap-2 pr-4">
          <div className="bg-gray-100 p-4 rounded-full">
            <Image src="/rank-icon.png" alt="rank" width={20} height={20} />
          </div>
          <div>
            <p className="text-xl font-semibold">{stats.rank}</p>
            <span className="text-sm text-gray-500">YOUR RANK</span>
          </div>
        </div>

        {/* Percentile */}
        <div className="flex items-center gap-2 px-4">
          <div className="bg-gray-100 p-4 rounded-full">
            <Image src="/percentile-icon.png" alt="percentile" width={20} height={20} />
          </div>
          <div>
            <p className="text-xl font-semibold">{stats.percentile}%</p>
            <span className="text-sm text-gray-500">PERCENTILE</span>
          </div>
        </div>

        {/* Correct Answers */}
        <div className="flex items-center gap-2 pl-4">
          <div className="bg-gray-100 p-4 rounded-full">
            <Image src="/correct-icon.png" alt="correct answers" width={20} height={20} />
          </div>
          <div>
            <p className="text-xl font-semibold">{stats.correctAnswers} / 15</p>
            <span className="text-sm text-gray-500">CORRECT ANSWERS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
