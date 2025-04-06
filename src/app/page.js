import {allBlogs} from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";

/**
 * The main component of the home page that renders various sections.
 *
 * @returns {JSX.Element} - The JSX element representing the home page.
 */
export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />


    </main>
  )
}
