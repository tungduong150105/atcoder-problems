import type { data } from "../types/problem";
import ProblemCard from "./ProblemCard";

interface ProblemsProps {
  problems: data;
}

export default function ListProblems({ problems }: ProblemsProps) {
  return (
    <>
      <div className="grid grid-cols-9 w-full">
        <div className="col-span-1 text-[15px]" key={problems.title}>
          <div className="flex items-center justify-center w-full h-full text-blue-500 border-gray-400 border-[0.5px]">{problems.title}</div>
        </div>
        {problems?.value.map((problem, index) => (
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
