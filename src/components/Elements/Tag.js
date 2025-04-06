import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

/**
 * A functional component representing a styled link tag.
 *
 * @param {Object} props - The properties for the Tag component.
 * @param {string} [props.link="#"] - The URL to which the link points. Default is "#".
 * @param {string} props.name - The text content of the link.
 * @returns {JSX.Element} - A JSX element representing a styled link.
 *
 * @example
 * <Tag link="https://example.com" name="Example" />
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
