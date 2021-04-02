import { NavLink as Tab, useLocation as Location } from 'react-router-dom'

// import assets
import { LoginBackground, Logo } from 'assets'

// import components
import { LoginForm } from 'components'

export default function Login() {
    return (
        <main className='Login'>
            <LoginBackground className='background' />

            <Logo className='Login-logo' />

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
                </div>
            </section>
        </main>
    )
}
