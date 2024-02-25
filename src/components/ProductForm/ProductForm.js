import styles from './ProductForm.module.scss'
import Button from '../Button/Button.js';
import OptionSize from '../OptionSize/OptionSize.js'
import OptionColor from '../OptionColor/OptionColor.js'
import PropTypes from 'prop-types';

const ProductForm = ({ setCurrentSize,
    setCurrentColor,
    addToCart,
    currentSize,
    currentColor,
    colors,
    sizes }) => {

    const optionSizeParams = {
        sizes,
        setCurrentSize,
        currentSize,
    }

    const optionColorParams = {
        colors,
        setCurrentColor,
        currentColor,
    }
    
    return (
        <form onSubmit={e => addToCart(e)}>
            <OptionSize {...optionSizeParams} />
            <OptionColor {...optionColorParams} />
            <Button className={styles.button}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    );
};

ProductForm.propTypes = {
    setCurrentSize: PropTypes.func.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    currentSize: PropTypes.object.isRequired,
    currentColor: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired,
}

export default ProductForm;