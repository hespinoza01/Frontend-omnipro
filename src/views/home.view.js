// import components
import {
    Navbar,
    SizeSelector,
    Rating,
    KitSelector,
    QuantitySelector,
    ProductDescription,
    SuggestionProducts,
} from 'components'

export default function Home() {
    return (
        <main className='Home'>
            <Navbar />
            <SizeSelector availablesSizes={['l', 'xl']} />
            <KitSelector />
            <Rating />
            <QuantitySelector />
            <ProductDescription />
            <SuggestionProducts />
        </main>
    )
}
