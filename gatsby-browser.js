import React from 'react';
import { ProviderAuth } from './src/hooks/useAuth';

export const wrapRootElement = ({ element }) => (
  <ProviderAuth>{element}</ProviderAuth>
);
