'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <header className='max-w-[1250px] px-5 mx-auto absolute right-0 left-0 top-9  z-40'>
            <nav className='flex justify-between items-center bg-white rounded-xl shadow-sm py-3 pr-3'>

                <div>
                    <img src="/logo.svg"  alt="" />
                </div>

                <div className='lg:hidden cursor-pointer' onClick={() => { setIsOpen(!isOpen) }}>
                 <FontAwesomeIcon icon={faBars} />
                </div>

                <ul className='hidden lg:flex gap-[24px] font-display'>
                    <li className='text-sm font-medium text-[#101828] w-fit border-b-2 border-white cursor-pointer hover:border-black'>Services</li>
                    <li className='text-sm font-medium text-[#101828] w-fit border-b-2 border-white cursor-pointer hover:border-black'>Media</li>
                    <li className='text-sm font-medium text-[#101828] w-fit border-b-2 border-white cursor-pointer hover:border-black'>Cases</li>
                    <li className='text-sm font-medium text-[#101828] w-fit border-b-2 border-white cursor-pointer hover:border-black'>FAQ</li>
                    <li className='text-sm font-medium text-[#101828] w-fit border-b-2 border-white cursor-pointer hover:border-black'>Contacts</li>
                </ul>

                <div className='hidden text-[#80A948] text-sm font-medium lg:flex gap-[32px]'>
                    <div className='flex gap-[8px]'>
                        <img src="PhoneIcon.svg" alt="" />
                        <p>+91     0000000000</p>
                    </div>

                    <div className="flex gap-[8px]">
                        <img src="EmailIcon.svg" alt="" />
                        <p>demo@gmail.com</p>
                    </div>
                </div>



                {isOpen && (
                    <div className='fixed inset-0 bg-white py-10 px-8 min-h-screen '>

                        <div className='flex items-center justify-between'>
                            <img src="logo.svg" alt="" />

                            <div className='cursor-pointer' onClick={() => { setIsOpen(!isOpen) }}>
                            <FontAwesomeIcon icon={faXmark} />
                            </div>
                        </div>


                        <div className='pl-5'>
                            <ul className='flex flex-col gap-[35px] font-display py-[30px]'>
                                <li className='text-sm font-medium text-[#101828] w-fit border-b-2 border-white cursor-pointer hover:border-black'>Services</li>
                                <li className='text-sm font-medium text-[#101828] w-fit border-b-2 border-white cursor-pointer hover:border-black'>Media</li>
                                <li className='text-sm font-medium text-[#101828] w-fit border-b-2 border-white cursor-pointer hover:border-black'>Cases</li>
                                <li className='text-sm font-medium text-[#101828] w-fit border-b-2 border-white cursor-pointer hover:border-black'>FAQ</li>
                                <li className='text-sm font-medium text-[#101828] w-fit border-b-2 border-white cursor-pointer hover:border-black'>Contacts</li>
                            </ul>

                            <div className='text-[#80A948] text-sm font-medium flex flex-col gap-[20px]'>
                                <div className='flex gap-[8px]'>
                                    <img src="PhoneIcon.svg" alt="" />
                                    <p>+91     0000000000</p>
                                </div>

                                <div className="flex gap-[8px]">
                                    <img src="EmailIcon.svg" alt="" />
                                    <p>demo@gmail.com</p>
                                </div>


                            </div>

                        </div>



                    </div>
                )}
            </nav>

        </header>
    )
}

export default Header
