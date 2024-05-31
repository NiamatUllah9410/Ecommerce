import React from 'react'

function NavHead() {
  return (
    <>
    <div className='w-full hidden lg:block bg-gray-100'>
        <div className='w-full max-w-[1536px] text-gray-700 flex justify-between px-2 py-2 items-center m-auto font-sans text-xs font-mediums'>
            <div>
                <span>We are available 24/7, Need help?</span><span className='text-emerald-500'>+099949343</span>
            </div>

            <div className='flex '>
            <div><a class=" hover:text-emerald-600" href="/about-us">About Us</a><span class="mx-2">|</span>
          </div>
          <div><a class="hover:text-emerald-600" href="/contact-us">Contact Us</a><span
              class="mx-2">|</span></div>
              <button class="font-medium hover:text-emerald-600">My Account</button><span
            class="mx-2">|</span>
            <button class="flex items-center font-medium hover:text-emerald-600"><span
              class="mr-1"></span><i class="fa-regular fa-user pr-1"></i>Login</button>


                </div>

        </div>
        
      
    </div>
<div className=' w-full bg-[#10b981]'>
<div className="max-w-screen-2xl mx-auto flex h-20 items-center justify-between">
<div className="relative w-32 h-10 hidden lg:flex">

    <img alt="logo" class="w-full h-auto"
            src="https://res.cloudinary.com/ahossain/image/upload/v1697687802/settings/logo-light_hls14v.svg"
            style={{ backgroundColor: 'transparent' }}/>
            </div>

<div className='h-10 w-full lg:flex lg:max-w-[500px] xl:max-w-[750px] 2xl:max-w-[900px] md:mx-12 bg-white rounded-md transition-all duration-200 ease-in-out flex items-center justify-between px-4'>
  <input className='w-full max-w-[300px]' type="text" placeholder="Search for products (e.g. fish, apple, oil)"/>
  <i class="fa-solid fa-magnifying-glass pl-2"></i>
  </div>
<div>
  <div className='hidden lg:flex'>
  <i class="fa-regular fa-bell px-4 text-white"></i>
  <i class="fa-solid fa-cart-shopping px-4 text-white"></i>
  <i class="fa-regular fa-user pl-4 text-white"></i>
  </div>
</div>
  


</div>
</div>
</>
  )
}

export default NavHead


