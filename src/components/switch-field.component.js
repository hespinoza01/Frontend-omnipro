import React, { useMemo } from 'react'

// import utils
import { randomKey } from 'utils'

/**
 * @param {String} label - message to describe input
 * @param {String} value - input value
 * @param {Function} - capture on change input value
 */
export default React.memo(function SwitchField({
    label,
    value,
    onChange = () => {},
}) {
    // create id for link label with input
    const inputId = useMemo(() => randomKey(), [])

    return (
        <fieldset className='SwitchField'>
            <input
                id={inputId}
                className='SwitchField-input'
                type='checkbox'
                checked={value}
                onChange={e => {
                    // capture and create copy from target attribute
                    const _target = Object.assign({}, e.target)

                    onChange({
                        ...e,
                        // save checked value into value attribute
                        target: { ..._target, value: _target.checked },
                    })
                }}
            />

            <label className='SwitchField-switch' htmlFor={inputId}>
                <span className='SwitchField-switch__thumb'></span>
            </label>

            <label className='SwitchField-label' htmlFor={inputId}>
                {label}
            </label>
        </fieldset>
    )
})
