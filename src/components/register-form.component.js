import { useState } from 'react'
import { useHistory } from 'react-router-dom'

// import components
import { TextField, SuccessAlert } from 'components'

// import hooks
import { useInput, useLoader, useUser } from 'hooks'

export default function RegisterForm() {
    const [loader] = useLoader()
    const History = useHistory()

    const { create: RegisterUser } = useUser()

    // capture user input
    const [firstname] = useInput('')
    const [lastname] = useInput('')
    const [email] = useInput('')
    const [password] = useInput('')

    const [showSuccessAlert, setShowSuccessAlert] = useState(false)

    // capture submit action and prevent site reload
    const onSubmit = async e => {
        e.preventDefault()

        // show loader
        loader.show()

        // persist user register into context
        await RegisterUser({
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            password: password.value,
        })

        loader.hide()
        setShowSuccessAlert(true)

        // redirect to login
        setTimeout(() => History.push('/login'), 2500)
    }

    return (
        <>
            <form className='RegisterForm' onSubmit={onSubmit}>
                <TextField
                    {...firstname}
                    label='nombre'
                    placeholder='Juan'
                    required
                />

                <TextField
                    {...lastname}
                    label='apellido'
                    placeholder='Pérez'
                    required
                />

                <TextField
                    {...email}
                    label='email'
                    placeholder='ejemplo@email.com'
                    type='email'
                    required
                />

                <TextField
                    {...password}
                    label='contraseña'
                    placeholder='********'
                    type='password'
                    required
                />

                <button
                    disabled={
                        !(
                            firstname.value &&
                            lastname.value &&
                            email.value &&
                            password.value
                        )
                    }
                    className='RegisterForm-submit'
                >
                    registro
                </button>
            </form>

            {showSuccessAlert && <SuccessAlert />}
        </>
    )
}
