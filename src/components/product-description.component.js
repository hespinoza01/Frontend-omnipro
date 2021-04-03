import { useMemo } from 'react'

// import utils
import { randomKey } from 'utils'

/**
 * @param {String} value - product description
 */
export default function ProductDescription({ value = 'sin descripción' }) {
    // generate a random id for input
    const inputId = useMemo(() => randomKey(), [])

    return (
        <div className='ProductDescription'>
            <span className='ProductDescription-label'>descripción</span>

            <input id={inputId} type='checkbox' className='input-checkbox' />

            <p className='ProductDescription-content'>{value}</p>

            {value.length > 100 && (
                <>
                    <label htmlFor={inputId} className='show-more'>
                        leer más
                    </label>

                    <label htmlFor={inputId} className='show-minus'>
                        leer menos
                    </label>
                </>
            )}
        </div>
    )
}
