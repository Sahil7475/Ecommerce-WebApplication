import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Login from './components/Login';
import Payment from './components/Payment';
import { BrowserRouter } from 'react-router-dom';
import { auth } from './components/firebase';
import { useStateValue } from './components/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders';
import Footer from './components/Footer';

const promise = loadStripe('pk_test_51MDP3mSIUirw0btR9QNxTWlwYu1ZNiLOb1pQEpkD5YWe6U0Z4MwhnJ4jg0hC5wzy8UCejJr3gzcd67W7kVKkrvny00hjPD1neR');


function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    document.title = 'Amazon Clone';
  }, []);
  useEffect(() => {
    /* it runs only when the app component loads */
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>> ', authUser);
      if (authUser) {
        /* user just logged in / was logged in */
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        /* user logged out */
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (

    <BrowserRouter>
      <Router>
        <div className="app">

          <Switch>
            <Route path="/orders">
              <Header />
              <Orders />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
              <Footer />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>

            </Route>

            <Route path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
          </Switch>

        </div>
      </Router>
    </BrowserRouter>
  );
}

export default App;
