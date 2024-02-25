import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage.js';
import ProductForm from '../ProductForm/ProductForm.js';

const Product = ({ id, name, title, colors, sizes, basePrice }) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0]);

  const getPrice = function () {
    let price = basePrice;
    price += sizes.find(s => s.name === currentSize.name).additionalPrice
    return price;
  }

  const addToCart = function (event) {
    event.preventDefault();
    console.log("Summary");
    console.log("==============");
    console.log('Name: ' + title);
    console.log('Price: ' + getPrice());
    console.log('Size:', currentSize.name);
    console.log('Color:', currentColor);
  }

  let parameterToPass = {
    setCurrentSize,
    setCurrentColor,
    addToCart,
    currentSize,
    currentColor,
    basePrice,
    title,
    colors,
    sizes
  }

  const product = {
    name, title, currentColor,
  }

  return (
    <article id={id} className={styles.product}>
      <ProductImage {...product} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm {...parameterToPass}/>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired
}

export default Product;