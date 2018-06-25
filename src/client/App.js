import React from 'react';
import {renderRoutes} from 'react-router-config';

export default ({route}) => {
  return (
    <div>
      <h1>This is common header</h1>
      {renderRoutes(route.routes)}
    </div>
  );
}