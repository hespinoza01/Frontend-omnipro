import React, { useState } from 'react'

/**
 * @param {Array<String>} availablesSizes - list from sizes availables
 * for current product
 * @param {Function} onChange - capture users changes on selections
 */
export default React.memo(function SizeSelector({
    availablesSizes = [],
    onChange = () => {},
}) {
    // capture a size selected by user
    const [selectedSize, setSelectSize] = useState(null)

    // define sizes list
    const SIZES = ['s', 'm', 'l', 'xl', 'xxl']

    // handler to capture size selected item
    const onSelectSize = size => {
        if (availablesSizes.indexOf(size) !== -1) {
            setSelectSize(size)
            onChange(size)
        }
    }

    return (
        <div className='SizeSelector'>
            <span className='SizeSelector-label'>tamaño</span>

            <ul className='SizeSelector-options'>
                {SIZES.map(size => {
                    // check if size into available product sizes
                    const disableClass =
                        availablesSizes.indexOf(size) === -1 ? 'disable' : ''

                    // check is size if a current selection for user
                    const activeClass = selectedSize === size ? 'active' : ''
                    return (
                        <li
                            onClick={() => onSelectSize(size)}
                            className={`option-item ${disableClass} ${activeClass}`}
                        >
                            {size}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
})
