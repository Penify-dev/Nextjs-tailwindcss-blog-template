import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";
import Image from "next/image";
import { slug } from "github-slugger";

/**
 * A React component that displays a blog post layout with various styles and elements.
 *
 * @param {Object} props - The component's props.
 * @param {Object} props.blog - An object representing the blog post data.
 * @param {string} props.blog.image.filePath - The file path of the blog post image.
 * @param {string} props.blog.image.blurhashDataUrl - The blur hash data URL for the blog post image.
 * @param {string} props.blog.title - The title of the blog post.
 * @param {Array} props.blog.tags - An array of tags associated with the blog post.
 * @param {string} props.blog.url - The URL of the blog post.
 *
 * @returns {JSX.Element} - A React JSX element representing the blog post layout.
 *
 * @example
 * <BlogLayoutOne
 *   blog={{
 *     image: {
 *       filePath: "/path/to/image.jpg",
 *       blurhashDataUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...",
 *     },
 *     title: "Example Blog Post",
 *     tags: ["example"],
 *     url: "/blog/example-post"
 *   }}
 * />
 */
const BlogLayoutOne = ({ blog }) => {
  return (
    <div className="group inline-block overflow-hidden rounded-xl">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10
            "
      />
      <Image
        src={blog.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        width={blog.image.width}
        height={blog.image.height}
        className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
        sizes="(max-width: 1180px) 100vw, 50vw"
      />

      <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
        <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]}
        className="px-6 text-xs  sm:text-sm py-1 sm:py-2 !border "
        />
        <Link href={blog.url} className="mt-6">
          <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
            <span
              className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] dark:from-accentDark/50 dark:to-accentDark/50
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;
