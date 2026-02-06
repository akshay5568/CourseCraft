import React from 'react'

export const PosterAnimated = () => {
   const images = ["https://img-c.udemycdn.com/notices/featured_carousel_slide/image/ecd9ec1c-3cf3-44c5-82ee-e0fd4f9a9122.jpg","https://img-c.udemycdn.com/notices/featured_carousel_slide/image/4f3620aa-ac1a-4dea-ac9f-14a854a7d3c7.png","https://img-c.udemycdn.com/notices/web_carousel_slide/image/6caba229-b963-4af8-84b8-f71693be2507.jpg"]
  return (
    <div className='mt-8'>
        <div className='flex overflow-scroll h-100 rounded-md'>
            {images.map((image,index) => (
               <img className='object-cover' key={index} src={image} alt="image banner" />
            ))}
        </div>
    </div>
  )
  
}

export default PosterAnimated;