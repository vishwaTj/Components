import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

const DropDownPage = ({options,onChange,value}) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(()=>{
    const handler = (event) =>{
      if(!divEl.current) {
        return;
      }
      if(!divEl.current.contains(event.target)){
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handler, true);

    return () =>{
      document.removeEventListener('click', handler);
    }
  }, [])

  const handleClick = () => {
    setIsOpen((currentIsOpen)=>!currentIsOpen);
  }

  const handleOptionClick = (option) => {
   // WHAT OPTION DID THE USER CLICK ON ???
    onChange(option);  
   // CLOSE DROPDOWN 
    setIsOpen(false); 
  }
  const renderedOptions = options.map((option)=>{
    return <div 
              className='hover:bg-sky-100 rounded cursor-pointer p-1'
              onClick={()=>handleOptionClick(option)}
              key={option.value}>
                {option.label}
            </div>
  })


  

  return (
    //The ref tag here gives a unique ref value to each html div generated 
    <div ref={divEl} className='w-48 relative'>
      <Panel className='flex justify-between items-center cursor-pointer'
        onClick={handleClick}>
        {value?.label || "Select..."}
        <GoChevronDown  className='text-lg'/>
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>  
  )
}

export default DropDownPage;