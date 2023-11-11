import React, { useRef, useState } from 'react';

    const DraggablePiece = ({oItem,oIndex,array,setArray}) => {
        const dragItem = useRef(null);
        const dragOverItem = useRef(null);
      
      
        const onDragStart = (e, index) => {
          dragItem.current = index;
          console.log("drag start : " + index);
        }
        const onDragEnter = (e, index) => {
          dragOverItem.current = index;
          console.log("drag enter : " + index);
        }

      //en son arrayin yeni halini basmıs oluruz.
        const handleSort = () => {
          let _arrays = [...array]
          const draggedItemContent = _arrays.splice(dragItem.current, 1)[0]
      
          _arrays.splice(dragOverItem.current, 0, draggedItemContent);
      
      
          //pozisyonu resretle
      
          dragItem.current = null
          dragOverItem.current = null
          setArray(_arrays)
        }
    return (
        <li
        key={oIndex}
        className="list-item"
        draggable="true"
        onDragStart={(e) => onDragStart(e,oIndex) }
        onDragEnter={(e) => onDragEnter(e,oIndex) }
        onDragEnd={handleSort}
        >
            {oItem}
        </li>
    );
}

export default DraggablePiece;