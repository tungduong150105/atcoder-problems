import { useState } from "react";
import "./App.css";
import ListProblems from "./components/ListProblems";
import { ABC_DATA, ARC_DATA } from "./data/data";

function App() {
  const [cuerrentContest, setCurrentContest] = useState<string>("ABC");
  
  return (
    <>
      <div className="w-full bg-gray-100 p-5">
        <div className="flex flex-row items-center justify-between">
          <div className="text-2xl font-light mb-5">AtCoder Note</div>
          <div className="text-xl font-light text-orange-500">
            <img
              src="https://img.atcoder.jp/assets/icon/crown_bronze.png"
              alt="bronze crown"
              className="inline-block w-6 h-6 mr-2 mb-1"
            />
            snuke159  
          </div>
        </div>
        <div className="pb-5">
          <button
            className={`px-4 py-2 mr-2 rounded ${
              cuerrentContest === "ABC"
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 border border-blue-500"
            }`}
            onClick={() => setCurrentContest("ABC")}
          >
            ABC
          </button>
          <button
            className={`px-4 py-2 rounded ${
              cuerrentContest === "ARC"
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 border border-blue-500"
            }`}
            onClick={() => setCurrentContest("ARC")}
          >
            ARC
          </button>
        </div>
        <div className="flex flex-col items-center min-h-screen">
          {cuerrentContest === "ABC" ? ABC_DATA?.map((value, index) => (
            <ListProblems problems={value} key={index} />
          )) : ARC_DATA?.map((value, index) => (
            <ListProblems problems={value} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
