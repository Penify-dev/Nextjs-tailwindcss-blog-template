import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * Renders a blog layout with an image and text content.
 *
 * @param {Object} props - The component's properties.
 * @param {Object} props.blog - The blog object containing details to display.
 * @param {string} props.blog.url - The URL of the blog post.
 * @param {string} props.blog.image.filePath - The file path of the blog image.
 * @param {string} props.blog.image.blurhashDataUrl - The blur hash data URL for the blog image.
 * @param {string} props.blog.title - The title of the blog post.
 * @param {Array} props.blog.tags - An array of tags associated with the blog post.
 * @param {Date} props.blog.publishedAt - The date the blog post was published.
 *
 * @returns {JSX.Element} - The rendered blog layout component.
 */
const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className="group grid grid-cols-12 gap-4 items-center text-dark dark:text-light">
      <Link
        href={blog.url}
        className=" col-span-12  lg:col-span-4 h-full rounded-xl overflow-hidden"
      >
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="col-span-12  lg:col-span-8 w-full">
        <span className="inline-block w-full uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
          {blog.tags[0]}
        </span>
        <Link href={blog.url} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 dark:from-accentDark/50 to-accent/50 dark:to-accentDark/50 bg-[length:0px_6px]
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="inline-block w-full capitalize text-gray dark:text-light/50 font-semibold  text-xs sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
