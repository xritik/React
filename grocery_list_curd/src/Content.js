import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';

const Content = ({title, items, handleCheck, handleDelete}) => {


  return (
    <>
        {items.length ? (
            <ul>
            {items.map((item)=> (
                <li className='item' key={(item.id)}>
                    <input type='checkbox' onChange={() => handleCheck((item.id))} checked={item.checked}/>
                    <label>{item.item}</label>
                    <FaTrashAlt onClick={() => {handleDelete((item.id))}} role='button' tabIndex="0" />
                </li>
            ))}
        </ul>
        ) : (
            <p style={{marginTop: '10px'}}>{title}</p>
        )}
    </>
  )
}

export default Content