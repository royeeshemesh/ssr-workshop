import React from 'react';
import {renderRoutes, matchRoutes} from 'react-router-config';
import {connect} from 'react-redux';

class App extends React.Component {
  componentWillReceiveProps() {
    const {route} = this.props;
    matchRoutes(route.routes, window.location.pathname)
      .forEach(({route})=>{
        route.fetchData ? route.fetchData(this.props) : null
      });
  }

  render() {
    const {route} = this.props;

    return (
      <div>
        <h1>This is common header</h1>
        {renderRoutes(route.routes)}
      </div>
    );
  }

}
export default connect()(App);