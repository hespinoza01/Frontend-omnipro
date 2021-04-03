// import components
import { Footer, Navbar, ProductDetail, SuggestionProducts } from 'components'

export default function Home() {
    return (
        <main className='Home'>
            <Navbar />

            <ProductDetail />

            <SuggestionProducts products={[{}, {}, {}]} />

            <Footer />
        </main>
    )
}
