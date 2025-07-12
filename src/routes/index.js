import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import ForgotPassowrd from '../pages/ForgotPassword'

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
            },
            {
                path : "forgot-password",
                element : <ForgotPassowrd/>
            },
            {
                path : "SignUp",
                element : <SignUp/>
            }
        ]
    }
])

export default router