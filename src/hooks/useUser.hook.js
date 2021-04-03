// import context
import { useAppContext } from 'hooks'
import { actions } from 'store'

export default function useUser() {
    // extact app context
    const [state, dispatch] = useAppContext()

    /**
     * Create new user register for login into app
     * @param {String} firstname
     * @param {String} lastname
     * @param {String} email
     * @param {String} password
     */
    const create = ({ firstname, lastname, email, password }) => {
        return new Promise(resolve => {
            // extract list for current users
            const { users } = state

            // create user register
            users[email] = {
                firstname,
                lastname,
                password,
            }

            // persist user list into state
            dispatch(actions.AddUser, users)

            setTimeout(() => resolve(true), 2000)
        })
    }

    /**
     * Get a user from register list
     * @param {String} email
     */
    const getByEmail = email => {
        return new Promise(resolve => {
            // extract list for current users
            const { users } = state

            setTimeout(() => resolve(users[email]), 2000)
        })
    }

    /**
     * Check user login credentials
     * @param {String} email
     * @param {String} password
     */
    const login = (email, password) => {
        return new Promise(async resolve => {
            // search user register
            const user = await getByEmail(email)

            // if user not exist or credentials as invalids
            if (!user || user?.password !== password) {
                resolve(false)
            }

            resolve(true)
        })
    }

    return {
        create,
        getByEmail,
        login,
    }
}
