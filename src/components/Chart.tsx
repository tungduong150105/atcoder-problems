import { ABC_DATA, ARC_DATA } from "@/data/data";

function processData() {
  const combinedData = [...ABC_DATA, ...ARC_DATA];
  let solvedGray = 0, totalGray = 0;
  let solvedBrown = 0, totalBrown = 0;
  let solvedGreen = 0, totalGreen = 0;
  let solvedBlue = 0, totalBlue = 0;
  let solvedYellow = 0, totalYellow = 0;
  let solvedOrange = 0, totalOrange = 0;
  let solvedRed = 0, totalRed = 0;
  combinedData.map(contest => {
    contest.value.map(problem => {
      if (problem.difficult < 400) {
        totalGray++;
        if (problem.status === "Accept") {
          solvedGray++;
        }
      } else if (problem.difficult < 800) {
        totalBrown++;
        if (problem.status === "Accept") {
          solvedBrown++;
        }
      } else if (problem.difficult < 1200) {
        totalGreen++;
        if (problem.status === "Accept") {
          solvedGreen++;
        }
      } else if (problem.difficult < 1600) {
        totalBlue++;
        if (problem.status === "Accept") {
          solvedBlue++;
        }
      } else if (problem.difficult < 2000) {
        totalYellow++;
        if (problem.status === "Accept") {
          solvedYellow++;
        }
      } else if (problem.difficult < 2400) {
        totalOrange++;
        if (problem.status === "Accept") {
          solvedOrange++;
        }
      } else {
        totalRed++;
        if (problem.status === "Accept") {
          solvedRed++;
        }
      }
    });
  });
  return ({
    gray: { solved: solvedGray, total: totalGray },
    brown: { solved: solvedBrown, total: totalBrown },
    green: { solved: solvedGreen, total: totalGreen },
    blue: { solved: solvedBlue, total: totalBlue },
    yellow: { solved: solvedYellow, total: totalYellow },
    red: { solved: solvedRed, total: totalRed },
  });
}

export default function Chart() {
  const data = processData();

  console.log(data);

  return (
    <div>
      <h2>Chart Component</h2>
    </div>
  );
}