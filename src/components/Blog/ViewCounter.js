"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    /**
     * Asynchronously increments the view count of a resource using Supabase RPC.
     *
     * @async
     * @function incrementView
     * @param {Object} options - The options object containing necessary parameters.
     * @param {string} options.slug - The slug text used as an identifier for the resource whose view count needs to be incremented.
     * @returns {Promise<void>} A promise that resolves when the operation is complete, or rejects if an error occurs.
     *
     * @throws {Error} Throws an error if there is an issue with the Supabase RPC call or if an unexpected error occurs during the process.
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
     * Asynchronously increments the view count for a specific item based on its slug.
     *
     * @async
     * @function
     * @param {string} slug - The unique identifier (slug) of the item whose views need to be incremented.
     * @throws {Error} If an error occurs while executing the query or processing the response.
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
