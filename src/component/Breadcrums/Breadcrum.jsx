import React from 'react';
import './Breadcrum.css'; // Đường dẫn file CSS
import arrow_icon from '../Assets/breadcrum_arrow.png'; // Đường dẫn tới hình ảnh (sửa đường dẫn nếu cần)

export const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" />
      SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};
