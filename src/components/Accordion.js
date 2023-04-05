import React from 'react';
import { useState } from 'react';
import { GoTriangleDown, GoTriangleLeft} from "react-icons/go";

const Accordion = ({items,index}) => {
  const [expandedIndex,setExpandedIndex] = useState(-1);

  // there is a reason we define this functiono outside
  // map
  const handleClick = (index)=>{
     if(expandedIndex === index){
      setExpandedIndex(-1);
     }else{
      setExpandedIndex(index);
     }
  };

  
  const renderedItems = items.map ((item,index)=>{
  const isExpanded = index===expandedIndex;

  const icon = (
      <span className='text-2xl'>
        {isExpanded ? <GoTriangleDown />:<GoTriangleLeft />}
      </span>
 );    
    return (
        <div key = {item.id}>
            <div 
               className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' 
               onClick={()=>handleClick(index)}>
              {item.label}
              {icon}
            </div>
            {isExpanded && <div className='border-b p-5'>
               {item.text}
              </div>} {/* since false is not rendered by JSX isExpanded wont show in browser */}
        </div>
    ) 
  });
  return (
    <div className='border-x border-t rounded' >{renderedItems}</div>
  )
}

export default Accordion;