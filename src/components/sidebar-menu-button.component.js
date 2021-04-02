import React, { useState } from 'react'
import { HiOutlineMenuAlt4 as MenuIcon } from 'react-icons/hi'
import { BiArrowBack as BackIcon } from 'react-icons/bi'

/**
 * @param {Function} onToggle
 */
export default React.memo(function SidebarMenuButton({ onToggle = () => {} }) {
    const [showSidebar, setShowSidebar] = useState(false)

    // change sidebar visibility and dispatch change
    const _onToggle = () => {
        setShowSidebar(!showSidebar)
        onToggle(!showSidebar)
    }

    return (
        <button className='SidebarMenuButton' onClick={_onToggle}>
            {!showSidebar && <MenuIcon className='icon' />}

            {showSidebar && <BackIcon className='icon' />}
        </button>
    )
})
