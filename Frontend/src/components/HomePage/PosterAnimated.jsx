import React from 'react'

export const PosterAnimated = () => {
   const images = ["https://img-c.udemycdn.com/notices/featured_carousel_slide/image/ecd9ec1c-3cf3-44c5-82ee-e0fd4f9a9122.jpg","https://img-c.udemycdn.com/notices/featured_carousel_slide/image/4f3620aa-ac1a-4dea-ac9f-14a854a7d3c7.png","https://img-c.udemycdn.com/notices/web_carousel_slide/image/6caba229-b963-4af8-84b8-f71693be2507.jpg"]
  return (
      <div className="mt-8 w-full">
      <div
        className="
          flex
          overflow-x-auto
          scroll-smooth
          gap-4
          rounded-xl
          scrollbar-hide
        "
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="banner"
            className="
              w-full
              sm:min-w-[90%]
              md:min-w-full
              h-[180px]
              sm:h-[250px]
              md:h-[350px]
              lg:h-[450px]
              object-cover
              rounded-xl
              shrink-0
            "
          />
        ))}
      </div>
    </div>
  )
  
}

export default PosterAnimated;