import Image from "next/image";

const TestCard = ({ onUpdateClick }: { onUpdateClick: () => void }) => {
  return (
    <div className="flex items-center justify-between border rounded-lg shadow-sm p-4 max-w-2xl mx-auto bg-white border-gray-300">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <Image src="/html-5.png" alt="HTML Logo" width={50} height={50} />
        <div>
          <h3 className="font-semibold text-lg">Hyper Text Markup Language</h3>
          <p className="text-gray-600 text-sm">
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </p>
        </div>
      </div>

      {/* Update Button */}
      <button
        onClick={onUpdateClick}
        className="bg-blue-700 text-white px-4 py-1 rounded-lg font-semibold shadow-md hover:bg-blue-800 border-2 border-black"
      >
        Update
      </button>
    </div>
  );
};

export default TestCard;
