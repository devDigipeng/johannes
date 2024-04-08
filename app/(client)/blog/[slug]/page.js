"use client"
import React, {useState, useEffect}from 'react'
import Image from 'next/image'
import {client} from '../../../../sanity/lib/client'
import { groq } from 'next-sanity'
import { urlForImage } from '../../../../sanity/lib/image'
import Link from 'next/link'

async function getPost(slug) {
  return client.fetch(groq`
    *[_type == "post" && slug.current == $slug] {
      ...,
      author->,
      categories[]->,
    }
  `, { slug });
}




const SinglePost =  () => {
  const [post, setPost] = useState(null);
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const pathname = window.location.pathname;
    const slugFromPath = pathname.split('/').pop(); 
    setSlug(slugFromPath);
    console.log("Slug:", slugFromPath); 
  }, []); 

  useEffect(() => {
    // Fetch the post when the slug is set
    if (slug) {
      getPost(slug).then((data) => {
        setPost(data[0]); 
        console.log("Fetched post data:", data);
      }).catch((error) => {
        console.error("Error fetching post:", error);
      });
    }
  }, [slug]);


  return (
    <div>
      
      {post ? (
        <div>
          <h1>{post.title}</h1>
          {/* Render other post data */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      
      
      </div>
  )
}

export default SinglePost