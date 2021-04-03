// import components
import { ProductCard } from 'components'

// inmport utils
import { randomKey } from 'utils'

/**
 * @param {Array<Object>} products - product list to suggestion
 */
export default function SuggestionProducts({ products = [] }) {
    return (
        <section className='SuggestionProducts'>
            <p className='SuggestionProducts-title'>también te podría gustar</p>

            <div className='SuggestionProducts-list'>
                {products.map(({ name = 'product name', price = '$130' }) => (
                    <ProductCard key={randomKey()} name={name} price={price} />
                ))}
            </div>
        </section>
    )
}
