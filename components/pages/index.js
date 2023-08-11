
import React from 'react';
import PropTypes from 'prop-types';

function Container(props) {
  const { children } = props;
  
  return (
    <main className="container">
      {children}
    </main>
  );
}

Container.PropTypes = {
  children: PropTypes.node.isRequired
}

export default Container;
