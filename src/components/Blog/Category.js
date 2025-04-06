import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

/**
 * Represents a category component that renders a link with conditional styling based on its active state.
 *
 * @param {Object} props - The properties for the Category component.
 * @param {string} [props.link="#"] - The URL to which the link points. Defaults to '#'.
 * @param {string} props.name - The name of the category that will be displayed as the text of the link.
 * @param {boolean} [props.active=false] - Indicates whether the category is currently active. If true, it will have a different background and text color.
 * @returns {JSX.Element} - A React element representing the Category component.
 *
 * @example
 * <Category name="JavaScript" link="/javascript" />
 */
const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-1.5  md:py-2 px-6  md:px-10   rounded-full border-2 border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 m-2",
        props.className,
        active ? "bg-dark text-light dark:bg-light dark:text-dark" : "bg-light text-dark dark:bg-dark dark:text-light"
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
