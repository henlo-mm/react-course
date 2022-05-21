import React from 'react'
import ProductInfo from '../components/ProductInfo';
import '../styles/ProductDetail.scss';
function ProductDetail() {
  return (
    <aside>
        <div className="ProductDetail">
            <img src="./icons/icon_close.png" alt="close" />
        </div>
        <ProductInfo />
    </aside>
  )
}

export default ProductDetail