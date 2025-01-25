import React from 'react'

const FormField = ({label, name, labelName, type, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div>
      <div className=' flex items-center gap-2 mb-2'>
          <label className=' block text-sm font-medium  text-gray-900  ' htmlFor={name}>
            {labelName}
          </label>
          {isSurpriseMe && (
            <button onClick={handleSurpriseMe} type='button' className=' py-1 px-2 font-semibold text-xs rounded-[5px] text-black '  >
                  Surprise Me
            </button>
          )}

      </div>
    </div>
  )
}

export default FormField