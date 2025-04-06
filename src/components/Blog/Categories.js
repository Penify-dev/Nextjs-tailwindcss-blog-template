import { slug } from "github-slugger";
import React from "react";
import Category from "./Category";

/**
 * A functional component that renders a list of categories.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Array<string>} props.categories - An array of category slugs.
 * @param {string} props.currentSlug - The current category slug being viewed.
 * @returns {React.ReactNode} - The rendered list of categories as a div element.
 *
 * Example:
 * <Categories categories={['programming', 'science', 'technology']} currentSlug='programming' />
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
