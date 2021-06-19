import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Globals } from './styles/Globals';

import Confirmation from './components/Confirmation';
import Registration from './components/Registration';
import Admin from './components/Admin';
import UnknownRoute from './components/UnknownRoute';

function App() {
  return (
    <Router>
      <Globals />
      <Switch>
        <Route path='/' component={Registration} exact={true} />
        <Route path='/admin' component={Admin} />
        <Route path='/confirmation' component={Confirmation} />
        <Route path='/*' component={UnknownRoute} />
      </Switch>
    </Router>
  );
}

export default App;
