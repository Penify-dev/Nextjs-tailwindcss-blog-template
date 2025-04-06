import { slug } from "github-slugger";
import React from "react";
import Category from "./Category";

/**
 * Renders a container with category links.
 *
 * @param {Object} props - The component props.
 * @param {Array<String>} props.categories - An array of category slugs.
 * @param {String} props.currentSlug - The current active category slug.
 * @returns {JSX.Element} A JSX element representing the Categories component.
 *
 * @example
 * <Categories categories={['technology', 'finance', 'health']} currentSlug='technology' />
 */
const Categories = ({ categories, currentSlug }) => {
  return (
    <div className=" px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2 border-solid border-dark dark:border-light py-4 flex items-start flex-wrap font-medium mx-5 md:mx-10">
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/categories/${cat}`}
          name={cat}
          active={currentSlug === slug(cat)}
        />
      ))}
    </div>
  );
};

export default Categories;
