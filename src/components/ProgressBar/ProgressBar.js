import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "./ProgressBar.css";

export default ({ total, width, infoBarHeight }) => {
  let maxWidth = 60;
  if (width < 500) maxWidth = 60;
  if (width >= 500 && width < 1300) maxWidth = 70;
  if (width > 1300) maxWidth = 90;
  const height = Math.floor(infoBarHeight / 2);
  return (
    <CircularProgressbar
      value={total}
      text={`${total}%`}
      strokeWidth={10}
      background={false}
      className={" progress--style"}
      styles={{
        // Customize the root svg element
        root: {
          maxHeight: `${height}px`,
          minHeight: `${height}px`,
          minWidth: "50px",
          maxWidth: `${maxWidth}px`
        },
        // Customize the path, i.e. the "completed progress"
        path: {
          // Path color
          // stroke: "var(--safeGreen)",
          // stroke:"linear-gradient(180deg, var(--bundleBlue), var(--babyBlue))",
          stroke: "var(--denimBlue)",
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "round"
        },
        // Customize the circle behind the path, i.e. the "total progress"
        trail: {
          // stroke: "#ffffff",
          stroke: "var(--babyBlue)",
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "round",
          // Rotate the trail
          transform: "rotate(0.0turn)"
          // transformOrigin: 'center center',
        },
        // Customize the text
        text: {
          fill: "#ffffff",
          fontWeight: "700",
          fontSize: "3rem",
          dominantBaseline: "middle",
          textAnchor: "middle"
        },
        background: {
          fill: "#ffffff"
        }
      }}
    />
  );
};
