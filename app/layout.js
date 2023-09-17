"use client"
import Navbar from '../components/Navbar'
import './globals.css'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'


export const metadata = {
  title: 'Dashboard',
  description: 'dashboard',
}

export default function RootLayout({ children }) {
  const [toggle, setToggle] = useState(false);

  const open = () => {
    setToggle(!toggle);
  }
  return (
    <html lang="en">
      <body className="bg-dark-1">
      <div className={`hidden h-full md:flex md:w-56 md:flex-col md:shadow-md md:fixed md:inset-y-0 z-[80] bg-dark-1 ${toggle ? "max-md:flex absolute" : ""}`}>
        <Sidebar open={open}/>
      </div>
        <main className="md:pl-56">
          <Navbar open={open}/>
          {children}
        </main>
      </body>
    </html>
  )
}
