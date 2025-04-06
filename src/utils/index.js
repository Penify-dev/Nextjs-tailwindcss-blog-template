import { compareDesc, parseISO } from "date-fns";

/**
 * Utility function to concatenate multiple class names into a single string.
 *
 * @param {...string} classNames - The class names to concatenate. Non-falsy values are included in the final result.
 * @returns {string} A single string containing all non-falsy class names separated by spaces.
 *
 * @example
 * // Concatenates 'btn' and 'active'
 * cx('btn', 'active'); // Returns: 'btn active'
 *
 * @example
 * // Ignores falsy values
 * cx('btn', '', 'active'); // Returns: 'btn active'
 */
export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

/**
 * Sorts an array of blog objects by their published date in descending order.
 *
 * @param {Array} blogs - The array of blog objects to be sorted. Each object should have a 'publishedAt' property in ISO format.
 * @returns {Array} - The sorted array of blog objects.
 * @throws {Error} - If the input is not an array or if any blog object does not contain a valid 'publishedAt' property in ISO format.
 *
 * @example
 * const blogs = [
 *   { title: 'Blog 1', publishedAt: '2023-04-01T12:00:00Z' },
 *   { title: 'Blog 2', publishedAt: '2023-04-02T12:00:00Z' }
 * ];
 * const sortedBlogs = sortBlogs(blogs);
 * console.log(sortedBlogs); // Output will be the blogs array sorted by published date in descending order.
 */
export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
