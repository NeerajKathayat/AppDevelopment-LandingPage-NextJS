import React from 'react'

const OurTeam = () => {
    return (
        <>

            <section className=' bg-[#F2F4F7]'>

                <div className='font-body flex flex-col gap-10 lg:flex-row max-w-[1250px] mx-auto px-5 py-[80px]'>
                    <div className='flex flex-col gap-[34px]'>
                        <h1 className='text-[36px] font-bold'>Our team</h1>

                        <p className='text-[15px] font-medium text-[#101828]'>Thousand is a full-cycle digital production company with its own product analytics, design, web and mobile development.</p>

                        <div className='flex gap-10  sm:justify-between md:gap-0 max-w-[584px]'>
                            <div className='flex flex-col items-center'>
                                <span className='text-[30px] sm:text-[48px] font-bold'>28</span>
                                <span className='text-[12px] sm:text-[15px] md:text-[15px] font-medium text-[#667085]'>team members</span>
                            </div>

                            <div className='flex flex-col items-center'>
                                <span className='text-[30px] sm:text-[48px] font-bold'>+100</span>
                                <span className='text-[12px] sm:text-[15px] font-medium text-[#667085]'>projects</span>
                            </div>

                            <div className='flex flex-col items-center'>
                                <span className='text-[30px] sm:text-[48px] font-bold'>7 years</span>
                                <span className='text-[12px] sm:text-[15px] font-medium text-[#667085]'>in IT sphere</span>
                            </div>
                        </div>

                        <p className='text-[15px] font-medium text-[#101828]'>All the necessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. It's expensive but worth it</p>
                    </div>


                    <img src="/TeamImg.svg" className='max-w-[600px]' alt="" />


                </div>

            </section>

        </>
    )
}

export default OurTeam
