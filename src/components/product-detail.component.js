// import components
import {
    KitSelector,
    ProductDescription,
    Rating,
    SizeSelector,
    QuantitySelector,
} from 'components'

// import hooks
import { useShoplist } from 'hooks'

export default function ProductDetail() {
    const { addShoplist } = useShoplist()

    return (
        <section className='ProductDetail'>
            <div className='ProductDetail-picture'>Photo</div>

            <div className='ProductDetail-info'>
                <h2 className='info-name'>
                    Pantalones para Dama "The Sideswept Dhoti"
                </h2>

                <Rating />

                <h3 className='info-price'>$ 139.99</h3>
            </div>

            <div className='info-specs'>
                <SizeSelector availablesSizes={['m', 'l', 'xl']} />

                <KitSelector />

                <QuantitySelector />

                <button
                    onClick={() => addShoplist('producto')}
                    className='add-shoplist'
                >
                    añadir al carrito
                </button>
            </div>

            <ProductDescription value='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos nemo sequi eaque soluta consequuntur unde rerum facere voluptatum!' />
        </section>
    )
}
