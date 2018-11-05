import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>About page</h1>
    </div>
  );
};

export default  {
  component: About
}