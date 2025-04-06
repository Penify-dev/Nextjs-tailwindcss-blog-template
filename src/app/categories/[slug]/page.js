import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

/**
 * Generates static parameters for routing based on published blog tags.
 *
 * This function iterates over all blogs to collect unique tag slugs that are marked as published. It constructs a list of paths,
 * where each path corresponds to a unique tag slug, and includes an additional path for "all" tags.
 *
 * @returns {Array} - An array of objects representing the paths to be used in static routing.
 * Each object has a property 'slug' which is the slugified tag name or 'all'.
 */
export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

/**
 * Generates metadata for blog pages based on provided parameters.
 *
 * @async
 * @function generateMetadata
 * @param {Object} params - The parameters object containing the slug.
 * @param {string} params.slug - The slug of the blog category or 'all' for all blogs.
 * @returns {Promise<Object>} A promise that resolves to an object containing title and description metadata.
 *
 * Example usage:
 * generateMetadata({ params: { slug: "javascript" } })
 *   .then(metadata => console.log(metadata));
 *
 * This function constructs the metadata for blog pages based on the provided slug. If the slug is 'all',
 * it sets the title to "Learn more about web development through our collection of expert blogs and tutorials".
 * Otherwise, it sets the title to include the capitalized version of the slug with spaces replacing hyphens.
 *
 * @throws {Error} Throws an error if params or slug are not provided or are invalid.
 */
export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-"," ")} Blogs`,
    description: `Learn more about ${params.slug === "all" ? "web development" : params.slug} through our collection of expert blogs and tutorials`,
  };
}


/** @typedef {Object} Params - The parameters object passed to the component.
 * @property {string} slug - The category slug.
 
 * @typedef {Object} Blog - A blog post object.
 * @property {Array<string>} tags - An array of tags associated with the blog post.
 
 * @function CategoryPage
 * @param {Params} params - The parameters object containing the category slug.
 * @returns {React.ReactNode} - JSX representing the category page component.
 
 * This function is a React functional component that renders a category page based on the provided category slug. It filters blogs by their tags and displays them along with the list of available categories.
 */
const CategoryPage = ({ params }) => {
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
  });

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />

      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
