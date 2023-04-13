import { useState } from 'react';
function useSort(data, config){
    const [SortOrder,setSortOrder] = useState(null);
    const [SortBy,setSortBy] = useState(null);

    const setSortColumn = (label) => {
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

    return{
        SortBy,
        SortOrder,
        sortedData,
        setSortColumn
    }

}
export default useSort;