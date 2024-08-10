'use client'
import React, { useState } from 'react'

const Projects = () => {
    const tabList = [
        {
           head:"Project 1",
           content:"Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels"
       },
       {

            head:"Project 2",
            content:"accusantium nostrum repudiandae veritatis inventore hic nobis quod nemo qui asperiores magnam numquam aperiam eum ipsum corrupti, reprehenderit recusandae tempora. Eaque vero nulla in maxime minus molestiae ullam officiis. Quis harum incidunt velit dolorem eum totam expedita"

        
       },
       {
 
            head:"Project 3",
            content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae vitae illum dolor perspiciatis dolorum porro voluptatibus blanditiis fugiat expedita, quas modi nihil incidunt in nostrum neque pariatur? Explicabo, minus commodi architecto perspiciatis officiis nobis expedita aperiam enim veritatis quam maiores quo ex eligendi nam! Expedita."

       },
       {
 
        head:"Project 4",
        content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ab impedit eius tempora consectetur voluptate sint, omnis aliquid deserunt porro exercitationem deleniti consequuntur voluptates magni veritatis hic quis esse! Facere, corporis quod nemo tempora fugiat tempore aut magnam minima adipisci eaque maiores quam eligendi veniam."

   }
]

    const [toogleTab, setToogleTab] = useState(0)
  return (
    <>

<section className='bg-[#F2F4F7] font-body'>


<div className='max-w-[1250px] mx-auto px-5  pb-16'>
    <div className='py-16 flex flex-col gap-[27px]'>

        <h1 className='text-[36px] sm:hidden font-bold'>Developed more than <span className='text-[#80A948]'>100</span> projects in <span className='text-[#80A948]'>15</span> industries</h1>

        <h1 className='hidden sm:block text-[36px] font-bold'>Developed more than <span className='text-[#80A948]'>100</span> <br /> projects in <span className='text-[#80A948]'>15</span> industries</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>

            <div className='flex gap-4 items-center'>
                <div className='bg-white w-[44px] h-[44px] rounded-full flex items-center justify-center'>
                    <img src="/SocialMediaIcon.svg" alt="" />
                </div>
                <p className='text-[17px] font-medium'>Social media</p>
            </div>

            <div className='flex gap-4 items-center'>
                <div className='bg-white w-[44px] h-[44px] rounded-full flex items-center justify-center'>
                    <img src="/EducationIcon.svg" alt="" />
                </div>
                <p className='text-[17px] font-medium'>Education</p>
            </div>


            <div className='flex gap-4 items-center'>
                <div className='bg-white w-[44px] h-[44px] rounded-full flex items-center justify-center'>
                    <img src="/ARTechnologyIcon.svg" alt="" />
                </div>
                <p className='text-[17px] font-medium'>AR Technology</p>
            </div>

            <div className='flex gap-4 items-center'>
                <div className='bg-white w-[44px] h-[44px] rounded-full flex items-center justify-center'>
                    <img src="/SportIcon.svg" alt="" />
                </div>
                <p className='text-[17px] font-medium'>Fitness and sport</p>
            </div>

            <div className='flex gap-4 items-center'>
                <div className='bg-white w-[44px] h-[44px] rounded-full flex items-center justify-center'>
                    <img src="/TransportIcon.svg" alt="" />
                </div>
                <p className='text-[17px] font-medium'>Auto, transport</p>
            </div>

            <div className='flex gap-4 items-center'>
                <div className='bg-white w-[44px] h-[44px] rounded-full flex items-center justify-center'>
                    <img src="/TVIcon.svg" alt="" />
                </div>
                <p className='text-[17px] font-medium'>TV series</p>
            </div>

            <div className='flex gap-4 items-center'>
                <div className='bg-white w-[44px] h-[44px] rounded-full flex items-center justify-center'>
                    <img src="/BankIcon.svg" alt="" />
                </div>
                <p className='text-[17px] font-medium'>Bank</p>
            </div>

            <div className='flex gap-4 items-center'>
                <div className='bg-white w-[44px] h-[44px] rounded-full flex items-center justify-center'>
                    <img src="/HealthIcon.svg" alt="" />
                </div>
                <p className='text-[17px] font-medium'>Medicine, health</p>
            </div>

            <div className='flex gap-4 items-center'>
                <div className='bg-white w-[44px] h-[44px] rounded-full flex items-center justify-center'>
                    <img src="/StartUpIcon.svg" alt="" />
                </div>
                <p className='text-[17px] font-medium'>Startups</p>
            </div>

            <div className='flex gap-4 items-center'>
                <div className='bg-white w-[44px] h-[44px] rounded-full flex items-center justify-center'>
                    <img src="/ConstructionIcon.svg" alt="" />
                </div>
                <p className='text-[17px] font-medium'>Construction</p>
            </div>

            <div className='flex gap-4 items-center'>
                <div className='bg-white w-[44px] h-[44px] rounded-full flex items-center justify-center'>
                    <img src="/RestaurantsIcon.svg" alt="" />
                </div>
                <p className='text-[17px] font-medium'>Restaurants, food delivery</p>
            </div>

            <div className='flex gap-4 items-center'>
                <div className='bg-white w-[44px] h-[44px] rounded-full flex items-center justify-center'>
                    <img src="/ReligionIcon.svg" alt="" />
                </div>
                <p className='text-[17px] font-medium'>Religion</p>
            </div>

            <div className='flex gap-4 items-center'>
                <div className='bg-white w-[44px] h-[44px] rounded-full flex items-center justify-center'>
                    <img src="/GameIcon.svg" alt="" />
                </div>
                <p className='text-[17px] font-medium'>Game projects</p>
            </div>

            <div className='flex gap-4 items-center'>
                <div className='bg-white w-[44px] h-[44px] rounded-full flex items-center justify-center'>
                    <img src="/MarketPlacesIcon.svg" alt="" />
                </div>
                <p className='text-[17px] font-medium'>Marketplaces</p>
            </div>

            <div className='flex gap-4 items-center'>
                <div className='bg-white w-[44px] h-[44px] rounded-full flex items-center justify-center'>
                    <img src="/OnlineCourcesIcon.svg" alt="" />
                </div>
                <p className='text-[17px] font-medium'>Online cources</p>
            </div>




        </div>
    </div>


    <div>
        <div className='flex flex-col gap-8 '>
            <h1 className='text-[36px] font-bold'>Projects we are proud of</h1>

            <p className='text-[15px] font-medium text-[#101828]'>Our software development company is truly proud of the wonderful clients we have worked with. We enjoy a long-term partnership</p>

            <div className='relative max-w-[406px]'>
                <div className='flex  relative'>
                    <div
                        onClick={() => setToogleTab(0)}
                        className={`cursor-pointer w-[25%] text-center text-sm  sm:text-[17px]  py-2 ${toogleTab === 0 ? 'text-[#FFBA00]' : 'text-black'}`}
                        data-tab="0"
                    >
                        Project 1
                    </div>

                    <div
                        onClick={() => setToogleTab(1)}
                        className={`cursor-pointer w-[25%] text-center text-sm sm:text-[17px]  py-2 ${toogleTab === 1 ? 'text-[#FFBA00]' : 'text-black'}`}
                        data-tab="1"
                    >
                        Project 2
                    </div>
                    <div
                        onClick={() => setToogleTab(2)}
                        className={`cursor-pointer  w-[25%] text-center text-sm sm:text-[17px] py-2 ${toogleTab === 2 ? 'text-[#FFBA00]' : 'text-black'}`}
                        data-tab="2"
                    >
                        Project 3
                    </div>
                    <div
                        onClick={() => setToogleTab(3)}
                        className={`cursor-pointer w-[25%] text-center text-sm sm:text-[17px] py-2 ${toogleTab === 3 ? 'text-[#FFBA00]' : 'text-black'}`}
                        data-tab="3"
                    >
                        Project 4
                    </div>
                </div>

                {/* Sliding indicator */}
                <div
                    className={`absolute bottom-0 left-0 h-[2px]   bg-[#FFBA00] transition-transform duration-300 ease-in-out`}
                    style={{ width: '25%', transform: `translateX(${100 * toogleTab}%)` }}
                ></div>

            </div>


            <div className='flex flex-col-reverse md:flex-row gap-4'>
                {
                    tabList.map((ele, index) => (
                        <div key={index} className={`${toogleTab == index ? "flex" : "hidden"}   flex-col flex-1 gap-[25px] md:gap-[40px]`} >
                            <h1 className='text-[36px] font-bold'>{ele.head}</h1>

                            <p className='text-[#101828] text-[15px]'>{ele.content}</p>

                            <p className='text-[#475467] text-[17px]'>Business analysis <span className='text-[#FFBA00]'>/</span> iOS <span className='text-[#FFBA00]'>/</span> Android <span className='text-[#FFBA00]'>/</span> QA <span className='text-[#FFBA00]'>/</span> UI/UX Design</p>

                            <div className='flex gap-8'>
                                <div className='flex gap-3'>
                                    <img src="/LocationIcon.svg" alt="" />
                                    <p className='text-[15px] text-[#101828]'>India</p>
                                </div>

                                <div className='flex gap-3'>
                                    <img src="/RealEstateIcon.svg" alt="" />
                                    <p className='text-[15px] text-[#101828]'>RealEstate</p>
                                </div>
                            </div>

                            <div className=' flex gap-20'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-[24px] font-bold'>400%</p>
                                    <p className='text-[13px] text-[#667085]'>User Growth</p>
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <p className='text-[24px] font-bold'>+ 200 000</p>
                                    <p className='text-[13px] text-[#667085]'>Active Users</p>
                                </div>

                            </div>

                            <div className='flex gap-4'>
                                <img src="/AppleIcon.svg" alt="" />
                                <img src="/GooglePlay.svg" alt="" />
                            </div>
                        </div>
                    ))
                }


                <div className='flex-1 flex justify-center'>
                    <img src="/ProjectImg.svg" alt="" />
                </div>
            </div>


        </div>
    </div>
</div>




</section>
      
    </>
  )
}

export default Projects
