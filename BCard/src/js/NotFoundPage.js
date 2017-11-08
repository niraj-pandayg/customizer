import React from 'react';
import {Router,Route,browserHistory} from "react-router";

const NotFoundPage = () => {
  return (
    <Router history={browserHistory}>
    <Route path="*" component={NotFoundPage}/> 
    </Router>
    <div>
      <div>
        404 Page Not Found
      </div>
    </div>
  );
};

export default NotFoundPage;
