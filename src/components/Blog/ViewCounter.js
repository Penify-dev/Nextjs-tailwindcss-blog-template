"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

const supabase = createClientComponentClient();

/**
 * A React component that renders the number of views for a specific slug.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.slug - The unique identifier for the content being viewed.
 * @param {boolean} [props.noCount=false] - Optional flag to disable view counting. Defaults to `false`.
 * @param {boolean} [props.showCount=true] - Optional flag to control whether to display the count of views. Defaults to `true`.
 * @returns {JSX.Element} - The rendered component.
 */
const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    /**
     * Asynchronously increments the view count for a given slug using Supabase RPC.
     *
     * @async
     * @function
     * @param {string} slug - The slug for which to increment the view count.
     * @returns {Promise<void>} A promise that resolves when the view count has been incremented, or rejects if an error occurs.
     *
     * @example
     * try {
     *   await incrementView("example-slug");
     * } catch (error) {
     *   console.error("Failed to increment view count:", error);
     * }
     *
     * @throws {Error} If there is an error during the RPC call or in the catch block.
     */
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc("increment", {
          slug_text:slug ,
        });

        if (error){
            console.error("Error incrementing view count inside try block:", error)
        };
        
      } catch (error) {
        console.error(
          "An error occurred while incrementing the view count:",
          error
        );
      }
    };

    if(!noCount){
        incrementView();
    }
  }, [slug, noCount]);

  useEffect(() => {
    /**
     * Increments the view count for a given slug.
     *
     * @async
     * @function getViews
     * @param {string} slug - The unique identifier of the resource whose views need to be incremented.
     * @returns {undefined}
     * @throws {Error} Throws an error if there is an issue fetching or updating the view count.
     *
     * Example usage:
     * getViews("example-slug");
     */
    const getViews = async () => {
      try {
        let { data, error } = await supabase
  .from('views')
  .select('count')
  .match({slug: slug})
  .single()

        if (error){
            console.error("Error incrementing view count inside try block:", error)
        };


        setViews(data ? data.count : 0)
        
      } catch (error) {
        console.error(
          "An error occurred while incrementing the view count:",
          error
        );
      }
    };

        getViews();
  }, [slug]);

  if (showCount) {
    return <div>{views} views</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
