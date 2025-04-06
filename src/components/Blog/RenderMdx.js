"use client"
import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'


const mdxComponents = {
    Image
}

/**
 * React component that renders MDX content from blog data.
 *
 * @param {Object} props - The component props.
 * @param {BlogPost} props.blog - The blog post containing the MDX content to be rendered.
 * @returns {JSX.Element} A JSX element representing the rendered MDX content within a styled div.
 *
 * @example
 * // Assuming `blog` is an object fetched from a blog API with MDX content
 * <RenderMdx blog={blog} />
 */
const RenderMdx = ({blog}) => {

    const MDXContent = useMDXComponent(blog.body.code)

  return (
    <div className='col-span-12  lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max
    prose-blockquote:bg-accent/20 
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-accent
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg

    prose-li:marker:text-accent

    dark:prose-invert
    dark:prose-blockquote:border-accentDark
    dark:prose-blockquote:bg-accentDark/20
    dark:prose-li:marker:text-accentDark

    first-letter:text-3xl
    sm:first-letter:text-5xl
    


    '> 
        <MDXContent components={mdxComponents}/>
    </div>
  )
}

export default RenderMdx