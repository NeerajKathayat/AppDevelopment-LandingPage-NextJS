'use client'
import React,{useState} from 'react'
import Select from 'react-select';
const countryOptions = [
    { value: '+1', label: 'United States (+1)' },
    { value: '+44', label: 'United Kingdom (+44)' },
    { value: '+91', label: 'India (+91)' },
    // Add more country codes as needed
  ];

const DiscussProject = () => {
      
        const [selectedCountryCode, setSelectedCountryCode] = useState(countryOptions[0]);
        const [phoneNumber, setPhoneNumber] = useState('');
      
        const handleCountryChange = (selectedOption) => {
          setSelectedCountryCode(selectedOption);
        };
      
        const handlePhoneNumberChange = (event) => {
          setPhoneNumber(event.target.value);
        };
      
    
  return (
    <>
       <section className='bg-custom-gradient font-body '>

<div className='flex flex-col gap-8  md:flex-row md:items-start  max-w-[1250px] mx-auto  px-5 py-20'>
    
    <div className='text-white flex-1 flex flex-col gap-6 '>
        <h1 className=' text-[36px] font-bold'>Let's discuss <br /> Your project</h1>

        <p className='text-[15px] font-medium'>Let's figure out how to create an effective application, <br /> its cost and terms of its development</p>
    </div>



    <div className='bg-white flex-1 p-6 rounded-lg  shadow-Form-Shadow max-w-[676px] flex flex-col gap-4'>


        <div className='flex flex-col gap-6'>

            <div className='grid  md:grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                    <label className='text-[#667085] text-[13px] font-medium'>Full name</label>
                    <input className='text-[16px] placeholder-black  outline-none' type="text" name="" id="" placeholder='Enter Name' />
                    <div className='h-[1px] w-full bg-gray-200'></div>
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-[#667085] text-[13px] font-medium'>Phone number</label>
                    <div className="flex items-center space-x-2">
      <Select
        options={countryOptions}
        value={selectedCountryCode}
        onChange={handleCountryChange}
        className="w-1/3"
      />
      <input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="Phone number"
        className="border p-2 w-2/3"
      />
    </div>
                    <div className='h-[1px] w-full bg-gray-200'></div>
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-[#667085] text-[13px] font-medium'>Business name</label>
                    <input className='text-[16px] placeholder-black outline-none' type="text" name="" id="" placeholder='Enter Business name' />
                    <div className='h-[1px] w-full bg-gray-200'></div>
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-[#667085] text-[13px] font-medium'>Business mail</label>
                    <input className='text-[16px] placeholder-black outline-none' type="email" name="" id="" placeholder='Enter Business mail' />
                    <div className='h-[1px] w-full bg-gray-200'></div>
                </div>
            </div>
        </div>

        <button className='bg-[#FFB900] text-white rounded-lg py-3 px-7 md:self-end'>
            Discuss the project
        </button>



    </div>
</div>

</section>
    </>
  )
}

export default DiscussProject
