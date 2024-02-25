import styles from '../OptionSize/OptionSize.module.scss'
import clsx from 'clsx';
import PropTypes from 'prop-types';


const OptionSize = ({sizes, setCurrentSize, currentSize}) => {

    return (
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
    );
};

OptionSize.propTypes = {
  setCurrentSize: PropTypes.func.isRequired,
  currentSize: PropTypes.object.isRequired,
  sizes: PropTypes.array.isRequired,
}

export default OptionSize;