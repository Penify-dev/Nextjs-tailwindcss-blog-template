"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

const supabase = createClientComponentClient();

/**
 * A React component that displays and increments the view count for a given slug.
 *
 * @param {Object} props - The properties passed to the ViewCounter component.
 * @param {string} props.slug - The unique identifier for the content.
 * @param {boolean} [props.noCount=false] - If true, the view count will not be incremented.
 * @param {boolean} [props.showCount=true] - If false, the view count display will not be shown.
 */
const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    /**
     * Asynchronously increments the view count for a given slug using Supabase RPC.
     *
     * @async
     * @function
     * @param {string} slug - The slug of the item to update.
     * @returns {Promise<void>} A Promise that resolves when the operation is complete.
     * @throws {Error} If an error occurs during the RPC call or while handling the response.
     *
     * @example
     * try {
     *   await incrementView("example-slug");
     *   console.log("View count incremented successfully.");
     * } catch (error) {
     *   console.error("Failed to increment view count:", error);
     * }
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
     * Asynchronously increments the view count for a given slug using Supabase.
     *
     * @async
     * @function
     * @param {string} slug - The unique identifier for the resource whose views need to be incremented.
     * @returns {Promise<void>} A promise that resolves when the view count has been successfully updated or rejects with an error if there's a failure.
     *
     * @throws {Error} If an error occurs while fetching or updating the view count.
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
