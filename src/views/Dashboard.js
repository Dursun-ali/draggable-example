import React, { useEffect, useRef, useState } from 'react';
import { imagesData } from '../assets/imagesData';

const Dashboard = ({ buttonActive, setButtonActive }) => {
    const [draggableArr, setDraggableArr] = useState(imagesData);
    const [indexNumber, setIndexNumber] = useState([]);
    const dragItem = useRef(null);
    const dragOverItem = useRef(null);

    const onDragStart = (e, index) => {
        dragItem.current = index;
    }
    const onDragEnter = (e, index) => {
        dragOverItem.current = index;
    }

    const handleSort = () => {
        let _arrays = [...draggableArr]
        const draggedItemContent = _arrays.splice(dragItem.current, 1)[0]
        _arrays.splice(dragOverItem.current, 0, draggedItemContent);
        dragItem.current = null
        dragOverItem.current = null
        setDraggableArr(_arrays);
    }

    const handleChangeFunc = (e, item) => {
        Object.keys(draggableArr[item]).forEach((oItem) => {
            draggableArr[item]['checkbox'] = e.target.checked
        })
        keepItem(item);
    }

    const keepItem = (index) => {
        if (indexNumber.includes(index)) {
            const filteredItems = indexNumber.filter(item => item !== index);//*burda index numarasına eşit olmayanı seçip yeni dizi döndürüyor mükemmelll.
            setIndexNumber(filteredItems);
        } else {
            setIndexNumber([...indexNumber, index]);
        }
    }
    useEffect(() => {
        if (buttonActive) {
            for (let i = 0; i < indexNumber.length; i++) {
                console.log(draggableArr[i]);
            }
            setButtonActive(false);
        }
    }, [buttonActive])

    return (
        <ul className='w-[360px] sm:w-[600px]'>
            {
                draggableArr.map((oItem, oIndex) => {
                    return (
                        <li
                            key={oIndex}
                            className="relative flex items-center w-100 h-[90px] text-white font-semibold rounded-xl mb-4"
                            draggable="true"
                            onDragStart={(e) => onDragStart(e, oIndex)}
                            onDragEnter={(e) => onDragEnter(e, oIndex)}
                            onDragEnd={handleSort}
                        >
                            <label htmlFor={`items${oIndex}`} className="w-100 flex items-center justify-between bg-gray-900 absolute top-0 right-0 left-0 bottom-0 rounded-lg cursor-move px-4">
                                <div className='flex items-center'>
                                    <div className="flex h-6 items-center">
                                        <input onChange={(e) => handleChangeFunc(e, oIndex)} data-key={oIndex} checked={draggableArr[oIndex].checkbox} id={`items${oIndex}`} name={`checkbox${oIndex + 1}`} type="checkbox" className="accent-blue-600 h-5 w-5 text-red-500 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 ml-2 mr-4" />
                                    </div>
                                    <div>
                                        <img src={oItem.img} alt="" className='w-[60px] mr-2 pointer-events-none' />
                                    </div>
                                    <div className='text-white text-lg font-medium'>
                                        {oItem.title}
                                    </div>
                                </div>
                                <div className={`${oItem.checkbox ? "bg-[#90f00154]" : "bg-red-600"} rounded-md px-2 py-1 mx-2 ease-out duration-200`}>
                                    {oItem.checkbox.toString()}
                                </div>
                            </label>
                        </li>
                    )
                })
            }
        </ul>

    );
}

export default Dashboard;
