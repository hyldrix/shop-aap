import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
const OptionColor = ({ colors, currentColor, setCurrentColor }) => {
    return (<div className={styles.colors}>
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
    </div>)
}
OptionColor.propTypes = {
    setCurrentColor: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
}

export default OptionColor