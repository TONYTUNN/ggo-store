import React from 'react'
import './Newcollections.css';
import new_colection from '../Assets/new_collections';
import { Item } from "../Item/Item";
export const Newcollections = () => {
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_colection.map((item,i)=>{
                return <Item key ={i} id ={item.id} name = {item.name} image = {item.image}/>
            })}
        </div>
    </div>
  )
}
