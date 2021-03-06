import React from 'react'

const Banner = ({ title }) => {
  return (
    <div className="bg-gray-200 rounded-md">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center lg:text-left">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          {title}
          <br />
        </h2>
        <p className="font-extrabold tracking-tight text-green-500 md:text-4xl md:leading-10">Support your local economy by discovering hundreds of fresh and affordable products.</p>
      </div>
    </div>

  )
}

export default React.memo(Banner)
