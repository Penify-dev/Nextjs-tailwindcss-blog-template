import { compareDesc, parseISO } from "date-fns";

/**
 * Combines multiple class names into a single string, filtering out any falsy values.
 *
 * @param {...string} classNames - Multiple class names to combine.
 * @returns {string} A single string containing all the non-falsy class names joined by spaces.
 *
 * @example
 * // returns "class1 class2"
 * cx("class1", undefined, "class2");
 */
export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

/**
 * Sorts an array of blog objects by their published date in descending order.
 *
 * @param {Array} blogs - An array of blog objects, each with a 'publishedAt' property.
 * @returns {Array} A new array of sorted blog objects.
 * @throws {TypeError} If the input is not an array or if any blog object does not have a 'publishedAt' property in the correct format.
 *
 * @example
 * const blogs = [
 *   { title: "Blog Post 1", publishedAt: "2023-01-01" },
 *   { title: "Blog Post 2", publishedAt: "2023-01-02" }
 * ];
 * const sortedBlogs = sortBlogs(blogs);
 * console.log(sortedBlogs); // Output will be the array sorted by 'publishedAt' in descending order
 */
export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
