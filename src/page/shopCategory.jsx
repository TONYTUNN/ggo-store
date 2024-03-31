import React, { useContext } from 'react';
import './Css/shopcategory.css';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../component/Assets/dropdown_icon.png';
import { Item } from '../component/Item/Item';
export const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    // ^ Sửa từ ShopCategory thành ShopContext
    return (
      <div className='shop-category'>
        <img src={props.banner} alt="" className='shopcategory-banner'/>
        <div className="shopcategory-indexSort">
          <p>
            <span>showing 1-12</span> out of 36 product
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory-product">
          {all_product.map((item,i)=>{
           if(props.category === item.category){
              return<Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
           }else {
            return null;
           }
          })}
        </div>
        <div className="shopcategory-loadmore">
          Explore More 
        </div>
      </div>
    )
}

export default ShopCategory;
