import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import React from 'react';

const generateClassname = createGenerateClassName({
  productionPrefix: 'co'
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassname}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
