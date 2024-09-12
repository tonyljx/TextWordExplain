import SocialCardGenerator from "@/components/social-card-generator";
import React from "react";

export default function SocialCard() {
  return (
    <div className="p-6 md:p-8">
      {/* flex flex-col items-center justify-center min-h-[85vh] px-8 font-sans */}
      <main className="w-full max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center">生成社交卡片</h1>
        <h2 className="text-lg text-center font-sans font-semibold flex flex-col sm:flex-row gap-2 items-center justify-center mx-auto w-full">
          <span>输入简短的介绍，获取一个全新的社交卡片</span>
        </h2>

        <SocialCardGenerator />
      </main>
    </div>
  );
}
