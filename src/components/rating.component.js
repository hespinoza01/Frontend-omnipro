import { useMemo } from 'react'
import {
    ImStarEmpty as StarEmpty,
    ImStarHalf as StarHalf,
    ImStarFull as StarFull,
} from 'react-icons/im'

// import utils
import { randomKey } from 'utils'

// Declare type stars evailables
const StarTypes = {
    get Full() {
        return 1
    },
    get Half() {
        return 2
    },
    get Empty() {
        return 3
    },
}

/**
 * @param {Number} value - current rating
 * @param {Number} max - max valoration available into rating
 */
export default function Reating({ value = 3.5, max = 5 }) {
    /**
     * Calc total stars for every type to show
     */
    const StarsItems = useMemo(() => {
        // calc total for fullstars type to render
        const fullStars = Math.floor(value)
        // calc total for halfstars to render
        const halfStars = Math.ceil(value - fullStars)
        // calc total for emptystars to render
        const emptyStars = Math.ceil(max - fullStars - halfStars)

        // create a list with total stars to render and type for every star
        const stars = [
            ...Array.from({ length: fullStars }, () => StarTypes.Full),
            ...Array.from({ length: halfStars }, () => StarTypes.Half),
            ...Array.from({ length: emptyStars }, () => StarTypes.Empty),
        ]

        return stars
    }, [value, max])

    return (
        <div className='Rating'>
            <div className='Rating-stars'>
                {StarsItems.map(star => {
                    if (star === StarTypes.Full) {
                        return (
                            <StarFull key={randomKey()} className='star-item' />
                        )
                    }

                    if (star === StarTypes.Half) {
                        return (
                            <StarHalf key={randomKey()} className='star-item' />
                        )
                    }

                    return <StarEmpty key={randomKey()} className='star-item' />
                })}
            </div>

            <span className='Rating-label'>
                {value} de {max}
            </span>
        </div>
    )
}
