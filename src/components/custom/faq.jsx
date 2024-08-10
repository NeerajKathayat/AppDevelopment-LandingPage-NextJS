'use client'
import React, { useState } from 'react'
import PlusIcon from "../../../public/PlusIcon.svg"
import CrossIcon from "../../../public/CrossIcon.svg"

const FAQ = () => {
    const [ActiveIndex, setActiveIndex] = useState(null)

    const Faqs = [
        {
            key: 1,
            question: "What is the cost of a mobile application?",
            answer: "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.",
            answer2:"Average development time from start to finished application: <br/> Medium projects up to <b>3 months.</b><br/> Large projects about <b>4-6 months.</b> <br/>To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality."
        },
        {
            key: 2,
            question: "Do you provide a guarantee for the mobile application?",
             answer: "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.",
            answer2:"Average development time from start to finished application: <br/> Medium projects up to <b>3 months.</b><br/> Large projects about <b>4-6 months.</b> <br/>To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality."
        },
    ]

    const Faqs2 = [
        {
            key: 3,
            question: "How long will development take?",
            answer: "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.",
            answer2:"Average development time from start to finished application: <br/> Medium projects up to <b>3 months.</b><br/> Large projects about <b>4-6 months.</b> <br/>To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality."
        },
        {
            key: 4,
            question: "I will not tell my idea, do you guarantee confidentiality?",
            answer: "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.",
            answer2:"Average development time from start to finished application: <br/> Medium projects up to <b>3 months.</b><br/> Large projects about <b>4-6 months.</b> <br/>To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality."
        },
    ]
  return (
    <>
              <div className='my-20 flex flex-col gap-9 max-w-[1250px] mx-auto px-5 '>

<h1 className='text-5xl font-medium font-display'>FAQs</h1>

    <div className='flex flex-col lg:flex-row gap-0 lg:gap-5'>

    <div className='flex-1 flex flex-col gap-3 font-body md:gap-5'>

<div className='w-full h-[2px] bg-[#D0D5DD]'></div>

{
Faqs.map((ele, index) => (
   <div>
       <div key={index} className='transition py-3  rounded-xl flex flex-col justify-center  overflow-hidden'>
           <div className='flex justify-between items-center  cursor-pointer my-[13px] h-[84px]' onClick={() => { setActiveIndex(ActiveIndex == ele.key ? null : ele.key) }}>
               
               <h1 className="text-[20px] font-medium">{ele.question}</h1>

               <img src={ActiveIndex == ele.key ? "/CrossIcon.svg" : "/PlusIcon.svg"} alt="" />
           </div>


           <div
               className={`transition-all duration-300 ease-in-out overflow-hidden ${ActiveIndex === ele.key ? 'max-h-[1000px] ' : 'max-h-[0px] '}`}
           >
               <p className='text-[14px] font-light'>{ele.answer}</p>

               <p 
               className='text-[14px] font-light'

               dangerouslySetInnerHTML={{ __html: ele.answer2 }} />

           </div>

       </div>

       <div className='w-full h-[2px] bg-[#D0D5DD]'></div>
   </div>

))
}



</div>



<div className='flex-1 flex flex-col gap-3 font-body  md:gap-5'>

<div className='hidden lg:block w-full h-[2px] bg-[#D0D5DD]'></div>

{
Faqs2.map((ele, index) => (
   <div>

       <div key={index} className=' transition py-3  rounded-xl flex flex-col justify-center  overflow-hidden'>
           <div className='flex justify-between items-center  cursor-pointer my-[13px] h-[84px]' onClick={() => { setActiveIndex(ActiveIndex == ele.key ? null : ele.key) }}>
               <h1 className="text-[20px] font-medium">{ele.question}</h1>
               <img src={ActiveIndex == ele.key ? "/CrossIcon.svg" : "/PlusIcon.svg"} alt="" />

           </div>


           <div
               className={`transition-all duration-300 ease-in-out overflow-hidden ${ActiveIndex === ele.key ? 'max-h-[1000px] ' : 'max-h-[0px] '}`}
           >
               <p className='text-[14px] font-light'>{ele.answer}</p>

   

               <p 
               className='text-[14px] font-light'

               dangerouslySetInnerHTML={{ __html: ele.answer2 }} />
           </div>

       </div>

       <div className='w-full h-[2px] bg-[#D0D5DD]'></div>
   </div>

))
}



</div>


          
    </div>


</div>
    </>
  )
}

export default FAQ
