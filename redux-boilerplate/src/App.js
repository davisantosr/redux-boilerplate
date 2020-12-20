import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux'

import store from './store'

import Home from './containers/Home/Home'

const App = () => (
  
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={Home} />
    </Router>
  </Provider>
  
)


export default App;
