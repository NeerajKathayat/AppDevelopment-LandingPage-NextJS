import React from 'react'

const Footer = () => {
  return (
    <>
           <footer className='px-5 py-5'>
              <div className='bg-[#111111] max-w-[1250px] mx-auto px-5 py-7 rounded-lg flex flex-col gap-10'>
                    <div className='flex justify-center'>
                        <img src="/Logo2.svg" alt="" />
                    </div>

                     <div className='flex flex-wrap gap-6 justify-between max-w-[1050px]'>
                          <div className='flex flex-col gap-[6px]'>
                             <div className='flex gap-2'>
                                <img src="/Contact.svg" alt="" />
                                <span className='text-sm font-medium text-[#98A2B3]'>Contact nums</span>
                             </div>
                             <p className='text-[17px] font-semibold text-white'>+91 0000000000</p>
                          </div>

                          <div className='flex flex-col gap-[6px]'>
                          <div className='flex gap-2'>
                                <img src="/Mail.svg" alt="" />
                                <span className='text-sm font-medium text-[#98A2B3]'>Gmail</span>
                             </div>
                             <p className='text-[17px] font-semibold text-white'>demo@gmail.com</p>
                          </div>

                          <div className='flex flex-col gap-[6px]'>
                          <div className='flex gap-2'>
                                <img src="/Address.svg" alt="" />
                                <span className='text-sm font-medium text-[#98A2B3]'>Address</span>
                             </div>
                             <p className='text-[17px] font-semibold text-white'>Mumbai, India</p>
                          </div>

                          <div className='flex flex-col gap-[6px]'>
                          <div className='flex gap-2'>
                                <img src="/Leave.svg" alt="" />
                                <span className='text-sm font-medium text-[#98A2B3]'>Leave a request</span>
                             </div>
                             <p className='text-[17px] font-semibold text-white'>Leave a request</p>
                          </div>

                          
                     </div>

                     <div className='text-white flex justify-center'>
                        We work throughout the world
                     </div>
              </div>

    </footer>
    </>
  )
}

export default Footer
