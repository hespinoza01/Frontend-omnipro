// import hooks
import { useAppContext } from 'hooks'
import { actions } from 'store'

export default function useShoplist() {
    // extract app context
    const { 1: dispatch } = useAppContext()

    // add product to shoplist
    const addShoplist = value => {
        dispatch(actions.AddProduct, value)
    }

    return {
        addShoplist,
    }
}
