import React from 'react';
import { AuthProvider } from './AuthProvider';
import { Routes } from './Routes';

/**
 * Wrap all providers here
 */
export const Providers = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);
