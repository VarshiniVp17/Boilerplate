// src/infrastructure/config/swagger.config.ts
import swaggerJsdoc from 'swagger-jsdoc';
import { envs } from '../../core/config/env';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Azure AD Authentication API',
      version: '1.0.0',
      description: 'API for Azure AD authentication and user profile',
    },
    servers: [
      {
        url: `http://localhost:${envs.PORT}`,
        description: 'Local server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/application/controllers/*.ts'], // Path to your controllers
};

export const swaggerSpec = swaggerJsdoc(options);