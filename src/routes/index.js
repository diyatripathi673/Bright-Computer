import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        Children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            }
        ]
    }
])

export default router