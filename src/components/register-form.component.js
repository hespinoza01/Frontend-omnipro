// import components
import { TextField } from 'components'

export default function RegisterForm() {
    // capture submit action and prevent site reload
    const _onSubmit = e => {
        e.preventDefault()
    }

    return (
        <form className='RegisterForm' onSubmit={_onSubmit}>
            <TextField label='nombre' required />

            <TextField label='apellido' placeholder='Pérez' />

            <TextField label='email' placeholder='ejemplo@email.com' />

            <TextField
                label='contraseña'
                placeholder='********'
                type='password'
            />

            <button className='RegisterForm-submit'>registro</button>
        </form>
    )
}
