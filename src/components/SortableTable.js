import Table from './Table';
import { useState } from 'react';
import {GoArrowSmallDown, GoArrowSmallUp} from 'react-icons/go';

function SortableTable(props) {
    const [SortOrder,setSortOrder] = useState(null);
    const [SortBy,setSortBy] = useState(null);
    const {config, data} = props;

    const handleClick = (label) => {
        if(SortBy && label!== SortBy){
            setSortOrder('asc');
            setSortBy(label);
            return;
        }
        if(SortOrder === null){
            setSortOrder('asc');
            setSortBy(label);
        }else if(SortOrder === 'asc'){
            setSortOrder('desc');
            setSortBy(label);
        }else {
            setSortOrder(null);
            setSortBy(null);
        } 
    }

    const updatedConfig = config.map ((column) => {
        if(!column.sortValue){
            return column;
        }

        return {
            ...column,
            header: () => 
                <th className='cursor-pointer hover:bg-gray-100' onClick={()=>handleClick(column.label)}>
                  <div className='flex items-center'>  
                    {getIcons(column.label, SortBy, SortOrder)}
                    {column.label}
                  </div>
                </th>
        };
    });

    // Only sort data if sortOrder && sortBy are not null
    // Make a copy of the 'data' prop
    // find the correct sortValue function and use it for sorting
    let sortedData = data;
    if(SortBy && SortOrder){
        const {sortValue} = config.find(column => column.label === SortBy);
        sortedData = [...data];
        
        //sorting
        sortedData.sort((a,b)=>{
            const valueA = sortValue(a);
            const valueB = sortValue(b);
            // just for info you are destructuring out sortvalue of scpecific
            //  column when you do a find
            // console.log(sortValue(a) + " "+ sortValue(b) + sortValue);

            const reverseOrder = SortOrder==='asc'? 1:-1;
            if(typeof(valueA) === 'string'){
                return valueA.localeCompare(valueB) * reverseOrder;
            }else{
                return (valueA - valueB) * reverseOrder
            }
        })
    }


    return <Table {...props} data={sortedData} config={updatedConfig} />
    
}

function getIcons(label, sortBy, sortOrder) {
    if(label !== sortBy){
        return <div>
            <GoArrowSmallDown />
            <GoArrowSmallUp />
        </div>
    }

    if(sortOrder === null){
        return <div>
            <GoArrowSmallDown />
            <GoArrowSmallUp />
        </div>
    }else if( sortOrder === 'asc'){
        return <div>
            <GoArrowSmallUp />
        </div>
    }else if ( sortOrder === 'desc'){
        return <div>
            <GoArrowSmallDown />
        </div>
    }
}

export default SortableTable;




