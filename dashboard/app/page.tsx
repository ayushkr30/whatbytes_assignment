"use client";

import { useState } from "react";
import TestCard from "@/components/TestCard";
import QuickStats from "@/components/QuickStats";
import SyllabusAnalysis from "@/components/SyllabusAnalysis";
import QuestionAnalysis from "@/components/QuestionAnalysis";
import UpdateForm from "@/components/UpdateForm";
import ComparisonGraph from "@/components/ComparisonGraph";

const AdminPage = () => {
  const [stats, setStats] = useState({
    rank: 4,
    percentile: 90,
    correctAnswers: 12,
  });

  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleUpdateClick = () => {
    setShowUpdateForm(true);
  };

  const handleUpdateStats = (newStats: any) => {
    setStats(newStats);
    setShowUpdateForm(false);
  };

  return (
    <main className="flex flex-col lg:flex-row w-full relative">
      {/* Modal for UpdateForm */}
      {showUpdateForm && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-m z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
            <UpdateForm
              initialValues={stats}
              onClose={() => setShowUpdateForm(false)}
              onUpdate={handleUpdateStats}
            />
          </div>
        </div>
      )}

      {/* LEFT SIDE */}
      <section className="w-full lg:w-2/3 px-6 py-5 space-y-4">
        <TestCard onUpdateClick={handleUpdateClick} />
        <QuickStats stats={stats} />
        <ComparisonGraph percentile={stats.percentile} />
      </section>

      {/* RIGHT SIDE */}
      <aside className="w-full lg:w-1/3 px-6 py-5 space-y-5">
        <SyllabusAnalysis />
        <QuestionAnalysis  correctAnswers={stats.correctAnswers} />
       
      </aside>
    </main>
  );
};

export default AdminPage;
