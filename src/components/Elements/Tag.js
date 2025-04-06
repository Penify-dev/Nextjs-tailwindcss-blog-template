import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

/**
 * A React component that renders a styled link with dynamic properties.
 *
 * @param {Object} props - The component's properties.
 * @param {string} [props.link="#"] - The URL the link points to. Default is "#".
 * @param {string} props.name - The text displayed on the link.
 * @returns {React.ReactNode} - A React element representing the styled link.
 *
 * @example
 * <Tag name="Home" link="/home" />
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
