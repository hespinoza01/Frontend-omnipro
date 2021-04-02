import React from 'react'

// import components
import { TextField, SwitchField } from 'components'

export default React.memo(function LoginForm() {
    return (
        <form className='LoginForm'>
            <TextField label='email' placeholder='ejemplo@email.com' />

            <TextField
                label='contraseña'
                placeholder='********'
                type='password'
            />

            <SwitchField label='Suscribirse al Newsletter' />

            <button className='LoginForm-submit'>ingreso</button>

            <span className='LoginForm-reset_password'>olvide contraseña</span>
        </form>
    )
})
