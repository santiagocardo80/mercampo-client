import React from 'react'

import AppImg from '../images/app-mockup.png'

const AppMockup = () => {
  return (
    <div className="bg-gray-800">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h1 className="text-4xl leading-7 font-extrabold tracking-tight text-gray-100 sm:text-5xl sm:leading-10 md:mx-12">
          People around you are ordering fresh products using
          <span className="text-green-400"> Mercampo App.</span>
        </h1>
        <div className="mt-8 lg:flex-shrink-0 lg:mt-0">
          <img
            src={AppImg}
            loading="lazy"
            alt="App Muckup"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default AppMockup
