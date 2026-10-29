import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

const mount = htmlElement => {
  ReactDOM.render(<App />, htmlElement);
};

if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#marketing-dev-root');

  if (element) mount(element);
}

export { mount };
