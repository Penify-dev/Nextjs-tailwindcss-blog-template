import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

/**
 * A component representing a category link with optional styling.
 *
 * @param {Object} props - The properties for the Category component.
 * @param {string} [props.link="#"] - The URL to which the link should navigate. Default is '#'.
 * @param {string} props.name - The name of the category, displayed as the text of the link.
 * @param {boolean} [props.active=false] - Whether the category is currently active. If true, applies different styles.
 * @param {...Object} props - Additional properties to be spread onto the Link component.
 * @returns {React.ReactNode} - The rendered Category component as a styled <Link>.
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
