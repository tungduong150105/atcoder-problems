import type { data, Problem } from "../types/problem";
import ProblemCard from "./ProblemCard";

interface ProblemsProps {
  problems: data;
}

function makeArrar(problems : data) {
  const result = [];
  for (let i = 0; i < problems.value.length; i++) {
    result.push(problems.value[i]);
  }
  for (let i = problems.value.length; i < 8; i++) {
    result.push({
      id: "",
      title: "",
      url: "",
      difficult: -1,
      status: "None",
    } as Problem);
  }
  return result;
}

function isFullSolved(problems: data): boolean {
  for (let i = 0; i < problems.value.length; i++) {
    if (problems.value[i].status !== "Accept") {
      return false;
    }
  }
  return true;
}

export default function ListProblems({ problems }: ProblemsProps) {
  return (
    <>
      <div className="grid grid-cols-9 w-full">
        <div className="col-span-1 text-[15px]" key={problems.title}>
          <div className={`flex items-center justify-center w-full h-full text-blue-500 border-gray-400 border-[0.5px] ${isFullSolved(problems) ? "bg-[#c3e6cb]" : ""}`}>{problems.title}</div>
        </div>
        {makeArrar(problems).map((problem, index) => (
          <div
            className="col-span-1 border-[0.5px] border-gray-400"
            key={index}
          >
            <ProblemCard value={problem} />
          </div>
        ))}
      </div>
    </>
  );
}
