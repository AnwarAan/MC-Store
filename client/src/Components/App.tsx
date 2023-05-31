import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Outlet } from 'react-router';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <div>
          <Header />
        </div>
        <div>
          <Outlet />
        </div>
        <div>{/* <Footer /> */}</div>
      </Provider>
    </Fragment>
  );
};

export default App;
