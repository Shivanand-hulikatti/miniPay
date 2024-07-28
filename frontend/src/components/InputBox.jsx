import React from 'react'

const InputBox = ({label,placeholder,onChange}) => {
  return (
    <div>
        <div className='text-sm font-medium text-left py-2'>
            {label}
        </div>
        <input onChange={onChange} type="text" placeholder={placeholder} className='w-full px-2 py-1 border rounded-sm border-slate-200'/>
    </div>
  )
}

export default InputBox