import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
const DevelopmentTechnologies = () => {
  return (
    <div>
        <div className='flex flex-col gap-10 md:flex-row md:gap-5 justify-between  font-body mt-10 mb-16 max-w-[1250px] mx-auto px-5'>
        <div className='max-w-[496px] flex flex-col gap-[30px]'>
            <h1 className='text-[36px] font-bold'>Full development cycle</h1>
            <p className='text-[15px] font-medium'>We use proven technologies</p>

            <div className='flex flex-col gap-3'>
                <h1 className='text-[20px] font-semibold'>Web</h1>
                <p className='text-[17px] text-[#344054]'>PHP <span className='text-[#80A948]'>/</span> Javascript <span className='text-[#80A948]'>/</span> Node.JS <span className='text-[#80A948]'>/</span> Web Socket <span className='text-[#80A948]'>/</span> Socket.io <span className='text-[#80A948]'>/</span> Vue.js<span className='text-[#80A948]'>/</span> Nuxt <span className='text-[#80A948]'>/</span> MySQL <span className='text-[#80A948]'>/</span> Laravel <span className='text-[#80A948]'>/</span> GO lang <span className='text-[#80A948]'>/</span> django <span className='text-[#80A948]'>/</span> Python</p>
            </div>

            <div className='flex flex-col gap-3'>
                <h1 className='text-[20px] font-semibold'>Mobile</h1>
                <p className='text-[17px] text-[#344054]'>Swift <span className='text-[#80A948]'>/</span> Kotlin <span className='text-[#80A948]'>/</span> Alamofire <span className='text-[#80A948]'>/</span> Firebase <span className='text-[#80A948]'>/</span> CoreData <span className='text-[#80A948]'>/</span> Room <span className='text-[#80A948]'>/</span> Realm <span className='text-[#80A948]'>/</span> Coroutine <span className='text-[#80A948]'>/</span> RxJava <span className='text-[#80A948]'>/</span> RxSwift <span className='text-[#80A948]'>/</span> Unit Test <span className='text-[#80A948]'>/</span> Navigation</p>
            </div>
        </div>

        <div className="flex flex-col gap-5 mt-4 text-[#1D2939]">
            <div className='flex gap-5 items-baseline cursor-pointer  group'>
                <p className='text-[20px] hover:font-semibold border-b-[2px] border-white hover:border-[#80A948]'>iOS development</p>
                <FontAwesomeIcon icon={faChevronRight} className="text-[#3F8AE0]  group-hover:text-[#80A948]" />
            </div>

            <div className='flex gap-5 items-baseline cursor-pointer  group'>
                <p className='text-[20px] hover:font-semibold border-b-[2px] border-white hover:border-[#80A948]'>Android development</p>
                <FontAwesomeIcon icon={faChevronRight} className="text-[#3F8AE0]  group-hover:text-[#80A948]" />
            </div>

            <div className='flex gap-5 items-baseline cursor-pointer  group'>
                <p className='text-[20px] hover:font-semibold border-b-[2px] border-white hover:border-[#80A948]'>Web development</p>
                <FontAwesomeIcon icon={faChevronRight} className="text-[#3F8AE0]  group-hover:text-[#80A948]" />
            </div>

            <div className='flex gap-5 items-baseline cursor-pointer  group'>
                <p className='text-[20px] hover:font-semibold border-b-[2px] border-white hover:border-[#80A948]'>UI/UX design</p>
                <FontAwesomeIcon icon={faChevronRight} className="text-[#3F8AE0]  group-hover:text-[#80A948]" />
            </div>

            <div className='flex gap-5 items-baseline cursor-pointer  group'>
                <p className='text-[20px] hover:font-semibold border-b-[2px] border-white hover:border-[#80A948]'>Testing</p>
                <FontAwesomeIcon icon={faChevronRight} className="text-[#3F8AE0]  group-hover:text-[#80A948]" />
            </div>

            <div className='flex gap-5 items-baseline cursor-pointer  group'>
                <p className='text-[20px] hover:font-semibold border-b-[2px] border-white hover:border-[#80A948]'>Launch</p>
                <FontAwesomeIcon icon={faChevronRight} className="text-[#3F8AE0]  group-hover:text-[#80A948]" />
            </div>

            <div className='flex gap-5 items-baseline cursor-pointer  group'>
                <p className='text-[20px] hover:font-semibold border-b-[2px] border-white hover:border-[#80A948]'>IT consulting</p>
                <FontAwesomeIcon icon={faChevronRight} className="text-[#3F8AE0]  group-hover:text-[#80A948]" />
            </div>

            

            
        </div>


        
    
    </div>
    </div>
  )
}

export default DevelopmentTechnologies
