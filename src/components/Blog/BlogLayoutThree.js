import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * A React component that renders a blog post layout with specific styling and interactivity.
 *
 * @param {Object} props - The properties for the BlogLayoutThree component.
 * @param {Object} props.blog - An object containing details about the blog post.
 * @param {string} props.blog.url - The URL of the blog post.
 * @param {Object} props.blog.image - An object containing image details.
 * @param {string} props.blog.image.filePath - The file path to the blog post's image.
 * @param {string} props.blog.image.blurhashDataUrl - The blur hash data URL for the image.
 * @param {number} props.blog.image.width - The width of the image.
 * @param {number} props.blog.image.height - The height of the image.
 * @param {Array<string>} props.blog.tags - An array of tags associated with the blog post.
 * @param {string} props.blog.title - The title of the blog post.
 * @param {string} props.blog.publishedAt - The date and time when the blog post was published.
 *
 * @returns {JSX.Element} - A React element representing the blog post layout.
 */
const BlogLayoutThree = ({ blog }) => {
  return (
    <div className="group flex flex-col items-center text-dark dark:text-light">
      <Link href={blog.url} className="h-full rounded-xl overflow-hidden">
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className=" aspect-[4/3] w-full h-full object-cover object-center  group-hover:scale-105 transition-all ease duration-300 "
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-col w-full mt-4">
        <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
          {blog.tags[0]}
        </span>
        <Link href={blog.url} className="inline-block my-1">
          <h2 className="font-semibold capitalize  text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50  dark:from-accentDark/50
              dark:to-accentDark/50
              bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm  sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutThree;
