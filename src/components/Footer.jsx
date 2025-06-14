import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer' > 
        
        
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start' >
            <div className='w-full md:w-1/3 mb-8 md:mb-0' >
                <img src={assets.logo_dark} alt=''  /> 
                <p className='text-gray-400 mt-4' >Transition Your Property with Confidence.
                </p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0' >
                <h3 className='text-white font-medium mb-4' >Quick Links</h3>
                <ul className=' flex flex-col gap-2 text-gray-400 ' >
                    <a className='hover:text-white' href='#Home' >Home</a>
                    <a className='hover:text-white' href='#About'  >About</a>
                    <a className='hover:text-white' href='#Projects'  >Projects</a>
                    <a className='hover:text-white' href='#Testimonials'  >Testimonials</a>
                </ul>
            </div>
            <div>
                <h3 className='text-white font-medium mb-4' >Contact Us</h3>
                <p className='text-gray-400' >123, Main Road, New City</p>
                <p className='text-gray-400' >The latest news,articles and resources,sent to your inbox weekly</p>
               <div className='flex gap-2' >
               <input type='email' placeholder='Enter Your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto'   ></input>
               <button className='bg-blue-600 text-white px-4 py-2 rounded' >Subscribe</button> 
               </div>
              
            </div>
        </div>
        
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500 ' >
            
            <p>© 2025 Nestly Creations. All Rights Reserved</p>
            
        </div>
        
        </div>
  )
}

export default Footer