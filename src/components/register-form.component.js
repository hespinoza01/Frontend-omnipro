// import components
import { TextField } from 'components'

export default function RegisterForm() {
    return (
        <form className='RegisterForm'>
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
