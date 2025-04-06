import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

/**
 * Generates static parameters for blog paths.
 *
 * This function iterates through all published blogs and extracts unique tags,
 * slugifying them to create category slugs. It then constructs an array of path objects,
 * each representing a blog category or the 'all' category.
 *
 * @returns {Array<{slug: string}>} - An array of path objects, each with a 'slug' property.
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
 * Generates metadata for blog pages based on the provided parameters.
 *
 * @param {Object} params - The parameters object containing necessary data.
 * @param {string} params.slug - The slug of the blog or "all" if no specific blog is selected.
 * @returns {Object} - An object containing the title and description for the blog page.
 *
 * @example
 * const metadata = await generateMetadata({ params: { slug: "javascript" } });
 * console.log(metadata);
 * // Output:
 * // {
 * //   title: 'JavaScript Blogs',
 * //   description: 'Learn more about JavaScript through our collection of expert blogs and tutorials'
 * // }
 *
 * @example
 * const allBlogsMetadata = await generateMetadata({ params: { slug: "all" } });
 * console.log(allBlogsMetadata);
 * // Output:
 * // {
 * //   title: 'All Blogs',
 * //   description: 'Learn more about web development through our collection of expert blogs and tutorials'
 * // }
 *
 * @throws {Error} - If the params object is missing or does not contain a slug.
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
 * @param {Object} params - The URL parameters.
 * @param {string} params.slug - The slug of the category to filter by. If 'all', displays all blogs.
 * @returns {JSX.Element} A React element representing the category page.
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
