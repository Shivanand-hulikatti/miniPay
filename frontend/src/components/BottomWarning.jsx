import React from 'react'
import { Link } from 'react-router-dom'

const BottomWarning = ({label,buttonText,to}) => {
  return (
    <div className='flex justify-center py-2 text-sm'>
        <div>
            {label}
        </div>
        <Link className='pointer underline pl-1 cursor-pointer' to={to}>
            {buttonText}
        </Link>
    </div>
  )
}

export default BottomWarning