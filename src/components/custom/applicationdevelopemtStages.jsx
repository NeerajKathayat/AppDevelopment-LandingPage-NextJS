import React from 'react'

const ApplicationDevelopemtStages = () => {
  return (
    <>
      <div className='font-body py-[80px] max-w-[1250px] mx-auto  px-5 flex flex-col gap-10 '>
            <h1 className='text-[36px] font-bold'>Application Development Stages</h1>


            <div className='flex flex-col gap-[24px] lg:gap-[0px]  md:flex-row'>

                <div className='flex flex-col gap-[24px] flex-1'>
                    <div className='flex flex-col gap-3 shadow-Shadow2 rounded-xl  p-6 h-[172px]'>
                        <div className='flex gap-4 items-center'>
                            <img src="/AnalysisIcon.svg" alt="" />
                            <p className='text-[20px] font-semibold'>Analysis</p>
                        </div>

                        <p className='text-[15px]'>We craft precise technical specs, aligning with your business, technology, and user requirements.</p>
                    </div>


                    <div className='flex flex-col gap-3 shadow-Shadow2 rounded-xl  p-6 h-[172px]'>
                        <div className='flex gap-4 items-center '>
                            <img src="/DesignIcon.svg" alt="" />
                            <p className='text-[20px] font-semibold'>Design</p>
                        </div>

                        <p className='text-[15px]'>We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces.</p>
                    </div>

                    <div className='flex flex-col gap-3 shadow-Shadow2 rounded-xl  p-6 h-[172px]'>
                        <div className='flex gap-4 items-center'>
                            <img src="/DevelopmentIcon.svg" alt="" />
                            <p className='text-[20px] font-semibold'>Development</p>
                        </div>

                        <p className='text-[15px]'>We create an extensible architecture, write clean and stable code. We integrate with customer technologies.</p>
                    </div>


                </div>

                
                <img className='hidden lg:block flex-1' src="/APStagesImg.svg" alt="" />
                

                <div className='flex flex-col gap-[24px] flex-1'>
                    <div className='flex flex-col gap-3 shadow-Shadow2 rounded-xl  p-6 h-[172px]'>
                        <div className='flex gap-4 items-center'>
                            <img src="/TestingIcon.svg" alt="" />
                            <p className='text-[20px] font-semibold'>Testing</p>
                        </div>

                        <p className='text-[15px]'>We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions</p>
                    </div>


                    <div className='flex flex-col gap-3 shadow-Shadow2 rounded-xl  p-6 h-[172px]'>
                        <div className='flex gap-4 items-center '>
                            <img src="/LaunchingIcon.svg" alt="" />
                            <p className='text-[20px] font-semibold'>Launching</p>
                        </div>

                        <p className='text-[15px]'>We design the application page and publish it in the App Store and Google Play stores.</p>
                    </div>

                    <div className='flex flex-col gap-3 shadow-Shadow2 rounded-xl  p-6 h-[172px]'>
                        <div className='flex gap-4 items-center'>
                            <img src="/SupportIcon.svg" alt="" />
                            <p className='text-[20px] font-semibold'>Support</p>
                        </div>

                        <p className='text-[15px]'>We monitor the stability of the application, update it for new devices and versions of iOS and Android.</p>
                    </div>


                </div>

            </div>

        </div>
    </>
  )
}

export default ApplicationDevelopemtStages
