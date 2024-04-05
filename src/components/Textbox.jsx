import React from 'react'
import clsx from 'clsx'

const Textbox = React.forwardRef(
    ({ name, className, label, error, placeholder, type, register}, ref) =>{
  return (
    <div className='w-full flex flex-col gap-1'>
      {label && <label htmlFor={name} className='text-slate-400'>{label}</label>}
    <div>
    <input
    type={type}
    name={name}
    placeholder={placeholder}
    ref={ref}
    {...register}
    className={clsx("bg-transparent px-3 py-2.5 2x:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-non text-base focus:ring-2 ring-blue-200", className)}
    ></input>
    </div>
    {error && <span className="text-red-500.text-sm">{error}</span>}
    </div>
  )
}
)
export default Textbox
