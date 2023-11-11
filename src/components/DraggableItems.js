import React from 'react';

    const DraggableItems = (oItem) => {

    return (
        <div>
            <div>
            <img src={oItem.img} alt="" />
            </div>
            <div className='text-white text-lg font-bold'>
                {oItem.title}
            </div>
        </div>
    );
}

export default DraggableItems;