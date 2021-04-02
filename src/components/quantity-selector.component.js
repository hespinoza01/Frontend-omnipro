import React, { useState } from 'react'
import { BiMinus as MinusIcon, BiPlus as PlusIcon } from 'react-icons/bi'

/**
 * @param {Function} onChange - capture quantity change value
 */
export default React.memo(function QuantitySelector({ onChange = () => {} }) {
    // store quantity value
    const [count, setCount] = useState(1)

    // increment quantity count in 1
    const increment = () => {
        const _count = count + 1

        setCount(_count)
        onChange(_count)
    }

    // decrement quantity count in 1
    const decrement = () => {
        const _count = count > 1 ? count - 1 : 1

        setCount(_count)
        onChange(_count)
    }

    return (
        <div className='QuantitySelector'>
            <span className='QuantitySelector-label'>cantidad</span>

            <div className='QuantitySelector-controls'>
                <button className='control-button' onClick={decrement}>
                    <MinusIcon />
                </button>

                <span className='control-counter'>{count}</span>

                <button className='control-button' onClick={increment}>
                    <PlusIcon />
                </button>
            </div>
        </div>
    )
})
