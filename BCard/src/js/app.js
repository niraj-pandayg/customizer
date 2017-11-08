import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import {Router,Route,browserHistory} from "react-router";
const app = document.getElementById('app');
class App extends React.Component {
   render () 
   { 
    return (
        <Router history={browserHistory}>
        <Route path="/" component={App}/>
        </Router>    
    );}
}
ReactDOM.render(<Layout />,app);
if (module.hot) {
    module.hot.accept('./app.js', () => {
      const NextRootContainer = require('./app.js').default;
      render(<NextRootContainer />, document.getElementById('react-root'));
    })
  }
export default (App);
