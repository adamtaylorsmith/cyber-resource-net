// import React from 'react'
// import home from '../src/images/home.png'
// import friend from '../src/images/friend.png'
// import result from '../src/images/result2.png'

const Info = () => {
  return (
    <div className='bg-gray-100 h-full'>
        <h1 className="mt-0 mb-8 flex justify-center text-green-600 text-2xl font-bold">Example Cybersecurity Reports</h1>
        <h2 className="mt-6 mb-2 text-lg xl:mx-80 lg:mx-60 md:mx-16 mx-10 font-bold">1. Decathlon At Home</h2>
        <h2 className="mt-2 mb-2 text-lg xl:mx-80 lg:mx-60 md:mx-16 mx-10 leading-loose">For each decathlon sport, there is a skill test or series of skill tests. The app evaluates each performance and quantifies the results.</h2>
        <h2 className="mt-6 mb-2 text-lg xl:mx-80 lg:mx-60 md:mx-16 mx-10 font-bold">2. Connect To Friends</h2>
        <h2 className="mt-2 mb-2 text-lg xl:mx-80 lg:mx-60 md:mx-16 mx-10 leading-loose">Add new friends, see friend profiles and view an infinite scroll of your friends recent photos and scores.</h2>
        <h2 className="mt-6 mb-2 text-lg xl:mx-80 lg:mx-60 md:mx-16 mx-10 font-bold">3. Interact With Results</h2>
        <h2 className="mt-2 mb-2 text-lg xl:mx-80 lg:mx-60 md:mx-16 mx-10 leading-loose">Compare and inspect results, organized by decathlon, friend, or sport.</h2>
        
        <div className="flex justify-center mt-12">
            {/* <img src={home} className="mx-4" height={448} width={220} />
            <img src={friend} className="mx-4" height={448} width={220} />
            <img src={result} className="mx-4" height={448} width={220} /> */}
        </div>

        <div className="flex justify-center">
        {/* <button class="mt-2 mb-2 text-xl mx-48 leading-relaxed" onClick={() => setChoice('')}>&gt;</button> */}
        </div>

    </div>
  )
}

export default Info