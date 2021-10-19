import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import News from './components/News/News';
import PageServices from './components/NewsBanner/PageServices/PageServices';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <Route path='/services'>
                <PageServices></PageServices>
              </Route>
              <PrivateRoute path='/about'>
                <About></About>
              </PrivateRoute>
              <PrivateRoute path='/news'>
                <News></News>
              </PrivateRoute>
              <PrivateRoute path='/details/:serviceId'>
                <Details></Details>
              </PrivateRoute>
              <Route path='/register'>
                <Register></Register>
              </Route>
              <Route path='/login'>
                <Login></Login>
              </Route>
              <Route path='*'>
                <NotFound></NotFound>
              </Route>
            </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
