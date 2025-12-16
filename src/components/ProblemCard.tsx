import type { Problem } from "../types/problem";

interface ProblemProp {
  value: Problem;
}

export default function ProblemCard({ value }: ProblemProp) {

  if (!value.title) {
    return (
      <>
        <div className="w-full h-[50px] flex items-center justify-center"></div>
      </>
    );
  }

  function getColor(rating: number) {
    if (rating < 400) return "#808080";
    if (rating < 800) return "#804000";
    if (rating < 1200) return "#008000";
    if (rating < 1600) return "#00c0c0";
    if (rating < 2000) return "#0000ff";
    if (rating < 2400) return "#c0c000";
    if (rating < 2800) return "#ff8000";
    return "#ff0000";
  }

  function getPercent(rating: number): number {
    if (rating < 400) return Math.floor((rating / 400) * 100);
    if (rating < 800) return Math.floor(((rating - 400) / 400) * 100);
    if (rating < 1200) return Math.floor(((rating - 800) / 400) * 100);
    if (rating < 1600) return Math.floor(((rating - 1200) / 400) * 100);
    if (rating < 2000) return Math.floor(((rating - 1600) / 400) * 100);
    if (rating < 2400) return Math.floor(((rating - 2000) / 400) * 100);
    if (rating < 2800) return Math.floor(((rating - 2400) / 400) * 100);
    if (rating < 3000) return Math.floor(((rating - 2800) / 200) * 100);
    return 100;
  }

  return (
    <>
      <div
        className="w-full h-[50px] flex items-center justify-center"
        style={{
          background: `${value.status == "Accept" ? "#c3e6cb" : ""} ${
            value.status == "Wrong" ? "#f94449" : ""
          }`,
        }}
      >
        <div className="w-[20%] flex items-center justify-center">
          <div
            className="h-[13px] w-[13px] rounded-full"
            style={{
              background: `${
                value.difficult < 3200
                  ? `linear-gradient(to top, ${getColor(
                      value.difficult
                    )}, ${getColor(value.difficult)} ${getPercent(
                      value.difficult
                    )}%, #00000000 ${getPercent(
                      value.difficult
                    )}%, #00000000 ${getPercent(value.difficult)}%)`
                  : `${
                      value.difficult < 3600
                        ? "linear-gradient(to right, rgb(150, 92, 44), rgb(255, 218, 189), rgb(150, 92, 44))"
                        : `${
                            value.difficult < 4000
                              ? "linear-gradient(to right, rgb(128, 128, 128), white, rgb(128, 128, 128))"
                              : "linear-gradient(to right, rgb(225, 42, 251), white, rgb(0, 184, 219))"
                          }`
                    }`
              }`,
              border: `${
                value.difficult < 3200
                  ? `1px solid ${getColor(value.difficult)}`
                  : `${
                      value.difficult < 3600
                        ? "1px solid rgb(150, 92, 44)"
                        : `${
                            value.difficult < 4000
                              ? "1px solid rgb(128, 128, 128)"
                              : "1px solid rgb(29, 41, 61)"
                          }`
                    }`
              }`,
            }}
          ></div>
        </div>
        <a
          href={value.link ? value.link : ""}
          className="px-1 text-[15px] w-[80%] truncate text-light cursor-pointer hover:underline"
          style={{ color: getColor(value.difficult) }}
          target={value.link ? "_blank" : undefined}
          rel={value.link ? "noopener noreferrer" : undefined}
        >
          {value.title}
        </a>
      </div>
    </>
  );
}
