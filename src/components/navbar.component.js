import { useMemo } from 'react'

import { BiSearch as SearchIcon, BiHeart as HeartIcon } from 'react-icons/bi'
import { GrShop as ShopIcon } from 'react-icons/gr'
import { HiOutlineMenuAlt3 as MenuIcon } from 'react-icons/hi'

// import assets
import { LogoNavbar } from 'assets'

// import hooks
import { useAppContext } from 'hooks'

export default function Navbar() {
    // extract app context
    const [state] = useAppContext()

    // count all products into shoplist and return config for badget indicator
    const badget = useMemo(() => {
        // count shoplist items
        const count = state.shoplist.length

        if (count > 0) {
            return { 'data-counter': count }
        }

        return {}
    }, [state])

    return (
        <header className='Navbar'>
            <LogoNavbar className='Navbar-logo' />

            <nav className='Navbar-nav'>
                <SearchIcon className='nav-item' />
                <HeartIcon className='nav-item' />
                <span {...badget} className='nav-item'>
                    <ShopIcon />
                </span>
                <MenuIcon className='nav-item' />
            </nav>
        </header>
    )
}
