import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Index from './src/index.js';
import App from "../../src/js/app.js";
import TBack from "../../components/CanvasBox/tback.js";
import TFront from "../../components/CanvasBox/tfront.js";
import NotFoundPage from './src/js/NotFoundPage.js';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="tfront" component={TFront}/>
      <Route path="tback" component={TBack}/>       
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
