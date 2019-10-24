import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import ListMaterial from './containers/ListMaterial';
import ListMaterialSearch from './containers/ListMaterialSearch';
import Oferta from './containers/Oferta';
import Contacto from './containers/Contacto';

export default () => (
  <App>
    <Switch>
      <Route path={routes.CONTACTO} component={Contacto} />
      <Route path={routes.OFERTA} component={Oferta} />
      <Route path="/:sch" component={ListMaterialSearch} />
      <Route path="/:topicId" component={ListMaterial} />

      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
