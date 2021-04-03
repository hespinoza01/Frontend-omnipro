/**
 * @param {String} name - product name
 * @param {String} price - product price
 */
export default function ProductCard({ name = 'producto 1', price = '$130' }) {
    return (
        <div className='ProductCard'>
            <div className='ProductCard-picture'></div>
            <p className='ProductCard-title'>{name}</p>
            <p className='ProductCard-price'>{price}</p>
        </div>
    )
}
