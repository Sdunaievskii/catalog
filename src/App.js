import { BrowserRouter as Router,  Route, Switch } from "react-router-dom"
import './App.css';
import Signup from './Pages/Signup'
import {AuthProvider} from './Context/AuthContext'
import Signin from './Pages/Signin'
import ProductList from './Pages/ProductsList'


function App() {

  return (
    <div className="App">
      <Router>
        <AuthProvider>
           <Switch>
              <Route exact  path="/" component={ProductList} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/signin" component={Signin} />
           </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
