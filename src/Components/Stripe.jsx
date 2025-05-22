import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='flex items-center justify-between w-[16.66%] px-10 py-5 border-zinc-600 border-b-1 border-t-1 border-l-1 border-r-1 '>
      <img src={val.url} alt="" />
      <span className='font-medium'>{val.number}</span>
    </div>
  )
}

export default Stripe
