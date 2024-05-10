import React from 'react'
import { Metadata } from 'next';
import Sidebar from '@/components/ui/Sidebar'
import Navbar from '@/components/ui/Navbar'


export const metadata: Metadata = {
  title: 'MOMO Meet',
  description: 'Video calling App',
};
const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='relative'>
        <Navbar />

        <div className='flex'>
            <Sidebar/>

            <section className='flex min-h-screen flex-1 flex-col px-6 py-28 
            max-md:pb-14 sm:px-14'>

                <div className='w-full'>
                    {children}
                </div>

            </section>

        </div>



    </main>
  )
}

export default RootLayout