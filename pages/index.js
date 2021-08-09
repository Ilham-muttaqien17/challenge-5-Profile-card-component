import Head from 'next/head'
import Stat from '../components/Stat'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-test">
      <Head>
        <title>Profile Card Component Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl z-10 mx-6 md:mx-0">
        <img className="rounded-t-xl" src="/bg-pattern-card.svg" alt="" />
        <img className="border-4 border-white rounded-full -mt-12" src="/image-victor.jpg" alt="" />
        <div className="flex mt-5 mb-1 space-x-2">
          <h5 className="font-sans font-bold text-blue-100">Victor Crest</h5>
          <h5 className="font-sans text-blue-200">26</h5>
        </div>
        <p className="font-sans text-sm text-blue-200 mb-5">London</p>
        <hr className="w-full border-gray-200"/>
        <div className="flex my-5 space-x-10 text-center">
          <Stat 
            value="80K"
            name="Followers"
          />
          <Stat 
            value="803K"
            name="Likes"
          />
          <Stat 
            value="1.4K"
            name="Photos"
          />
        </div>
      </div>
      
    </div>
  )
}
