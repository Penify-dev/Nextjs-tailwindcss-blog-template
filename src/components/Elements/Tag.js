import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

/**
 * A functional component that renders a styled link button.
 *
 * @param {Object} props - The props object containing the component properties.
 * @param {string} [props.link="#"] - The URL to navigate to when the tag is clicked. Defaults to '#'.
 * @param {string} props.name - The name or label of the tag displayed on the button.
 * @param {string} [props.className] - Additional CSS classes to apply to the button for custom styling.
 *
 * @returns {JSX.Element} - A JSX element representing the styled link button.
 *
 * @example
 * <Tag name="JavaScript" link="/javascript" />
 */
const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-2 sm:py-3 px-6 sm:px-10  bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base",
        props.className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;
