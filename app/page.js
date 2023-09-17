"use client"
import Image from 'next/image'
import Link from 'next/link'
import animation from "../dashboard-animation.json"
import Lottie from "lottie-react"

export default function Home() {
  return (
    <main className='text-center py-10 flex flex-col items-center gap-10'>
      <h1 className='text-white font-bold text-2xl'>Increase your work with kanban</h1>
      <Link href="/dashboard" className='px-7 w-fit py-4 blue-gradient relative overflow-hidden rounded-lg text-white font-semibold text-xl'>
        Go to dashboard
        <div className="absolute bottom-0 right-0 rounded-full w-32 h-32 light-blue-gradient"/>
      </Link>
      <Lottie animationData={animation} className='w-[544px] max-sm:w-[344px]'/>
    </main>
  )
}
