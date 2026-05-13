import React from 'react'

const TextAreaControl = ({label,onChange,value,disabled,type,placeholder,Required,error,name}) => 
  {
  return (
   <div className={`textbox-container ${Required && 'required'} ${error && 'error'}`}>
        <label>
      {label} {Required && <sup>*</sup>}
        </label>
        <textarea   type={type} placeholder={placeholder} onChange={onChange} value={value}
         disabled={disabled}
          name={name} />
                {error && <span className='error-message'> {label} is Required</span> }
    </div>
  )
}

export default TextAreaControl