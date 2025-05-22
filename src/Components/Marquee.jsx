import React from 'react'

const Marquee = ({val}) => {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
      {val.map(item => <img src={item} alt="" className='w-32 flex-shrink-0' /> )}
      {val.map(item => <img src={item} alt="" className='flex-shrink-0' /> )}
    </div>
  )
}

export default Marquee
