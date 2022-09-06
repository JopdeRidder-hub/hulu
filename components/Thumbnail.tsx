import { NextPage } from 'next'
import Image from "next/image"
import React from 'react'
import { ThumbnailProps } from "../utils/types"
import { HandThumbUpIcon } from "@heroicons/react/24/outline"

const Thumbnail: NextPage<ThumbnailProps> = (props) => {
    const { _key, result } = props
    const base_url = "https://image.tmdb.org/t/p/original"
  return (
    <div className='group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 px-5'>
        <Image 
            layout="responsive"
            src={base_url+(result.backdrop_path || result.poster_path)}
            width={1920}
            height={1080}
        />
        <div className='p-2 pb-5'>
            <p className='truncate max-w-md'>{result.overview}</p>
            <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{result.original_name || result.title}</h2>
            <p className='flex items-center opacity-0 group-hover:opacity-100'>
            {result.media_type && result.media_type + " • " + (result.first_air_date || result.release_date) + " • "} <HandThumbUpIcon className='h-5 mx-2'/> {result.vote_count}
            </p>
        </div>
    </div>
  )
}

export default Thumbnail
