// src/core/auth/azureAuth.ts
import { ConfidentialClientApplication, Configuration } from '@azure/msal-node';
import { envs } from '../config/env';

// MSAL configuration
const msalConfig: Configuration = {
  auth: {
    clientId: envs.CLIENT_ID,
    authority: `https://login.microsoftonline.com/${envs.TENANT_ID}`,
    clientSecret: envs.CLIENT_SECRET,
  },
};

// Create a Confidential Client Application instance
export const cca = new ConfidentialClientApplication(msalConfig);

// Parameters for the auth code URL request
export const authCodeUrlParameters = {
  scopes: ['user.read'], // Request access to the user's profile
  redirectUri: envs.REDIRECT_URI,
};