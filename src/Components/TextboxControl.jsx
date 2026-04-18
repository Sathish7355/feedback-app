import React from 'react'

const TextboxControl = ({label,onChange,value,disabled,type,placeholder,error,Required,name}) =>
   {
  return (
    <div className={`textbox-container ${Required && 'required'}  ${error && 'error'}`}>
        <label>
            {label} {Required && <sup>*</sup>}
        </label>
        <input name={name}  type={type} onChange={onChange} value={value} disabled={disabled} 
        placeholder={placeholder}/>
        {error && <span className='error-message'> {label} is Required</span> }
    </div>
  )
}

export default TextboxControl