import { useState } from 'react'
import { NavLink as Tab, useLocation as Location } from 'react-router-dom'

// import assets
import { LoginBackground, Logo } from 'assets'

// import components
import { LoginForm, RegisterForm, SidebarMenuButton, Sidebar } from 'components'

export default function Login() {
    // capture sidebar showing indicator
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <main className='Login'>
            <LoginBackground
                className={`background ${showSidebar ? 'animate' : ''}`}
            />

            <Logo className='Login-logo' />

            <SidebarMenuButton onToggle={value => setShowSidebar(value)} />

            {showSidebar && <Sidebar />}

            {!showSidebar && (
                <section className='Login-content'>
                    <div className='Login-content__tabs'>
                        <Tab
                            to='/login'
                            className='tab-item'
                            activeClassName='active'
                        >
                            ingreso
                        </Tab>
                        <Tab
                            to='/register'
                            className='tab-item'
                            activeClassName='active'
                        >
                            registro
                        </Tab>
                    </div>

                    <div className='Login-content__container'>
                        {Location().pathname === '/login' && <LoginForm />}

                        {Location().pathname === '/register' && (
                            <RegisterForm />
                        )}
                    </div>
                </section>
            )}
        </main>
    )
}
