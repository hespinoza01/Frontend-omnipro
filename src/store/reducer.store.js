import actions from './actions.store'

/**
 * Case reducers for manipulate global store context
 * @param {Object} state
 * @param {Object} action
 * */
export default function Reducer(state, action) {
    const { type, payload } = action

    // Verify action reducer type
    switch (type) {
        // Add new user to login list
        case actions.AddUser:
            // extract current users
            const { users } = state
            // register new user
            users[payload.email] = payload

            return { ...state, users }

        // Add new product to shoplist
        case actions.AddProduct:
            const { products } = state
            products.push(payload)

            return { ...state, products }

        default:
            return state
    }
}
