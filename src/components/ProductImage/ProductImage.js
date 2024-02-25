import styles from './ProductImage.module.scss';
//props are ignored
//div for sizes in separate component

const ProductImage = ({name, title, currentColor}) => {


    return (
        <div className={styles.imageContainer}>
            <img
                className={styles.image}
                alt={title}
                src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
        </div>)
};


export default ProductImage;