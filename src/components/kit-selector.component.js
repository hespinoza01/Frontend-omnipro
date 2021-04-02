import React, { useState } from 'react'

// import utils
import { randomKey } from 'utils'

/**
 * @param {Function} onChange - capture users changes on selections
 */
export default React.memo(function KitSelector({ onChange = () => {} }) {
    // define kit list
    const KITS = ['home', 'away', 'third']

    // capture a kit type selected by user
    const [selectedKit, setSelectKit] = useState(null)

    // capture kit selection by user
    const onSelectKit = kit => {
        setSelectKit(kit)
        onChange(kit)
    }

    return (
        <div className='KitSelector'>
            <span className='KitSelector-label'>kit</span>

            <ul className='KitSelector-options'>
                {KITS.map(kit => {
                    // check is kit if a current selection for user
                    const activeClass = selectedKit === kit ? 'active' : ''
                    return (
                        <li
                            key={randomKey()}
                            onClick={() => onSelectKit(kit)}
                            className={`option-item ${activeClass}`}
                        >
                            {kit}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
})
