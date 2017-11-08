/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700';
import 'font-awesome/css/font-awesome.css';
import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
import './styles.scss';
import './css/bundle.css';
import './css/global.css';
import hi from "./js/bundle.min.js";
injectTapEventPlugin();

render(
    <Router routes={routes} history={browserHistory} />, document.getElementById('app'), <hi />
);