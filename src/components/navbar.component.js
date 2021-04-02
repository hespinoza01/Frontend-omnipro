import { BiSearch as SearchIcon, BiHeart as HeartIcon } from 'react-icons/bi'
import { GrShop as ShopIcon } from 'react-icons/gr'
import { HiOutlineMenuAlt3 as MenuIcon } from 'react-icons/hi'

// import assets
import { LogoNavbar } from 'assets'

export default function Navbar() {
    return (
        <header className='Navbar'>
            <LogoNavbar className='Navbar-logo' />

            <nav className='Navbar-nav'>
                <SearchIcon className='nav-item' />
                <HeartIcon className='nav-item' />
                <ShopIcon className='nav-item' />
                <MenuIcon className='nav-item' />
            </nav>
        </header>
    )
}
