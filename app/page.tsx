import WordRotate from "@/components/fancy/word-rotate";
import SvgGenerator from "@/components/svg-generator";

// import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="p-6 md:p-8">
      {/* flex flex-col items-center justify-center min-h-[85vh] px-8 font-sans */}
      <main className="w-full max-w-6xl mx-auto text-gray-800">
        <h1 className="text-3xl font-bold text-center">汉语新解</h1>
        <h2 className="text-lg text-center font-sans font-semibold flex flex-col sm:flex-row gap-2 items-center justify-center mx-auto w-full">
          <span>输入一个汉语词汇，获取一个全新的解释</span>
          <WordRotate
            className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-sky-500"
            words={["国足", "程序员", "打工人", "天选之子"]}
          />
        </h2>

        <SvgGenerator />
      </main>
    </div>
  );
}
