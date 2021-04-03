import React from 'react'
import { useHistory } from 'react-router-dom'

// import components
import { TextField, SwitchField } from 'components'

// import hooks
import { useInput, useLoader, useUser } from 'hooks'

export default React.memo(function LoginForm() {
    const [loader] = useLoader()
    const History = useHistory()

    // extract function to simulate login petition
    const { login: LoginUser } = useUser()

    // declare states for capture email and password user input
    const [password] = useInput('')
    const [email] = useInput('')

    // capture submit action and prevent site reload
    const onSubmit = async e => {
        e.preventDefault()
        // show loader
        loader.show()

        // check user credentials
        const isLogged = await LoginUser(email.value, password.value)

        loader.hide()

        if (isLogged) {
            History.push('/')
        }
    }

    return (
        <form className='LoginForm' onSubmit={onSubmit}>
            <TextField
                {...email}
                label='email'
                placeholder='ejemplo@email.com'
                type='email'
            />

            <TextField
                {...password}
                label='contraseña'
                placeholder='********'
                type='password'
            />

            <SwitchField label='Suscribirse al Newsletter' />

            <button
                disabled={!(email.value && password.value)}
                className='LoginForm-submit'
            >
                ingreso
            </button>

            <span className='LoginForm-reset_password'>olvide contraseña</span>
        </form>
    )
})
