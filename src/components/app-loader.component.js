import { useEffect } from 'react'

// import assets
import { LoaderIcon } from 'assets'

export default function AppLoader() {
    const onClickLoader = e => {
        e.preventDefault()
        e.stopPropagation()
    }

    useEffect(_ => {
        document.body.style.overflow = 'hidden'

        return _ => {
            document.body.style.overflow = ''
        }
    }, [])

    return (
        <section onClick={onClickLoader} className='AppLoader'>
            <LoaderIcon height={80} width={80} />
        </section>
    )
}
