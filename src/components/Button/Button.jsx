import React from 'react'

const Button = ({content}) => {
  return (
    <div>
      <button className='mt-8 px-4 py-2 bg-orange-600 text-white rounded-md'>{content}</button>
    </div>
  )
}

export default Button
