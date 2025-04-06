import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

/**
 * Generates static parameters for blog paths based on published blogs and their tags.
 *
 * This function iterates through all published blogs, extracts their tags,
 * slugifies the tags to create unique slugs, and generates an array of paths
 * including 'all' and each unique tag slug. Only includes tags from published blogs.
 *
 * @returns {Array<{slug: string}>} - An array of objects containing a slug for each unique tag.
 * @throws {Error} If the `allBlogs` variable is not defined or is empty.
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
 * Generates metadata based on the provided parameters.
 *
 * @async
 * @function generateMetadata
 * @param {Object} params - The parameters object containing necessary information.
 * @param {string} params.slug - The slug used to determine the title and description of the blogs.
 * @returns {Promise<Object>} A promise that resolves with an object containing the generated metadata.
 * @throws Will throw an error if the params object is missing or if the slug parameter is invalid.
 *
 * @example
 * // Example usage:
 * generateMetadata({ slug: "all" })
 *   .then(metadata => console.log(metadata))
 *   .catch(error => console.error(error));
 */
export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-"," ")} Blogs`,
    description: `Learn more about ${params.slug === "all" ? "web development" : params.slug} through our collection of expert blogs and tutorials`,
  };
}


/**
 * A React component that renders a category page based on the provided parameters.
 *
 * @param {Object} params - An object containing route parameters.
 * @param {string} params.slug - The current category slug to filter blogs.
 * @returns {JSX.Element} - The rendered CategoryPage component.
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
