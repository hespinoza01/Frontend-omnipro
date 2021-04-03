import { Route, Switch } from 'react-router-dom'

// import components
import { PrivateRoute } from 'components'

// import views
import { Login, Home } from 'views'

export default function AppRoutes() {
    return (
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Login} />
            <PrivateRoute path='/' component={Home} />
        </Switch>
    )
}
