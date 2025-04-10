"use client";
import { useState } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";

const UpdateForm = ({ onClose, onUpdate, initialValues }: any) => {
  const [rank, setRank] = useState<number>(initialValues?.rank || 0);
  const [percentile, setPercentile] = useState<number>(initialValues?.percentile || 0);
  const [correctAnswers, setCorrectAnswers] = useState<number>(initialValues?.correctAnswers || 0);

  const [errors, setErrors] = useState({
    rank: "",
    percentile: "",
    correctAnswers: "",
  });

  const validateField = (field: string, value: string | number) => {
    if (value === "" || isNaN(Number(value))) {
      setErrors((prev) => ({
        ...prev,
        [field]: "Required | Should be a number",
      }));
    } else if (field === "correctAnswers" && Number(value) > 15) {
      setErrors((prev) => ({
        ...prev,
        [field]: "Score cannot exceed 15",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleSave = () => {
    validateField("rank", rank);
    validateField("percentile", percentile);
    validateField("correctAnswers", correctAnswers);

    if (!errors.rank && !errors.percentile && !errors.correctAnswers) {
      onUpdate({
        rank: Number(rank),
        percentile: Number(percentile),
        correctAnswers: Number(correctAnswers),
      });
      toast.success("Scores updated successfully!");
    }
  };

  return (
    <div className="relative">
  <h2 className="text-xl font-bold mb-4 flex justify-between items-center">
    Update Scores
    <Image src="/html-5.png" alt="HTML" width={40} height={40} />
  </h2>

  {/* Rank Field */}
  <div className="mb-4 flex items-center justify-between gap-4">
    <label className="w-1/2 font-medium">Update your Rank</label>
    <div className="flex flex-col w-1/2">
      <input
        value={rank}
        onChange={(e) => {
          setRank(e.target.value);
          validateField("rank", e.target.value);
        }}
        className="border rounded px-3 py-2"
        placeholder="Enter Rank"
      />
      {errors.rank && <p className="text-red-500 text-sm mt-1">{errors.rank}</p>}
    </div>
  </div>

  {/* Percentile Field */}
  <div className="mb-4 flex items-center justify-between gap-4">
    <label className="w-1/2 font-medium">Update your Percentile</label>
    <div className="flex flex-col w-1/2">
      <input
        value={percentile}
        onChange={(e) => {
          setPercentile(e.target.value);
          validateField("percentile", e.target.value);
        }}
        className="border rounded px-3 py-2"
        placeholder="Enter Percentile"
      />
      {errors.percentile && <p className="text-red-500 text-sm mt-1">{errors.percentile}</p>}
    </div>
  </div>

  {/* Score Field */}
  <div className="mb-4 flex items-center justify-between gap-4">
    <label className="w-1/2 font-medium">Update your Current Score (out of 15)</label>
    <div className="flex flex-col w-1/2">
      <input
        value={correctAnswers}
        onChange={(e) => {
          setCorrectAnswers(e.target.value);
          validateField("correctAnswers", e.target.value);
        }}
        className="border rounded px-3 py-2"
        placeholder="Enter Correct Answers"
      />
      {errors.correctAnswers && (
        <p className="text-red-500 text-sm mt-1">{errors.correctAnswers}</p>
      )}
    </div>
  </div>

  {/* Buttons */}
  <div className="flex justify-end gap-4 mt-6">
    <button
      className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
      onClick={onClose}
    >
      Cancel
    </button>
    <button
      className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-800 text-white flex items-center gap-1"
      onClick={handleSave}
    >
      Save →
    </button>
  </div>
</div>

  );
};

export default UpdateForm;
