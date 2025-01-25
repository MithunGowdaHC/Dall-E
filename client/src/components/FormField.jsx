import React from 'react'
import { Form } from 'react-router-dom'


const FormField = ({ label, name, labelName, type, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
  return (
    <div>
      <div className=' flex items-center gap-2 mb-2'>
        <label className=' block text-sm font-medium  text-gray-900  ' htmlFor={name}>
          {labelName}
        </label>
        {isSurpriseMe && (
          <button onClick={handleSurpriseMe} type='button' className=' py-1 px-2 font-semibold bg-[#ECECF1] text-xs rounded-[5px] text-black '  >
            Surprise Me
          </button>
        )}

      </div>
      <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={handleChange} required className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 ' />


    </div>
  )
}

export default FormField