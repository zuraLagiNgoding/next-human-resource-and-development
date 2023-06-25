import React from 'react'
import { MoonIcon, BellIcon } from '@heroicons/react/24/outline'

const Header = () => {
  return (
      <div className='flex items-center bg-primary text-gray-200 px-10 py-6'>
          <div className='basis-1/6'>
              <h1 className='font-bold text-white'>FIEMS</h1>
          </div>
          <h1 className='font-bold basis-4/6 text-center'>Human Resource And Development</h1>
          <div className='flex justify-end item-center basis-1/6 gap-x-6'>
            <MoonIcon width={20} height={20} />
            <BellIcon width={20} height={20} />
          </div>
    </div>
  )
}

export default Header