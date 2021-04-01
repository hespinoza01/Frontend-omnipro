import { Route, Redirect } from 'react-router-dom'

// import services
import { isAuth } from 'services'

/**
 * Protect routes that require a prior login by verifying access keys before
 * rendering a protected view
 * @param {React.Component} component - Component to render
 * @param {String} path - route path to capture
 * */
export default function PrivateRoute({ component, path }) {
    // Check if exist a prev login access to can render request view
    const _component = isAuth() ? component : () => <Redirect to='/login' />

    return <Route exact path={path} component={_component} />
}
