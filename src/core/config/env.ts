import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  API_PREFIX: get('DEFAULT_API_PREFIX').default('/api/v1').asString(),
  NODE_ENV: get('NODE_ENV').default('development').asString(),
  CLIENT_ID: get('CLIENT_ID').required().asString(),
  TENANT_ID: get('TENANT_ID').required().asString(),
  CLIENT_SECRET: get('CLIENT_SECRET').required().asString(),
  REDIRECT_URI: get('REDIRECT_URI').required().asString(),
};