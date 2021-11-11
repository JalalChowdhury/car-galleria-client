
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
// import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import ProductPlaceOrder from './Pages/Products/ProductPlaceOrder/ProductPlaceOrder';
import Products from './Pages/Products/Products/Products';
import Navigation from './Pages/Shared/Navigation/Navigation';


function App() {
  return (
    <div className="app">

      <AuthProvider>

        <BrowserRouter>
          <Navigation></Navigation>

          <Switch>

            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route exact path="/home">
              <Home></Home>

            </Route>
            <Route exact path="/products">
              <Products></Products>

            </Route>
            <Route exact path="/products/:productId">
              <ProductPlaceOrder></ProductPlaceOrder>

            </Route>


            <PrivateRoute exact path="/dashboard">
              <Dashboard></Dashboard>

            </PrivateRoute>
            {/* <Route exact path="/add-products">
              <AddProducts></AddProducts>

            </Route> */}

            <Route exact path="/login">
              <Login></Login>

            </Route>
            <Route exact path="/register">
              <Register></Register>

            </Route>

          </Switch>

        </BrowserRouter>


      </AuthProvider>



    </div>
  );
}

export default App;
