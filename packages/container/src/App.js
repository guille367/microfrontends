import { StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import MarketingApp from './components/MarketingApp';

const genereratedClassName = createGenerateClassName({
  productionPrefix: 'ctn'
})

export default () => (
  <StylesProvider generateClassName={genereratedClassName}>
    <Header />
    <MarketingApp />
  </StylesProvider>
)