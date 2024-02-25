import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
//props are ignored
//div for sizes in separate component

const Product = ({ id, name, title, colors, sizes, basePrice }) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  console.log(currentColor, currentSize)

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>

              {sizes.map(size => {
                return (
                  <li key={size.name}><button type="button" onClick={e => {
                    e.preventDefault();
                    setCurrentSize(size)
                  }} className={clsx(size === currentSize && styles.active)}>{size.name}</button></li>
                )
              })}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => {
                const prepareClassName = (color) => {
                  return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
                }
                return (<li key={color}>
                  <button type="button" onClick={e => {
                    e.preventDefault();
                    setCurrentColor(color);
                  }} className={clsx(prepareClassName(color), color === currentColor && styles.active)} />
                </li>)
              }
              )}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  colors: PropTypes.array,
  sizes: PropTypes.array,
  basePrice: PropTypes.number
}

export default Product;