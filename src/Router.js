import { BrowserRouter, Route } from "react-router-dom"
import ProtectedRoute from "./component/ProtectedRoute"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

function Router() {
    return (
        <BrowserRouter>
            <ProtectedRoute exact path="/" component={Home}/>
            <Route path="/Login" component={Login}/>
            <Route path="/register" component={Register}/>
        </BrowserRouter>
    )
}

export default Router
