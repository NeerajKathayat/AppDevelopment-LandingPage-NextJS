'use client'
import React, { useRef,useEffect } from 'react'

const CompanyFeatureLine = () => {

      
      
    const line4Ref = useRef(null);

    useEffect(() => {
      const initialTranslateLTR = -48 * 4;
  
      function setupIntersectionObserver(element, isLTR, speed) {
        const intersectionCallback = (entries) => {
          const isIntersecting = entries[0].isIntersecting;
          if (isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
          } else {
            document.removeEventListener('scroll', scrollHandler);
          }
        };
  
        const intersectionObserver = new IntersectionObserver(intersectionCallback);
        intersectionObserver.observe(element);
  
        function scrollHandler() {
          const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
          let totalTranslate = 0;
          if (isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
          } 
          element.style.transform = `translateX(${totalTranslate}px)`;
        }
  
        // Clean up function to remove the scroll event listener
        return () => {
          document.removeEventListener('scroll', scrollHandler);
        };
      }
  
      if (line4Ref.current) {
        setupIntersectionObserver(line4Ref.current, true, 0.8);
      }
  
    }, []);

  return (
    <>
         <div className='mt-14 overflow-hidden '>
        <div className='h-[2px] max-w-[1330px] mx-auto bg-[#D8D8D8]'></div>

        <div className=' rounded-lg py-4 flex justify-center -translate-x-36 '>
          <div ref={line4Ref}  className='p-6 flex gap-2 md:gap-6 font-display items-center'>
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
                <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>

               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
                <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
                <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
               <img src="/Planet.svg" alt="" />
               <span>•</span>
                <img src="/Planet.svg" alt="" />
       

         </div>



       </div>

       <div className='h-[2px] max-w-[1330px] mx-auto bg-[#D8D8D8]'></div>



    </div>
    </>
  )
}

export default CompanyFeatureLine
