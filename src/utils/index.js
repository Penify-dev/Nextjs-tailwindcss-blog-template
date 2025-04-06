import { compareDesc, parseISO } from "date-fns";

/**
 * Combines multiple class names into a single string, filtering out any falsy values.
 *
 * @param {...string} classNames - A rest parameter of class names to be combined.
 * @returns {string} - A single string containing all the non-falsy class names separated by spaces.
 *
 * @example
 * // Returns "class1 class2"
 * cx("class1", "", "class2");
 *
 * @example
 * // Returns "classA classB classC"
 * cx("classA", " ", "classB", undefined, null, "classC");
 */
export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

/**
 * Sorts an array of blog objects by their published date in descending order.
 *
 * @param {Array<Object>} blogs - An array of blog objects to be sorted.
 * @return {Array<Object>} - The sorted array of blog objects.
 * @throws {Error} - Throws an error if the input is not a valid array.
 */
export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
