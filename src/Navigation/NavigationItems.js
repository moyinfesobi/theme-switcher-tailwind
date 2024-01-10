import React from 'react'

const NavigationItems = ({iconSrc, altText}) => {
  return (
    <div  className="bg-white rounded-full w-[50px] h-[50px] flex justify-center mb-[20px] drop-shadow-md" >
        
        <img width={30} height={30} src={iconSrc} alt={altText} /> 
        
        </div>
  )
}

export default NavigationItems