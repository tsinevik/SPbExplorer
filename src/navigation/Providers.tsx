import React from 'react';
import { AuthProvider } from './AuthProvider';
import { Routes } from './Routes';
import { StorageProvider } from 'navigation/StorageProvider';

/**
 * Wrap all providers here
 */
export const Providers = () => (
  <AuthProvider>
    <StorageProvider>
      <Routes />
    </StorageProvider>
  </AuthProvider>
);
