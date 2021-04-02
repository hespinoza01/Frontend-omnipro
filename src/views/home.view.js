// import components
import { Navbar, SizeSelector } from 'components'

export default function Home() {
    return (
        <main className='Home'>
            <Navbar />
            <SizeSelector availablesSizes={['l', 'xl']} />
        </main>
    )
}
