
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter ,Switch , Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Navigation from './Pages/Shared/Navigation/Navigation';


function App() {
  return (
    <div className="app">

      <BrowserRouter>
      <Navigation></Navigation>

          <Switch>

            <Route exact path="/">
              <Home></Home>

            </Route>
            <Route exact path="/home">
              <Home></Home>

            </Route>


            <Route exact path="/dashboard">
              <Dashboard></Dashboard>

            </Route>

            <Route exact path="/login">
              <Login></Login>

            </Route>
            <Route exact path="/register">
              <Register></Register>

            </Route>

          </Switch>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
