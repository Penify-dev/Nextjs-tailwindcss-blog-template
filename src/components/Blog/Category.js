import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

/**
 * A functional component that renders a category link with optional styling and active state handling.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.link="#"] - The URL to navigate to when the link is clicked. Defaults to "#".
 * @param {string} props.name - The name of the category displayed on the link.
 * @param {boolean} [props.active=false] - Determines if the category is currently active, affecting its style. Defaults to false.
 * @param {...Object} props - Additional properties that can be passed to the underlying Link component.
 *
 * @returns {JSX.Element} A JSX element representing a styled link for a category.
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
