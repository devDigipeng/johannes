"use client"
import React, {useState, useEffect}from 'react'
import Image from 'next/image'
import {client} from '../../../sanity/lib/client'
import { groq } from 'next-sanity'
import { urlForImage } from '../../../sanity/lib/image'
import Link from 'next/link'



async function getPosts() {
return client.fetch(groq `
*[_type == "post"] {
  ...,
  author->,
  categories[]->,
}
`);


}

const revalidate = 60;


const Blog = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() =>{
    getPosts().then((data) => {
      setPosts(data);
      console.log(data);
    }).catch((error) => {
      console.log("error message", error)
    })
  }, []);


  return (

    <div>

  

{posts?.length > 0 && posts?.map((post, index) =>(
      <div key={index} className='w-full lg:w-1/3 p-2'>
      <Image src= { urlForImage(post.mainImage)}alt='post' className='w-full aspect-video object-cover' width={400} height={300} />
      <h2 className='font-medium text-xl mb-2 text-[#1D1D1F]'>{post?.title}</h2>
      <p className='text-[#929292] text-base'>The description of the post will always go here and maybe an excerpt</p>
      <div className='flex justify-between'>


      <p>{post?.author.name}</p>
      <Image src= { urlForImage(post?.author?.image)}alt='post' className='rounded' width={40} height={30} />
      </div>

      <p>{post?.categories.map(category => {
        return category?.title
      })}</p>

      <Link href={`/blog/${post?.slug?.current}`}>Read More</Link>

    </div>    
      
      ))}

 
 
        
        
    </div> 

    

  )
}

export default Blog