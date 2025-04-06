import React from "react";

/**
 * A React component that renders a div containing insights with rolling animation.
 *
 * @param {Object} props - The props object for the component.
 * @param {Array<string>} props.insights - An array of strings representing the insights to be displayed.
 * @returns {JSX.Element} - The rendered JSX element representing the InsightRoll component.
 */
const InsightRoll = ({ insights }) => {
  return (
    <div className="w-full bg-accent dark:bg-accentDark text-light dark:text-dark whitespace-nowrap overflow-hidden">
      <div className="animate-roll  w-full py-2 sm:py-3 flex items-center justify-center capitalize font-semibold tracking-wider text-sm sm:text-base">
        {insights.map((text) => (
          <div>
            {text} <span className="px-4">|</span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightRoll;
